import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();

  if (!cartItems) return null;

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const increaseQty = (item) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === item.id ? { ...i, qty: (i.qty || 1) + 1 } : i
      )
    );
  };

  const decreaseQty = (item) => {
    setCartItems(prev =>
      prev
        .map(i =>
          i.id === item.id
            ? { ...i, qty: (i.qty || 1) - 1 }
            : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.priceUSD * (item.qty || 1),
    0
  );

  return (
    <div className="bg-[#1e1f24] min-h-screen p-6">
      <div className="max-w-[1100px] mx-auto">

        <h1 className="text-3xl font-bold text-white mb-6">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-[#2a2b32] p-10 text-center rounded-xl text-gray-400">
            Your cart is empty 🛒
          </div>
        ) : (
          <div className="grid md:grid-cols-[2fr_1fr] gap-6">

            {/* 🛍 Товары */}
            <div className="flex flex-col gap-4">
              {cartItems.map(item => {
                const image = item.image || item.img;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-[#2a2b32] p-4 rounded-xl border border-[#3a3b42]"
                  >
                    <img
                      src={image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded bg-white"
                    />

                    <div className="flex-1">
                      <h2 className="text-white font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        ${item.priceUSD}
                      </p>

                      {/* Количество */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQty(item)}
                          className="px-3 py-1 bg-[#1e1f24] text-white rounded hover:bg-red-600"
                        >
                          −
                        </button>

                        <span className="text-white">
                          {item.qty || 1}
                        </span>

                        <button
                          onClick={() => increaseQty(item)}
                          className="px-3 py-1 bg-[#1e1f24] text-white rounded hover:bg-green-600"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Цена + удалить */}
                    <div className="text-right">
                      <p className="text-white font-bold">
                        ${(item.priceUSD * (item.qty || 1)).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-500 hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#2a2b32] p-6 rounded-xl border border-[#3a3b42] h-fit">
              <h2 className="text-white text-xl font-semibold mb-4">
                Summary
              </h2>

              <div className="flex justify-between text-gray-400 mb-2">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-white text-lg font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-semibold transition">
                Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
