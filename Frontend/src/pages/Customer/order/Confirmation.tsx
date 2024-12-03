import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Confirmation: React.FC = () => {
  return (
    <>
      <Header />
      <h1>CONFIRMATION</h1>
      <main>
        <article>
          <h3>Item 1</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
        </article>
        <article>
          <h3>Item 2</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
        </article>
        <article>
          <h3>Item 3</h3>
          <p>Quantity 1</p>
          <h3>_________________</h3>
          <h3>100 kr</h3>
        </article>
      </main>
      <section>
        <h3>TOTAL:</h3>
        <h3>300 kr</h3>
      </section>
      <section>
        <h3>ESTIMATED TIME:</h3>
        <p>15 Minutes</p>
      </section>
      <section>
        <button>CHANGE MY ORDER</button>
        <button>CANCEL ORDER</button>
      </section>
      <Footer />
    </>
  );
};

export default Confirmation;
