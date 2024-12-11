const Cart = () => {
  return (
    <main className="w-1/2 mx-auto">
      <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
        CART
      </h1>

      <div className="bg-pandaWhite p-6 rounded-lg drop-shadow flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">YOUR ORDERS</h1>

        {/* Lista över varor */}
        <ul>
          <li className="py-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Pizza Margherita
              </h2>
              <p className="text-sm text-gray-500">Quantity: 2</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg text-gray-800">190 kr</p>
              <button className="text-red-500 hover:text-red-700 font-medium">
                REMOVE
              </button>
            </div>
          </li>
          <li className="py-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Caesarsallad
              </h2>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg text-gray-800">85 kr</p>
              <button className="text-red-500 hover:text-red-700 font-medium">
                REMOVE
              </button>
            </div>
          </li>
          <li className="py-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Sushi (10 bitar)
              </h2>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg text-gray-800">120 kr</p>
              <button className="text-red-500 hover:text-red-700 font-medium">
                REMOVE
              </button>
            </div>
          </li>
        </ul>

        {/* Totalpris */}
        <div className="mt-6 pt-4 border-t border-pandaBlack">
          <h3 className="text-lg font-bold text-right text-gray-800">
            TOTAL: 395 kr
          </h3>
        </div>

        {/* Betalningsalternativ */}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
            PAYMENT METHODS
          </h2>
          <div className="flex justify-center space-x-4 mb-4">
            <label
              className="flex 
          items-center space-x-2"
            >
              <input
                type="radio"
                name="payment"
                value="Online"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-700">ONLINE</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="On Site"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-700">ON SITE</span>
            </label>
          </div>
        </div>

        {/* Kommentarer */}
        <div className="mt-4">
          <label className="block text-base font-medium text-gray-700 mb-1">
            Your message to the chef!
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Type your message here..."
          />
        </div>

        {/* Checkout-knapp */}
        <button className="w-full hover:bg-red-800 bg-themeRed text-pandaWhite rounded-md mt-4 h-12">
          CHECKOUT
        </button>
      </div>
    </main>
  );
};

export default Cart;
