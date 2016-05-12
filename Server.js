var http = require('http')
, fs = require('fs')
;

var server = http.createServer(function(request, response)
{
  fs.readFile('dm.mp4', function(err, data)
{

  if(err)
    {
            response.writeHead(404);
            response.write("File does not exist");
            response.end();
    }
    else
    {

           response.writeHead(200, {'Content-Type': 'txt/mp4'});
            response.write(data);

            response.end();
    }
  }); 
});
server.listen(7777, '192.168.0.1');

console.log("listening");



