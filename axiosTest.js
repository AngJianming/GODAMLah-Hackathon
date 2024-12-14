const axios=require("axios")

//post(url,json).then((response)=>action) ->then is called when success
//.catch((error)=>action) ->if failed


//get, postr
let url="http://127.0.0.1:5000"

async function main(){
    await axios.post(url,{"username":"John","email":"wztan715@gmail.com","password":"123456"})
    .then((Response)=>console.log(Response))
}

main();