import { useState } from 'react';
import ReactMarkdown from "react-markdown";

function CodeCommenter() {
  const [code, setCode] = useState('');
  const [commentedCode, setCommentedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copyText, setCopyText] = useState('Copy');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://127.0.0.1:5000/code-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate comments');
      }

      const data = await response.json();
      setCommentedCode(data.commented_code || data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commentedCode);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Code Comment Generator</h1>

        {/* Input Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Input Code:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 border rounded font-mono bg-gray-50"
            placeholder="Paste your code here..."
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !code.trim()}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 mb-4"
        >
          {loading ? 'Generating Comments...' : 'Generate Comments'}
        </button>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Output Section */}
        {commentedCode && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Generated Code with Comments:</label>
              <button
                onClick={handleCopy}
                className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
              >
                {copyText}
              </button>
            </div>
            <div className="w-full h-64 p-4 border rounded overflow-auto bg-gray-50 font-mono">
              <ReactMarkdown className="whitespace-pre-wrap">{commentedCode}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeCommenter;
