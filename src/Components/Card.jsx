/* eslint-disable react/prop-types */

function Card({children}) {
  return (
    <div className="transform transition duration-300 hover:shadow-sm hover:scale-105  bg-[#2a263d] p-3 space-y-1 rounded-lg text-[#9490a7] text-lg w-full cursor-pointer ">
        {children}
      
    </div>
  )
}

export default Card
