import axios from "axios"
//post(url,json).then((response)=>action) ->then is called when success
//.catch((error)=>action) ->if failed


//get, postr
let url="http://127.0.0.1:5000"

async function main(){
    await axios.post(url,{name:"John",age:5})
    .then((Response) => console.log(Response.status))
    .catch((error)=>console.log(error))
}

main();