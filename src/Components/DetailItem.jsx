/* eslint-disable react/prop-types */
function DetailItem({ label, value, variant }) {
  const classVariation = {
    orders: "flex justify-between items-center",
    users: "p-5 flex items-center "
  };

  return (
    <div className={classVariation[variant]}>
      <h2 className="font-semibold text-lg text-white w-1/2">{label}:</h2>
      <p className="text-sm text-[#a7a5b8] w-1/2">{value}</p>
    </div>
  );
}

export default DetailItem;
