import React from "react";


export const CartOrders = ({ books, deleteBook }) => {
  return books.map((book) => (
    <tr key={book.isbn}>
      <td>{book.count}</td>
      <td>{book.productName}</td>
      {/* <td>{book.title}</td>
      <td>{book.author}</td>
      <td className="delete-btn" onClick={() => deleteBook(book.isbn)}>
        <Icon icon={trash} />
      </td> */}
    </tr>
  ));
};
