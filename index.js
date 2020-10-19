const { dbConnect } = require('./dbConnect')
const express = require('express')
const fs = require('fs')
const FlightRoute =  require('./routes/planroute')
const PlaceRouter  =  require('./routes/placeroute')

dbConnect()
const app =  express()
app.use(express.json())
app.use('/api',FlightRoute)
app.use('/api/places', PlaceRouter)
app.listen('8080')