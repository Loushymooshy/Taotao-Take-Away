const Contact: React.FC = () => {
  return (
    <>
      <h1>CONTACT US</h1>
      <section className="flex justify-center pb-28">
        <form className="bg-pandaWhite text-pandaBlack  flex flex-col p-6 w-1/3 rounded-md">
          <label className="mt-2 font-bold"
          htmlFor="name">NAME:</label>
          <input className="rounded-md h-8 px-2" type="text" id="name" name="name" />
          <label className="mt-4 font-bold" htmlFor="email">EMAIL:</label>
          <input className="rounded-md h-8 px-2 " type="email" id="email" name="email" />
          <label className="mt-4 font-bold " htmlFor="message">MESSAGE:</label>
          <textarea className="rounded-md" id="message" name="message"></textarea>
          <button className="bg-themeGreen text-pandaWhite rounded-md mt-4 mb-2 h-12" type="submit">SEND</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
