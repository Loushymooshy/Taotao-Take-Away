const Payment: React.FC = () => {
  return (
    <>
      <main>
        <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">
          PAYMENT
        </h1>
        <div className="flex flex-row gap-60">
          <section>
            <h2>YOUR ORDERS</h2>
            <p>Lorem Ipsum</p>
            <h2>TOTAL: $100</h2>
          </section>
          <form className="bg-pandaWhite text-pandaBlack flex flex-col p-6 w-70 rounded-md">
            <label className="mt-2 font-bold" htmlFor="card-owmer">
              CARD OWNER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="card-owmer"
              name="card-owmer"
            />
            <label className="mt-2 font-bold" htmlFor="card-number">
              CARD NUMBER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="card-number"
              name="card-number"
            />
            <div className="flex flex-row gap-5">
              <div className="flex flex-col">
                <label className="mt-2 font-bold" htmlFor="validity-period">
                  VALIDITY PERIOD:
                </label>
                <input
                  className="rounded-md h-8 px-2"
                  type="text"
                  id="validity-period"
                  name="validity-period"
                />
              </div>
              <div className="flex flex-col">
                <label className="mt-2 font-bold" htmlFor="cvc">
                  CVC:
                </label>
                <input
                  className="rounded-md h-8 px-2"
                  type="text"
                  id="cvc"
                  name="cvc"
                />
              </div>
            </div>
            <button
              className="bg-themeGreen hover:bg-themeDarkGreen text-pandaWhite rounded-md mt-4 mb-2 h-12"
              type="submit"
            >
              PAY WITH CARD
            </button>
            <p className="flex justify-center items-center h-20 font-bold">
              OR
            </p>
            <label className="mt-2 font-bold" htmlFor="swish-number">
              SWISH NUMBER:
            </label>
            <input
              className="rounded-md h-8 px-2"
              type="text"
              id="swish-number"
              name="swish-number"
            />
            <button
              className="bg-themeGreen hover:bg-themeDarkGreen text-pandaWhite rounded-md mt-4 mb-2 h-12"
              type="submit"
            >
              PAY WITH SWISH
            </button>
            <button
              className="bg-themeRed
          text-pandaWhite rounded-md mt-10 mb-2 h-12"
              type="submit"
            >
              CANCEL PAYMENT
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Payment;
