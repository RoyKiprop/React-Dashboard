import { useEffect, useState } from "react"

function UseProducts() {
  const column = ["id", "name", "sku", "price", "category", "quantity", "size", "brand", "material", "color"]
   const[Products, setProducts] = useState([])
   
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
  return [Products, column]
}

export default UseProducts
