const http = require("http")
const express = require("express")
const app = express()
const path = require("path")
const socketio = require("socket.io")
const { text } = require("express")

app.use(express.static(path.join(__dirname+"/..", "client")))

const server = http.createServer(app);
const io = socketio(server)

io.on("connection", (sock) => {
  sock.emit("msg", "You are connected");

  sock.on("msg", (text) => io.emit("msg", text));
})
server.on("error", (err) => {
    console.log("error")
})
  
server.listen(8000, () => {
    console.log("server is ready")
})
/*app.get('/', function (req, res) {
    res.render('index', {});
  });*/

