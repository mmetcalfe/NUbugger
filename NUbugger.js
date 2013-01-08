var Robot = require('./robot');

function NUbugger (io) {
    
    var self = this;
    
    self.io = io;
    self.robot = new Robot();
    self.robot.connect();
    self.robot.on('error', function () {
	
    });
    
    self.io.sockets.on('connection', function (socket) {
	
//        var i = 1;
//        setInterval(function () {
//	    var buf = new Buffer([20,50,70]);
//            socket.emit('camera_image', { message: i, image: buf.toString()});
//            i++;
//        }, 1000);
        
	//socket.emit('news', { hello: 'world', position: self.robot.getPosition() });
	//socket.on('my other event', function (data) {
	//	
	//	console.log(data);
	//	
	//});
	
	self.robot.on("state", function (event) {
	    
	    socket.emit("state", event);
	    
	});
        
    });
    
}

module.exports = NUbugger;