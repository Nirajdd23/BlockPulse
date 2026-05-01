from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/test", methods=["GET"])
def test():
    return jsonify({"message": "Backend is working 🚀"})

if __name__ == "__main__":
    app.run(debug=True)
