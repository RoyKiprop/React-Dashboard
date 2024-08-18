/* eslint-disable react/prop-types */

function Button({children, onclick}) {
  return (
    <button
    onClick={onclick}
    >
      {children}
    </button>
  )
}

export default Button
