/* eslint-disable react/prop-types */

function Button({children, onclick}) {
  return (
    <button
    className="py-2 px-5 text-white font-medium outline-none bg-green-500 rounded-md"
    onClick={onclick}
    >
      {children}
    </button>
  )
}

export default Button
