interface ExpenseTableProps {
  items: { description: string; amount: number; category: string }[];
  onDelete: (item: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}

const ExpenseTable = ({ items, onDelete }: ExpenseTableProps) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr key={0}>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
        {items.map((item, index) => (
          <tr key={index + 1}>
            <td>{item.description}</td>
            <td>{item.amount}$</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr key={items.length + 1}>
          <td>Total</td>
          <td>
            {items.map((item) => item.amount).reduce((sum, x) => sum + x, 0)}$
          </td>
          <td></td>
          <td></td>
        </tr>
      </thead>
    </table>
  );
};

export default ExpenseTable;
