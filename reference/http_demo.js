const http = require('http');

http.createServer((req,res) =>{

    //write response
    res.write("Hello frome NodeJS");
    res.end();
}  )

.listen(5000,() => console.log("Server Running...."));