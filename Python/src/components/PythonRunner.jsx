import { useEffect, useState } from "react";

function PythonRunner({ code }) {
    const [output, setOutput] = useState(""); // To store Python output

    useEffect(() => {
        async function runPython() {
            const pyodide = await window.loadPyodide(); // Load Pyodide
            try {
                // Redirect sys.stdout to capture print output
                const fullCode = `
import sys
from io import StringIO
sys.stdout = StringIO()

# User code
${code}

# Get captured output
sys.stdout.getvalue()
        `;

                const result = pyodide.runPython(fullCode); // Execute Python code
                setOutput(result.trim()); // Store and trim the output
            } catch (err) {
                setOutput(`Error: ${err.message}`); // Handle errors
            }
        }
        runPython(); // Automatically run when the component mounts
    }, [code]); // Re-run if code changes

    return (
        <div className="overflow-hidden">
            <pre className="text-green-600 bg-black font-bold whitespace-pre-wrap break-words overflow-x-auto px-4 py-2">
                {code}
            </pre>
            <pre className="bg-green-600 text-black font-bold whitespace-pre-wrap break-words overflow-x-auto px-4 py-2">
                {output}
            </pre>
        </div>
    );
}

export default PythonRunner;
