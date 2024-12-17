from flask import Flask, request, jsonify
from flask_cors import CORS
import auth

#flask init
app=Flask(_name_)
link="http://127.0.0.1:5000"
CORS(app)

#Flask Setup
@app.route("/",methods=["GET","POST"])
#flask request to get the json file
def handle_request():
    if request.method=="POST":
        data=request.get_json()
        #the data returned is to the js file
        if data:
            auth.register(data.get("username"),data.get("email"),data.get("password"))
            return "Register"
        else:
            return "NO Data"
    else:
        return "LOCAL SERVER"