/* eslint-disable react/prop-types */

function Card({ children,  onClick, className }) {
;

  const classes = `${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;

