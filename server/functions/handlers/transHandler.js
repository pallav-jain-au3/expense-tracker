const {db}= require('../utils/admin')

exports.addTransaction = function(req, res){
    let {type , amount, category,userId} = req.body
    let transaction = {
        type,
        amount,
        userId,
        category,
        createdAt: Date.now()
    }

         db.collection('transactions')
         .add(transaction)
        .then(data => res.status(200).json({id: data.id}))
        .catch(err => res.status(400).json({err: err.message}))
}
