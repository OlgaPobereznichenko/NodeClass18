const express = require('express');

const app = express();

app.listen(3000,function(){
    console.log("App listening at port 3000");
});

app.get('/', function(request,response){
    response.send("Hello , I received your request");
});
app.post('/', function(request,response){
    response.send("Hello , You sent me a post request");
});
app.put('/', function(request,response){
    response.send("Hello ,You sent me a put request");
});
app.delete('/', function(request,response){
    response.send("Hello , I received delete a request");
});
app.get('/products', function(request,response){
    response.send("Hello , I received your product request");
});
app.post('/products', function(request,response){
    response.json({productName: 'storage', category: 'Outdoor storage'});
});
app.put('/products', function(request,response){
    response.send("Hello ,You sent me a put product request");
});
app.delete('/products', function(request,response){
    response.send("Hello , I received delete product request");
});
