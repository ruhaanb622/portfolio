export class CodeExecutor {
  constructor({ editor, outputElement, execTimeElement, languageSelect, pythonURI, javaURI, fetchOptions = {} } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.languageSelect = languageSelect;
    this.pythonURI = pythonURI;
    this.javaURI = javaURI;
    this.fetchOptions = fetchOptions;
  }

  async run() {
    const code = this.editor?.getValue?.() || '';
    const lang = this.languageSelect?.value || 'python';
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    if (!outputDiv) {
      throw new Error('CodeExecutor requires an output element');
    }

    outputDiv.textContent = '⏳ Running...';
    if (execTimeSpan) execTimeSpan.textContent = '';

    const startTime = Date.now();
    const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

    let runURL;
    if (lang === 'python') runURL = `${this.pythonURI}/run/python`;
    else if (lang === 'java') runURL = `${this.javaURI}/run/java`;
    else if (lang === 'javascript') runURL = `${this.pythonURI}/run/javascript`;
    else throw new Error(`Unsupported language: ${lang}`);

    const body = JSON.stringify({ code });
    const options = { ...this.fetchOptions, method: 'POST', body };

    try {
      const res = await fetch(runURL, options);
      const result = await res.json();
      const output = result.output || '[no output]';

      if (lang === 'javascript' && isLocalhost && output.includes("No such file or directory: 'node'")) {
        throw new Error('Node.js not available on backend');
      }

      outputDiv.textContent = output;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms`;
      }
    } catch (err) {
      if (lang === 'python') {
        await this.runPythonBrowserFallback(code, startTime, err);
      } else if (lang === 'javascript' && isLocalhost) {
        this.runJavaScriptFallback(code, startTime);
      } else {
        outputDiv.textContent = 'Error: ' + err.message;
        if (execTimeSpan) execTimeSpan.textContent = '';
      }
    }
  }

  async runPythonBrowserFallback(code, startTime, networkError) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      outputDiv.textContent = '⏳ Backend unavailable; loading browser Python...';

      if (!CodeExecutor.pyodidePromise) {
        CodeExecutor.pyodidePromise = import('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.mjs')
          .then(({ loadPyodide }) => loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'
          }));
      }

      const pyodide = await CodeExecutor.pyodidePromise;
      const stdout = [];
      const stderr = [];

      pyodide.setStdout({ batched: (text) => stdout.push(text) });
      pyodide.setStderr({ batched: (text) => stderr.push(text) });

      const result = await pyodide.runPythonAsync(code);

      const lines = [...stdout, ...stderr];
      if (result !== undefined && result !== null && lines.length === 0) {
        lines.push(String(result));
      }

      outputDiv.textContent = lines.length > 0 ? lines.join('\n') : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (browser fallback)`;
      }
    } catch (fallbackError) {
      const backendMessage = networkError?.message ? `Backend: ${networkError.message}. ` : '';
      outputDiv.textContent = `Error: ${backendMessage}Browser Python fallback: ${fallbackError.message}`;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  runJavaScriptFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      const logs = [];
      const originalLog = console.log;
      console.log = function(...args) {
        logs.push(args.map(arg => String(arg)).join(' '));
        originalLog.apply(console, args);
      };

      eval(code);
      console.log = originalLog;

      outputDiv.textContent = logs.length > 0 ? logs.join('\n') : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (local fallback)`;
      }
    } catch (evalErr) {
      outputDiv.textContent = 'Error: ' + evalErr.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  bindCopyOutput(button) {
    if (!button || !this.outputElement) return;

    button.addEventListener('click', () => {
      const output = this.outputElement.textContent;
      const original = button.textContent;
      navigator.clipboard.writeText(output).then(() => {
        button.textContent = '✔';
        setTimeout(() => {
          button.textContent = original;
        }, 1200);
      });
    });
  }
}

export default CodeExecutor;
