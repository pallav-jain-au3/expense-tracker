const functions = require('firebase-functions');
const app = require('express')()
const {addTransaction} = require('./handlers/transHandler')


app.post('/transaction/add', addTransaction)

exports.api = functions.https.onRequest(app)


