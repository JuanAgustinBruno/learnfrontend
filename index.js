const express = require('express');
const app = express();
const router = express.Router();

app.use('/public', express.static('./public'));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
  });

router.get('/', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip); // ip address of the user
  });
  
  app.use('/', router);


app.listen(80, () => {
    console.log('Serving on port 80')
})

