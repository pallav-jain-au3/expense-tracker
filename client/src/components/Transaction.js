import React, {useState} from 'react';

export default function Transaction(){
    const initialState = {
        type : "income",
        category : "Food",
        amount : 0
    }
    const [transaction, setTransaction] = useState(initialState)
    const handleASubmit =  (event) => {
        event.preventDefault();
        console.log(transaction)
        setTransaction(initialState)

    }
    const handleChange = (event) => {
    let {name , value}= event.target
        setTransaction({
            ...transaction,
            [name]: value
        })

        console.log(transaction)


    }

    return (
        <div className= "container">
        <form onSubmit={()=>handleASubmit}>
            <label>Enter Amount</label>
            <input type = "text" name = "amount" onChange = {handleChange} placeholder="enter amount"
                   value = {transaction.amount} />
            <br/>
            <div >
                <input type="radio" value="income" name="type" checked = {transaction.type === "income"}
                       onChange= {handleChange}/> Income
                <input type="radio" value="expense" name="type"
                checked={transaction.type === "expense"}
                       onChange= {handleChange}
                /> Expense
            </div>
            <div>
                <select
                    value={transaction.category}
                    onChange={handleChange}
                    name = "category"
                >
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Social-life">Social Life</option>
                    <option value="Culture">Culture</option>
                    <option value="Household">Household</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            <button onClick = {handleASubmit}>Add Transaction</button>


        </form>
        </div>
    )
}
