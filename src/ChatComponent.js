import React, { useState } from 'react';

function ChatComponent() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  function handleQuestionChange(event) {
    setQuestion(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    askQuestion(question);
  }

  function askQuestion(question) {
    fetch('http://localhost:5000/ask', {  // Replace with your Flask server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })
    .then(response => response.json())
    .then(data => {
      setResponse(data);  // Update the state with the response data
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={question} 
          onChange={handleQuestionChange}
          placeholder="Ask a question"
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {response.response}</p>}

    </div>
  );
}

export default ChatComponent;
