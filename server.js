var http=require('http'); //creates an http module object
var fs=require('fs'); //creates an fs module object

/*
This is the variable to set up the server and its routes
 */
var server=http.createServer(function(req,res){
    console.log("A request was made: "+req.url);

    if(req.url==='/home'||req.url==='/') // this is the route to the index page
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/static/index.html').pipe(res);
    }

    else if(req.url=='/stylesheet.css') // this is the route to the stylesheet
    {
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream(__dirname+'/static/stylesheet.css').pipe(res);
    }

    else if(req.url=='/main.js') //this is the route to the javascript file that performs the API call
    {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream(__dirname+'/static/main.js').pipe(res);
    }

    else
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/static/notfound.html').pipe(res);
    }
});

server.listen(3000,'0.0.0.0');
console.log('Server started:');
