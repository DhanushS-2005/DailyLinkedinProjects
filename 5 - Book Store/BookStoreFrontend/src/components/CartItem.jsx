function CartItem({ item, removeItem }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">

        <div>
          <h5>{item.book.title}</h5>
          <p className="mb-1">
            Author: {item.book.author}
          </p>

          <p className="mb-1">
            Price: ₹{item.book.price}
          </p>

          <p className="mb-1">
            Quantity: {item.quantity}
          </p>

          <h5 className="text-success">
            ₹{item.subtotal}
          </h5>
        </div>

        <button
          className="btn btn-danger"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>
    </div>
  );
}

export default CartItem;