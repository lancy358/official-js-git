var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/show', async (req, res, next) => {
  // console.log(req.session.user)
  try {
    console.log(1)
    let result = await require('../services/users').show();
    // console.log(111)
    res.send(result);
   
  } catch (e) {
    res.send(e);
  }
})

router.get('/select', async (req, res, next) => {
  try {
    let param = req.query;
    for (x in param) {
      console.log(x + ' ' + param[x]);
      let result = await require('../services/users').select(x, param[x]);
      res.send(result);
    }
  } catch (e) {
    res.send(e);
  }
})
router.get('/update', async (req, res, next) => {
  try {
    let param = req.query;
    let attributename = [], attribute = [];
    for (x in param) {
      console.log(x + ' ' + param[x])
      attributename.push(x);
      attribute.push(param[x])
    }
    let result = await require('../services/users').update(attributename[0], attribute[0], attributename[1], attribute[1]);
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

router.get('/insert', async (req, res, next) => {
  try {
    let param = req.query;
    for (x in param) {
      console.log(x + ' ' + param[x]);
      let result = await require('../services/users').insert(x, param[x]);
      res.send(result);
    }
  } catch (e) {
    res.send(e);
  }
})
module.exports = router;
