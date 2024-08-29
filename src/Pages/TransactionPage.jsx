import Table from "../Components/Table";

import ReceiptIcon from "@mui/icons-material/Receipt";
import UseTransaction from "../customHooks/UseTransaction";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { UseSelected } from "../Components/context/SelectedTableItem";

function TransactionPage() {
  const [columns, transactions] = UseTransaction();
  const { itemId } = UseSelected();
  const transaction = transactions.find((item) => item.Id === itemId);
  return (
    <div className="space-y-8">
      <div className="flex space-x-2 items-center">
        <ReceiptIcon className="text-green-300" />
        <h1 className="text-2xl text-green-300 font-bold">TRANSACTIONS</h1>
      </div>
      <div className="flex space-x-5">
        <div className="bg-[#2a263d] space-y-5  p-8 rounded-xl ">
          <div className="flex justify-between mr-4">
            <h4 className="text-lg text-green-300">Manage Transactions</h4>
            <Link to={"/products/add-product"}>
              <Button> New Transaction</Button>
            </Link>
          </div>
          <Table columns={columns} data={transactions} />
        </div>
       {itemId && <div className="bg-[#2a263d] rounded-xl mr-6 w-[22.5%]   text-[#a7a5b8] ">
          <h1 className="text-xl text-center mx-6 my-4 font-bold">
            Transaction Details
          </h1>
          <hr></hr>
          <div className=" space-y-3 p-6">
            <div>
              <h2 className="font-bold text-lg">TransactionId:</h2>
              <p className="text-sm">{transaction?.TransactionId}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">UserId:</h2>
              <p className="text-sm">{transaction?.UserId}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Amount:</h2>
              <p className="text-sm">{transaction?.Amount}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Currency:</h2>
              <p className="text-sm">{transaction?.Currency}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Date:</h2>
              <p className="text-sm">{transaction?.Date}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Status:</h2>
              <p className="text-sm">{transaction?.Status}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">PaymentMethod:</h2>
              <p className="text-sm">{transaction?.PaymentMethod}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Description:</h2>
              <p className="text-sm">{transaction?.Description}</p>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default TransactionPage;
