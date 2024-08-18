/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';

function Search({search, setSearchValue}) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="w-1/5" onSubmit={handleSubmit}>
      <div className="relative w-[100%]">
        <input
          value={search}
          type="text"
          className="w-full h-12 pl-4 pr-8 py-2 bg-[#2a263d] focus:outline-none focus:text-[#a7a5b8] hover:text-[#a7a5b8] "
          placeholder="Search here..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchIcon
          className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-[#a7a5b8]"
        />
      </div>
    </form>
  )
}

export default Search

