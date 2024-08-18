import Table from "../Components/Table"
import UseProducts from "../customHooks/UseProducts"

function ProductsPage() {
    const[columns, products] = UseProducts()
  return (
    <>
      <Table columns={columns} data={products}/>
    </>
  )
}

export default ProductsPage
