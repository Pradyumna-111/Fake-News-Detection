# 📰 Fake News Detector

AI-powered web app to detect real vs. fake news articles using advanced NLP.

---

## 🚀 Features

- 🧠 **AI-based detection**: Uses a fine-tuned transformer (BERT/DistilBERT) to classify and score news content as real or fake.
- 🌐 **Web frontend**: Modern, fast Vite + React UI for easy text entry and instant feedback.
- 💡 **Probability & explanations**: Returns fake/real probabilities for transparency.
- 🔒 **REST API**: Flask backend serving ML predictions.
- 🔂 **Extensible**: Easily retrain model or swap in more efficient transformers.

---

## 📁 Project Structure

fake-news-detector/
│
├── backend/ # Flask API (serving model)
│ ├── app.py
│ ├── model/
│ │ └── fine_tuned_bert/ # Model weights, tokenizer files
│ ├── requirements.txt
│ └── ...
│
├── frontend/ # Vite + React web client
│ ├── src/
│ ├── package.json
│ └── ...
│
├── .gitignore
└── README.md

