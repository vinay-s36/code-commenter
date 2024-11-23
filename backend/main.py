from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os

# load environment variables
load_dotenv()

app = Flask('__name__')
CORS(app)
API_KEY = os.getenv('API_KEY')

# configure Generative AI
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')


@app.route('/', methods=['GET'])
def home():
    return 'Code commenter!'


@app.route('/code-comments', methods=['POST'])
def comments():
    data = request.get_json()
    code = data.get('code', '')

    if not code:
        return jsonify({'error': 'No code provided'}), 400

    prompt = f"""
    As an expert code documentation specialist, analyze this code and add clear, meaningful comments that:
    1. Explain the purpose of each function (brief docstring)
    2. Clarify important variable purposes
    3. Explain logic flows where needed

    Guidelines:
    - Focus on explaining 'why' and 'what' the code does
    - Keep comments concise but informative
    - Add comments only where they add value
    - Use clear, professional language

    CODE:
    {code}

    Important: Return ONLY the commented code, nothing else.
    """

    response = model.generate_content(prompt)
    return jsonify({'commented_code': response.text})


if __name__ == '__main__':
    app.run(debug=True)
