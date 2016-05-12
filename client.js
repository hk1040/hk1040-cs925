var http = require('http');
var options = {
host:'192.168.0.1',
path: '/',
port:7777
};
var pastTime;
var transferRate;
callback = function(response) {

var str = '';
response.on('data', function (chunk) {
str += chunk;
});

response.on('end', function () {
var end = new Date() - start;
console.log('The actual Request took:', end, 'ms');
//transferRate = bytes_trans / (cur tim - start time)
transferRate = 1 / (end*0.001);
console.log('The actual download rate is :', transferRate, 'Mbps');

if( pastTime == null)
{
console.log('the expected mean is :', end , 'ms');
pastTime = end;

console.log('The predicted download rate is :', transferRate, 'Mbps');

}
else
{
var mean = ((end + pastTime)/2) + 3.2;
console.log('the expected mean is :', mean , 'ms');
pastTime = end;
transferRate = 1 / (mean*0.001);
console.log('The predicted download rate is :', transferRate, 'Mbps');

}
//transferRate = bytes_trans / (cur tim - start time)




});
}
var start;

setInterval(function ()
 {

start = new Date();

http.request(options, callback).end();

console.log('sent request');}, 3000);



