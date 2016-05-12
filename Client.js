var http = require('http');
var options = 
{
host:'192.168.0.1',
path: '/',
port:7777
};
var previousTime;
var assignedValue;
callback = function(response) 
{

var str = '';
response.on('data', function (chunk) 
{
str += chunk;
});

response.on('end', function () 
{
var end = new Date() - start;
console.log('The actual Request took:', end, 'ms');
assignedValue = 1 / (end*0.001);
console.log('The actual download rate is :', assignedValue, 'Mbps');

if( previousTime == null)
{
console.log('the expected mean is :', end , 'ms');
previousTime = end;

console.log('The predicted download rate is :', assignedValue, 'Mbps');

}
else
{
var mean = ((end + previousTime)/2) + 3.2;
console.log('the expected mean is :', mean , 'ms');
previousTime = end;
assignedValue = 1 / (mean*0.001);
console.log('The predicted download rate is :', assignedValue, 'Mbps');

}
});
}
var start;

IntervalTime(function ()
 {

start = new Date();

http.request(options, callback).end();

console.log('sent request');}, 3000);



