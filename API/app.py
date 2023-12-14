from openai import OpenAI
import openai
client = OpenAI(api_key='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')
from flask import Flask, request, jsonify
from flask_cors import CORS
import os


app = Flask(__name__)

CORS(app)
# Replace 'your-api-key' with your actual OpenAI API key

# client = OpenAI(
#     # This is the default and can be omitted
#     api_key=os.environ.get("OPENAI_API_KEY"),
# )


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json['question']
    user_input = request.json['question']
    response = client.chat.completions.create(
        messages=[
            {"role": "user", "content": user_input}
        ],
        model="gpt-3.5-turbo",  # Using the specified model
    )

  # Correctly handling the response
    if response and response.choices:
        return jsonify({"response": response.choices[0].message.content})  # Correctly access the content
    else:
        return jsonify({"error": "No response from the API"})

if __name__ == '__main__':
    app.run(debug=True)

