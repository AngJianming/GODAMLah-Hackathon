import os 
from supabase import Client,create_client

#Environ for system wide access

url:str=os.environ.get("supabase_url")
key:str=os.environ.get("supabase_key")
supabase:Client=create_client(url,key)

#password should be string
#After this part, it will send a confirmation email
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
    