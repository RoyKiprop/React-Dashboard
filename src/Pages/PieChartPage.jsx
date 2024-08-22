import PieChart from "../Components/PieChart"
import UseProducts from "../customHooks/UseProducts"
import PieChartIcon from '@mui/icons-material/PieChart';


function PieChartPage() {
  const [, products] = UseProducts()

  console.log(products)
  return (
    <div className="space-y-8 h-[80%]">
      <div className="flex space-x-1 items-center">
        <h1 className="text-2xl text-white font-bold">PIE CHART</h1>
        <PieChartIcon className="text-white" />
      </div>

      <div className="bg-[#2a263d]  h-full p-6 rounded-xl  mr-6">
        <PieChart  data={products} />
      </div>
    </div>
  )
}

export default PieChartPage
