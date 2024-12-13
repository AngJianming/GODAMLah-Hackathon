import requests

API_KEY = '' 
INQUIRY_ID = 'inq_GDVJ5xde8BRHaQ6s8DDJpTXQGRnU' 

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Accept': 'application/json',
    'Persona-Version': '2023-01-05',
}

response = requests.get(
    f'https://withpersona.com/api/v1/inquiries/{INQUIRY_ID}',
    headers=headers
)

if response.status_code == 200:
    inquiry_data = response.json()
    # Process the inquiry data as needed