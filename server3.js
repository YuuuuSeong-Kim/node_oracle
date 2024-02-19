let http = require("http");
let express = require("express");
let app = express();

app.use(express.static("public"));
app.use(express.bodyParser());
app.use(app.router)

let bookDAO = require("./bookDAO");


app.get("/listBook", async  (req, res)=> {
    let arr = await bookDAO.listBook();
    res.send(arr)
})

app.post("/insert",  (req, res)=> {
    var re = bookDAO.insert(req);
    res.send(re)
})

app.post("/update", (req,res)=>{
    var re = bookDAO.update(req)
    res.send(re)
})

app.post("/delete", (req,res)=>{
    var re = bookDAO.del(req.body)
    res.send(re)
})

http.createServer(app).listen(52273, "192.168.0.57",  () =>{
    console.log("서버 가동됨")
})