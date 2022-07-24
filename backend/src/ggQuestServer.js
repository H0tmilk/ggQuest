const dataProvider = require('./dataProvider.js')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/quests', async (req, res) => {
  res.status(200).json(await dataProvider.getQuests());
})

app.get('/api/quests/:id', (req,res) => {
  const id = parseInt(req.params.id)
  res.status(200).json(dataProvider.getQuestsById(id));
})

app.get('/api/reputation_scores', (req, res) => {
  res.status(200).json(dataProvider.getReputationScores());
})

app.get('/api/reputation_scores/:address', (req, res) => {
  const address = req.params.address
  res.status(200).json(dataProvider.getReputationScoresByAddress(address))
})


app.listen(port, () => {
  console.log(`ggQuest Server now listening on port ${port}`)
})