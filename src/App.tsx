// import { useState } from "react";
// import CategoryFilter from "./components/CategoryFilter";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseTable from "./components/ExpenseTable";
// import Expense from "./Expense";

// function App() {
//   const categories = ["Groceries", "Utilities", "Entertainment"];
//   const emptyExpenses: Expense[] = [];
//   const [items, addItems] = useState(emptyExpenses);
//   const [usedItems, changeUsedItems] = useState(items);

//   return (
//     <>
//       <ExpenseForm
//         categories={categories}
//         onSubmit={(data) => {
//           addItems([...items, data as Expense]);
//           changeUsedItems([...usedItems, data as Expense]);
//         }}
//       ></ExpenseForm>
//       <br />
//       <br />
//       <CategoryFilter
//         categories={categories}
//         onSelect={(category) => {
//           if (category === "") {
//             changeUsedItems([...items]);
//           } else {
//             changeUsedItems([
//               ...items.filter((item) => item.category === category),
//             ]);
//           }
//         }}
//       />
//       <br />
//       <br />
//       {usedItems.length > 0 && (
//         <ExpenseTable
//           items={usedItems}
//           onDelete={(deleteItem) => {
//             addItems(
//               items.filter(
//                 (item) =>
//                   item.description !== deleteItem.description ||
//                   item.amount !== deleteItem.amount ||
//                   item.category !== deleteItem.category
//               )
//             );
//             changeUsedItems(
//               usedItems.filter(
//                 (item) =>
//                   item.description !== deleteItem.description ||
//                   item.amount !== deleteItem.amount ||
//                   item.category !== deleteItem.category
//               )
//             );
//           }}
//         />
//       )}
//     </>
//   );
// }

// export default App;

// import React, { useEffect, useRef, useState } from "react";
// import ProductList from "./components/ProductList";

// const connect = () => console.log("Connecting....");
// const disconnect = () => console.log("Disconnecting....");

// const App = () => {
//   const [category, setCategory] = useState<string>("");

//   useEffect(() => {
//     document.title = "My App";
//   });

//   useEffect(() => {
//     connect();

//     return () => disconnect();
//   });

//   return (
//     <>
//       {/* <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} /> */}
//     </>
//   );
// };

// export default App;

import usePhotos from "./hooks/usePhotos";

const App = () => {
  const { photos, error, isLoading, setPhotos, setError } = usePhotos();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div>
        {photos
          .filter((p) => p.id < 10)
          .map((p) => (
            <img src={p.thumbnailUrl}></img>
          ))}
      </div>
    </>
  );
};

export default App;
