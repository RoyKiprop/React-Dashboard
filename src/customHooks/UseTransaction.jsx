import { useEffect, useState } from "react"

function UseTransaction() {
  const columns = ["TransactionId", "Amount", "Date", "Status"]
  const[transactions, setTransactions] = useState([])
   
    useEffect(function (){
        async function fetchTransaction(){
            try{
              const response = await fetch("../data/Transaction.json")
              if(!response.ok) throw new Error("Something went wrong while fetching transactions")
              const data = await response.json()
              setTransactions(data)
              if (data.Response === "False") throw new Error ("Transactions not found")
            }
            catch(error){
                console.error(error)
            }
        }
        fetchTransaction()
    }, [])
  return [columns, transactions]
}

export default UseTransaction