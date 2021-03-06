const express = require('express')
var morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))



morgan.token('result', function(req, res) {
  return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :result'))  

let persons = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  }
]
  app.get('/', (req, res) => {
    res.send('<h1>Hi this is the webpage to be used as an API for persons in a phonebook. </h1>')
  })
  app.get('/info', (req, res) => {
    res.send(`<p> Phonebook has info for ${persons.length} people</p> <p> ${new Date()} </p>`)
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
  
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  const generateId = () => {
    const max = 100000
    return Math.floor(Math.random() * Math.floor(max))
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'Name or Number is missing' 
      })
    }

    names = persons.map(person => person.name)
    if (names.includes(body.name)) {
      return response.status(400).json({ 
        error: 'Name must be unique' 
      })
    }

    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })


  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })