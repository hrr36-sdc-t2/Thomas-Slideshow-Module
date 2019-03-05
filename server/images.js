const router = require('express').Router();
const path = require('path');

router.get('/:imgPath', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + `/../images/${req.params.imgPath}.jpg`), err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
})

module.exports = router;