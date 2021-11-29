const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

var percent = 0;
function eatCount() {
  $(".monsterText").html("Click a<br>Monster to<br> Join a Room<br>to Chat");
}

var timer = setInterval(function () {
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent >= 100) {
    $(".pageLoading").addClass("complete");

    clearInterval(timer);
    setTimeout(eatCount, 3000);
  }
}, 30);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/javascript', (req, res) => {
    res.sendFile(__dirname + '/javascript.html');
});

app.get('/swift', (req, res) => {
    res.sendFile(__dirname + '/swift.html');
});

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/css.html');
});
// tech namespace
const tech = io.of('/tech');

tech.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', `New user joined ${data.room} room!`)
    })
    socket.on('message', (data) => {
        console.log(`message: ${data.msg}`);
        tech.in(data.room).emit('message', data.msg);
    });
    socket.on('discounnect', () => {
        console.log('user disconnected');

        tech.emit('message', 'user disconnected');

    })
})