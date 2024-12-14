from flask import Flask, request, redirect
import requests
import os

app = Flask(__name__)

CLIENT_ID = os.getenv('org_FEWcGFZqwmSeVSvWbDeZYPWcF9Ah') 
CLIENT_SECRET = os.getenv('env_z2HE8DikkRrEbEBhR6bHmjXwh3qA')
REDIRECT_URI = 'http://http://localhost:3000' 
AUTHORIZATION_BASE_URL = 'https://api.withpersona.com/api/v1/oauth/authorize'
TOKEN_URL = 'https://api.withpersona.com/api/v1/oauth/token'

@app.route('/login')
def login():
    return redirect(f"{AUTHORIZATION_BASE_URL}?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}")

@app.route('/callback')
def callback():
    code = request.args.get('code')
    response = requests.post(TOKEN_URL, data={
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
    })
    token_data = response.json()
    access_token = token_data.get('access_token')
    return f"Access Token: {access_token}"  # Replace with further processing logic

if __name__ == '__main__':
    app.run(debug=True)
