# coding: utf-8

"""
Suppose you have some texts of news and know their categories.
You want to train a system with this pre-categorized/pre-classified
texts. So, you have better call this data your training set.
"""
from lib import get_classer
from data import newsSet
from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def ma_loop(value):
    newsClassifier = get_classer()
    classification = newsClassifier.classify(value)
    return classification

@app.route("/", methods=['GET', 'POST'])
@cross_origin()
def home():
    params = request.get_json()
    classification = ma_loop(params["text"])
    # gestion des probabilités
    category = classification[0][0]
    return jsonify({ "category": category }), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)
