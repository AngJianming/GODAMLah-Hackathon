from flask import Flask, request, jsonify
import auth 

#flask init
app=Flask(__name__)
link="http://127.0.0.1:5000"

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
        return "LOCAL SERVER"
    



