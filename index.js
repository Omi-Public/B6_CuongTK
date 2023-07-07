const {connection} = require('./db');
var express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.post('/', async function(req, res){
  // console.log(req.query);
  // console.log(req.params);
  // console.log(req.);

  res.json(req.query);
});

app.get('/user', async function (req, res){
  const id = req.query.id;
  console.log(id);
  connection.query('SELECT * FROM user WHERE ID=?',[id], function (error, results, fields) {
     res.send("Hello " + results[0].user)
  })
})

app.get('/login', function (req, res){
  var user = req.query.user;
  var password = req.query.password;
  connection.query('SELECT * FROM user WHERE user=? AND password=?',[user,password], function (error, results, fields) {
    console.log(results);
    if (results){
      res.send("Hello " + results[0].user);
    }
    else {
      res.send("user not found")
    }
  })
})

app.post('/create', async function (req, res){
  var user = req.query.user;
  var password = req.query.password;
  var age = req.query.age;
  var country = req.query.country;
  var birthday = Reg.query.birthday;

    //res.send(username);
  connection.query('Insert into user(`user`, `password`,`age`,`country`,`birthday`) values(?,?,?,?,?)',[user, password,age,country,birthday],function (error, results, fields) {
    res.send(results)
  });
  var user = await connection.query('SELECT * FROM user where id = 1', function (error, results, fields) {
    res.send(results)
  });
    //res.json(JSON.stringify(user));
    //res.send(user);
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", 'localhost', port)
})