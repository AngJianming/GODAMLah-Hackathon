import os 
from supabase import Client,create_client

#Environ for system wide access (supabase)
os.environ["supabase_url"]="https://lhnoptcoelsmxxobzewx.supabase.co"
os.environ["supabase_key"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxobm9wdGNvZWxzbXh4b2J6ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4OTQyNzMsImV4cCI6MjA0NjQ3MDI3M30.M6KWgmvB8BIaPH2zuJ382hP1tWMwnNcEYWk3TLw4X1U"
url:str=os.environ.get("supabase_url")
key:str=os.environ.get("supabase_key")
supabase:Client=create_client(url,key)

#Confirmation Email Upon Registration
def register(username,email,password):
    try:
        response=supabase.auth.sign_up(
        {
            "username":username,
            "email":email,
            "password":password
        }
         )
        print("Registered Succesfully")
    except Exception as e:
        print(e)
        #Show Notification
    
def sign_in(email,password):
    try:
        response=supabase.auth.sign_in_with_password(
            {
                "email":email,
                "password":password
            }
        )
        print("Success")
        
    except Exception as e:
        print("Error",e)

#Use oauth to sign in. If success run the redirect to. (Not sure if works in front end)
def sign_in_oauth():
    try:
        response=supabase.auth.sign_in_with_oauth({
            "provider":"google",
            "provider":"github",
            "options":{
                "redirect_to":"https://pageAfterSuccessfulLogin"
            }
        })
    except Exception as e:
        print (e)
        

def sign_out():
    try:
        response=supabase.auth.sign_out
        print("Signed Out.")
    except Exception as e:
        print(e)
    