const { response, request } = require('express');
const express = require('express');
const { getUser, getPlays } = require('./controller');
const router = express.Router();

router.get('/:username', async (req = request, resp = response, next) => {
  var friends = await getUser(req.params.username);
  var plays = await getPlays(req.params.username);
  const result = [].concat(friends, plays);
  resp.json(result);
});

module.exports = router;
