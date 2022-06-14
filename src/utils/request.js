function fetchRequest(){
    fetch("/api/io").then(async (response)=>{
        let data=await response.text()
        console.log(data);
    })
}

fetchRequest()