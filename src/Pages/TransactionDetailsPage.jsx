import DetailItem from "../Components/DetailItem";

import UseTransaction from "../customHooks/UseTransaction";
import { UseSelected } from "../Components/context/SelectedTableItem";
import ReceiptIcon from "@mui/icons-material/Receipt";

function TransactionDetailsPage() {
  const [, transactions] = UseTransaction();
  const { itemId } = UseSelected();
  const transaction = transactions.find((item) => item.Id === itemId);

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <ReceiptIcon className="text-green-300" />
        <h1 className="text-2xl text-green-300 font-bold uppercase">Transaction</h1>
      </div>
      <div className="bg-[#2a263d] rounded-xl shadow-lg text-[#a7a5b8] overflow-y-auto mr-6">
        <h1 className="text-xl  text-green-200 font-semibold mx-6 my-4 border-b border-green-300 pb-3">
          Transaction Details
        </h1>
        <div className="space-y-8 pl-6 pr-6 pb-6 pt-4 mx-auto">
          {transaction ? (
            <>
              <DetailItem variant="orders" label="Transaction ID" value={transaction.TransactionId} />
              <DetailItem variant="orders" label="User ID" value={transaction.UserId} />
              <DetailItem variant="orders" label="Amount" value={`${transaction.Amount} ${transaction.Currency}`} />
              <DetailItem variant="orders" label="Date" value={transaction.Date} />
              <DetailItem variant="orders" label="Status" value={transaction.Status} />
              <DetailItem variant="orders" label="Payment Method" value={transaction.PaymentMethod} />
              <DetailItem  variant="orders" label="Description" value={transaction.Description} />
            </>
          ) : (
            <p className="text-red-500">Transaction not found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionDetailsPage;

