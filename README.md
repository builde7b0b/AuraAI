# 🔮 AuraAI: Spiritual Chatbot Guide

AuraAI is an innovative chatbot that provides insights into numerology and astrology, offering users a unique spiritual guidance experience.

## 🌟 Features

- Interactive chatbot for numerology and astrology insights
- User authentication system
- Stripe integration for premium features
- Responsive UI design
- MongoDB database integration

## 🛠 Tech Stack

- Frontend: React.js
- Backend: Python (Flask)
- Database: MongoDB
- Payment Processing: Stripe
- Authentication: JWT

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x
- MongoDB
- Stripe account

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/auraai.git
   cd auraai
   ```

2. Set up the frontend:
   ```
   cd frontend
   npm install
   ```

3. Set up the backend:
   ```
   cd ../backend
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   Create `.env` files in both frontend and backend directories with necessary configurations.

## 🖥 Running the Application

1. Start the frontend (from the frontend directory):
   ```
   npm start
   ```

2. Start the backend (from the backend directory):
   ```
   python app.py
   ```

## 🧪 Testing

Run frontend tests:
```
cd frontend
npm test
```

Run backend tests:
```
cd backend
python -m unittest discover tests
```

## 🔒 Security Notes

- Always use environment variables for sensitive information
- Ensure CORS is properly configured
- Use HTTPS in production

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [InfiniMVP Team]
