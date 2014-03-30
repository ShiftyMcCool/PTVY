var express = require("express"),
    fs = require('fs'),
    app = express(),
    filename = '../data/PageTemplatePortfolio.json',
    port = parseInt(process.env.PORT, 10) || 8080;

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(app.router);
});

app.get('/', function(req,res) {
  res.write("Nothing Here");
  res.end();
});

app.get('/get', function(req,res) {
  fs.readFile(filename, "binary", function (err, file) {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain"
      });
      res.write(err + "\n");
      console.log(err);
      res.end();
      return;
    }
    
    res.writeHead(200);
    res.write(file, "binary");
    res.end();
  });
});

app.post('/save', function(req,res) {
  fs.writeFile(filename, JSON.stringify(req.body, null, 4), function(err) {
    if(err) {
      res.writeHead(500, {
        "Content-Type": "text/plain"
      });
      res.write(err + "\n");
      console.log(err);
      res.end();
      return;
    } else {
      console.log("The file was saved!");
    }
  });

  res.writeHead(200);
  res.write("Saved!");
});

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');