const Cart: React.FC = () => {
  return (
    <>
      <h1>CART</h1>
      <main>
        <article>
          <h3>Item 1</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
          <button>+</button>
          <button>-</button>
        </article>
        <article>
          <h3>Item 2</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
          <button>+</button>
          <button>-</button>
        </article>
        <article>
          <h3>Item 3</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
          <button>+</button>
          <button>-</button>
        </article>
      </main>
      <section>
        <h3>TOTAL:</h3>
        <h3>300 kr</h3>
      </section>
      <h3>HOW DO YOU WANNA PAY?</h3>
      <section>
        <button>ONLINE</button>
        <button>ON SITE</button>
      </section>
    </>
  );
};

export default Cart;
