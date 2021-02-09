const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/pokemon/:pokemon', (req, res) => {
  request
    .get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router