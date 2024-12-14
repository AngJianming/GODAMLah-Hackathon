1:5000"

async function main(){
    await axios.post(url,{name:"John",age:5})
    .then((Response) => console.log(Response.data))
    .catch((error)=>console.log(error))
}

main();