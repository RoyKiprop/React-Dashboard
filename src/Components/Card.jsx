/* eslint-disable react/prop-types */

function Card({ children, variant, onClick, className }) {
  const classVariation = {
    filter: "bg-gray-100 p-5 rounded-lg",
    products: "bg-white rounded-lg overflow-hidden",
  };

  const classes = `${classVariation[variant]} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;

