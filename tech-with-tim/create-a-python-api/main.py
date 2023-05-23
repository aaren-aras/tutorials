from flask import Flask, request, jsonify

# Create Flask app
app = Flask(__name__)

# Set up route (API endpoint) with data to return

'''
@app.route("/")
def home():
    return "Home"
'''

# <user_id> is a path parameter that can be passed in the URL
# GET is the default method, but can be specified with `methods=["GET"]`


@app.route("/get-user/<user_id>")
def get_user(user_id):
    user_data = {
        "user_id": user_id,
        "name": "John Doe",
        "email": "john.doe@example.com"
    }

    # Access query parameters (after "?" in URL)
    extra = request.args.get("extra")

    if extra:
        user_data["extra"] = extra

    # Return user data in JSON format
    return jsonify(user_data), 200


@app.route("/create-user", methods=["POST"])
def create_user():
    # Checks method type with `if request.method == "POST"``
    # Receive JSON data from user request, and confirm receival
    data = request.get_json()
    return jsonify(data), 201


# Run Flask server
if __name__ == "__main__":
    app.run(debug=True)

'''
Run Flask API with "python main.py" in terminal;
Try: http://127.0.0.1:5000/get-user/123?extra=hello
'''
