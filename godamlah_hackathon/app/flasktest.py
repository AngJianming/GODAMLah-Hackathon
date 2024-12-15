from flask import Flask, request, jsonify

app=Flask(__name__)
link="http://127.0.0.1:5000"

#get (when reload), post (when js sends data over)

#have to set up the page first. then use method to allow operations
@app.route("/",methods=["GET","POST"])
#flask request to get the json file
def handle_request():
    if request.method=="POST":
        data=request.get_json()
        if data:
            return jsonify({"message": "Data received successfully", "data": data}), 200
        else:
            return jsonify({"error": "No data received"}), 400
    else:
        return "No request."
    
    
def hi():
    print("Hello Word")
    return "sigma sigma boy"

if __name__=="__main__":
    app.run(debug=True)