from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import ml
import subprocess

app = Flask(__name__)
CORS(app)

@app.route("/api/data")
def get_data():
    # Load data from JSON file or database
    with open("symptom.json") as file:
        data = json.load(file)
    return jsonify(data)

@app.route("/store_symptoms", methods=["POST"])
def store_symptoms():
    selected_symptoms = request.json.get("symptoms", [])
    
    # Call ML script here
    prediction = ml.predict_disease_by_kushal(selected_symptoms)

    # Here you can add code to store the selected symptoms and prediction
    return jsonify({"selected_symptoms": selected_symptoms, "prediction": prediction})

def run_ml_script(selected_symptoms):
    # Modify the path accordingly if ML.py is in the services folder
    process = subprocess.Popen(["python", "services/ML.py", json.dumps(selected_symptoms)], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()
    if process.returncode != 0:
        print("Error running ML script:", error.decode())
        return None
    else:
        return output.decode()

if __name__ == "__main__":
    app.run(debug=True)
