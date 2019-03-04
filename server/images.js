const router = require('express').Router();
const path = require('path');
const cors = require('cors');

router.get('/:imgPath', cors(), (req, res) => {
  res.status(200).sendFile(path.join(__dirname + `/../images/${req.params.imgPath}.jpg`));
})

module.exports = router;