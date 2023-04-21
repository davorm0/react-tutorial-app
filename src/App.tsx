import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import ExpandableText from "./components/ExpandableText";
import ExpenseForm from "./components/ExpenseForm";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import ExpenseTable from "./components/ExpenseTable";
import Expense from "./Expense";

function App() {
  const categories = ["Groceries", "Utilities", "Entertainment"];
  const emptyExpenses: Expense[] = [];
  const [items, addItems] = useState(emptyExpenses);
  const [usedItems, changeUsedItems] = useState(items);

  return (
    <>
      <ExpenseForm
        categories={categories}
        onSubmit={(data) => {
          addItems([...items, data as Expense]);
          changeUsedItems([...usedItems, data as Expense]);
        }}
      ></ExpenseForm>
      <br />
      <br />
      <CategoryFilter
        categories={categories}
        onSelect={(category) => {
          if (category === "") {
            changeUsedItems([...items]);
          } else {
            changeUsedItems([
              ...items.filter((item) => item.category === category),
            ]);
          }
        }}
      />
      <br />
      <br />
      {usedItems.length > 0 && (
        <ExpenseTable
          items={usedItems}
          onDelete={(deleteItem) => {
            addItems(
              items.filter(
                (item) =>
                  item.description !== deleteItem.description ||
                  item.amount !== deleteItem.amount ||
                  item.category !== deleteItem.category
              )
            );
            changeUsedItems(
              usedItems.filter(
                (item) =>
                  item.description !== deleteItem.description ||
                  item.amount !== deleteItem.amount ||
                  item.category !== deleteItem.category
              )
            );
          }}
        />
      )}
    </>
  );
}

export default App;
