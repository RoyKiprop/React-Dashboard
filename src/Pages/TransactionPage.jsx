import Table from "../Components/Table";
import ReceiptIcon from "@mui/icons-material/Receipt";
import UseTransaction from "../customHooks/UseTransaction";

function TransactionPage() {
  const [columns, transactions] = UseTransaction();

  return (
    <div className="space-y-8">
      <div className="flex space-x-2 items-center">
        <ReceiptIcon className="text-green-300" />
        <h1 className="text-2xl text-green-300 font-bold">TRANSACTIONS</h1>
      </div>

      <div className={`bg-[#2a263d] space-y-5 p-8 rounded-xl  mr-6`}>
        <h4 className="text-md text-green-300">Manage Transactions</h4>
        <Table path={"transactions"} columns={columns} data={transactions} />
      </div>
    </div>
  );
}

export default TransactionPage;
