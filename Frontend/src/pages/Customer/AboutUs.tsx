import Header from "../../components/button/Header";
import Footer from "../../components/button/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <h1>ABOUT US</h1>
      <section>
        <p>
          Welcome to our Japanese restaurant, where we bring the rich and
          diverse flavors of Japan to your table. Our passion for authentic
          Japanese cuisine is reflected in every dish we serve, from traditional
          sushi and sashimi to comforting ramen and hearty bento boxes. We
          believe that dining is not just about food; it’s an experience to be
          savored and shared.
        </p>
        <p>
          At our restaurant, we source only the freshest ingredients, ensuring
          that each meal is crafted with care and attention to detail. Our
          skilled chefs are trained in the art of Japanese cooking, dedicating
          themselves to preserving time-honored techniques while also embracing
          modern culinary innovations.
        </p>
        <p>
          Whether you’re a long-time lover of Japanese food or trying it for the
          first time, we invite everyone to join us for a meal. Our warm and
          inviting atmosphere is perfect for family gatherings, romantic
          dinners, or casual lunches with friends. We also offer a variety of
          vegetarian and gluten-free options to accommodate all dietary
          preferences.
        </p>
        <p>
          Come and experience the essence of Japan through our delicious dishes
          and exceptional service. We look forward to welcoming you to our
          Japanese restaurant, where every meal is a celebration of flavor and
          culture.
        </p>
      </section>
      <h1>CONTACT US</h1>
      <section>
        <article>
          <p>If you have any questions please contact us at:</p>
          <p>Phone: +46 123 456 789</p>
          <p>Email: taotao@example.com</p>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Opening hours: 10:00 - 22:00</p>
          <p>
            <a href="https://www.facebook.com/taotaotakeaway">Facebook</a>
          </p>
          <p>
            <a href="https://www.instagram.com/taotaotakeaway">Instagram</a>
          </p>
          <p>
            <a href="https://www.tiktok.com/taotaotakeaway">Tiktok</a>
          </p>
        </article>
        <article>
          <form>
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">MESSAGE:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">SEND</button>
          </form>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
