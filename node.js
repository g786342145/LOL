var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    console.log('收到的请求：' + req.url );
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    res.end();
});
server.listen(3000,function(){
    console.log( '服务器已启动，地址：http://localhost:3000' );
    
});