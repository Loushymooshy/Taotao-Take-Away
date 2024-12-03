const OrderHistory: React.FC = () => {
  return (
    <>
      <h1>ORDER HISTORY</h1>
      <main>
        <article>
          <div>
            <h3>1 JAN</h3>
            <button>ORDER AGAIN</button>
          </div>
          <div>
            <h3>Item 1</h3>
            <p>Quantity 1</p>
          </div>
          <div>
            <h3>Item 2</h3>
            <p>Quantity 1</p>
          </div>
        </article>
        <article>
          <div>
            <h3>2 JAN</h3>
            <button>ORDER AGAIN</button>
          </div>
          <div>
            <h3>Item 2</h3>
            <p>Quantity 1</p>
          </div>
          <div>
            <h3>Item 1</h3>
            <p>Quantity 1</p>
          </div>
        </article>
        <article>
          <div>
            <h3>3 JAN</h3>
            <button>ORDER AGAIN</button>
          </div>
          <div>
            <h3>Item 2</h3>
            <p>Quantity 2</p>
          </div>
        </article>
      </main>
      <section>
        <button>ADD PAYCARD</button>
        <button>MY DETAILS</button>
      </section>
    </>
  );
};

export default OrderHistory;
