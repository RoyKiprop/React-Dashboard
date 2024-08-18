import { useEffect, useState } from "react"

function UseUsers() {
  const columns = ["Id", "Name", "Email", "Phone", "Role"]
   const[users, setUsers] = useState([])
   
    useEffect(function (){
        async function fetchProducts(){
            try{
              const response = await fetch("../data/Users.json")
              if(!response.ok) throw new Error("Something went wrong while fetching Users")
              const data = await response.json()
              setUsers(data)
              if (data.Response === "False") throw new Error ("Users not found")
            }
            catch(error){
                console.error(error)
            }
        }
        fetchProducts()
    }, [])
  return [columns, users]
}

export default UseUsers