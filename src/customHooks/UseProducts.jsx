import { useEffect, useState } from "react"

function UseProducts() {
  const columns = ["Id", "Name", "SKU", "Price", "Category", ""]
   const[products, setProducts] = useState([])
   
    useEffect(function (){
        async function fetchProducts(){
            try{
              const response = await fetch("../data/sneakers.json")
              if(!response.ok) throw new Error("Something went wrong while fetching sneakers")
              const data = await response.json()
              setProducts(data)
              if (data.Response === "False") throw new Error ("Sneakers not found")
            }
            catch(error){
                console.error(error)
            }
        }
        fetchProducts()
    }, [])
  return [columns, products]
}

export default UseProducts
