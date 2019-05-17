module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "MongoDB": {
    "url": "process.env.MONGODB_URI",
    "name": "MongoDB",
    "connector": "mongodb"
  }
}

// mongodb://localhost:27017