import os 
from supabase import Client,create_client

#Environ for system wide access
os.environ["supabase_url"]="https://lhnoptcoelsmxxobzewx.supabase.co"
os.environ["supabase_key"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxobm9wdGNvZWxzbXh4b2J6ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4OTQyNzMsImV4cCI6MjA0NjQ3MDI3M30.M6KWgmvB8BIaPH2zuJ382hP1tWMwnNcEYWk3TLw4X1U"

url:str=os.environ.get("supabase_url")
key:str=os.environ.get("supabase_key")
supabase:Client=create_client(url,key)

#password should be string
#After this part, it will send a confirmation email. (needs improvement)
def register(username,email,password):
    response=supabase.auth.sign_up(
        {
            "username":username,
            "email":email,
            "password":password
        }
    )
    return response
    
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

        

def sign_out():
    try:
        response=supabase.auth.sign_out
        print("Signed Out.")
    except Exception as e:
        print(e)
    
#sign_in("wenzhe1423@gmail.com","123456")
sign_out()