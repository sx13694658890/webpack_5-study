const http=require('http');


const app=http.createServer((req,res)=>{
    if(req.url=="/api/io"){
        res.end("node http server")
    }
})


app.listen(8088,"localhost",()=>{
    console.log("server start");
})