const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  request
    .get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})


module.exports = router