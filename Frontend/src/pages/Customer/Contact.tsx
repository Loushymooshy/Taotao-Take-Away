const Contact: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
