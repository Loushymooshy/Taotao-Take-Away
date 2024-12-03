import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Payment: React.FC = () => {
  return (
    <>
      <Header />
      <h1>PAYMENT</h1>
      <form>
        <section>
          <label htmlFor="card-owmer">CARD OWNER:</label>
          <input type="text" id="card-owmer" name="card-owmer" />
          <label htmlFor="card-number">CARD NUMBER:</label>
          <input type="text" id="card-number" name="card-number" />
          <label htmlFor="validity-period">VALIDITY PERIOD:</label>
          <input type="text" id="validity-period" name="validity-period" />
          <label htmlFor="cvc">CVC:</label>
          <input type="text" id="cvc" name="cvc" />
          <button type="submit">PAY WITH CARD</button>
        </section>
        <p>OR</p>
        <section>
          <label htmlFor="swish-number">SWISH NUMBER:</label>
          <input type="text" id="swish-number" name="swish-number" />
          <button type="submit">PAY WITH SWISH</button>
        </section>
        <section>
          <button type="submit">CANCEL PAYMENT</button>
        </section>
      </form>
      <Footer />
    </>
  );
};

export default Payment;
