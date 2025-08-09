from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import BertTokenizer, BertForSequenceClassification
import torch
import os

# === Paths ===
MODEL_PATH = os.path.join("model", "fine_tuned_bert")  # Relative path

# === Load model & tokenizer once on startup ===
print("Loading model and tokenizer...")
tokenizer = BertTokenizer.from_pretrained(MODEL_PATH)
model = BertForSequenceClassification.from_pretrained(MODEL_PATH)
model.eval()
print("Model ready.")

# === Flask app ===
app = Flask(__name__)
CORS(app)  # Allow CORS by default for dev/test

def predict_fake_news(text):
    # Preprocess + predict
    inputs = tokenizer(
        text,
        return_tensors='pt',
        truncation=True,
        padding=True,
        max_length=256  # Consistent with training
    )
    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.softmax(outputs.logits, dim=1).tolist()[0]

    label_id = int(torch.argmax(outputs.logits, dim=1))
    return {
        "label": "Fake" if label_id == 1 else "Real",
        "fake_prob": probs[1],
        "real_prob": probs[0]
    }

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text")  # expects: {"text": "..."}
    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Prediction
    result = predict_fake_news(text)
    return jsonify(result)

if __name__ == "__main__":
    # Change port as needed.
    app.run(debug=True, port=5000)
