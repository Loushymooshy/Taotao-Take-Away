const Contact: React.FC = () => {
  return (
    <>
      <main className="w-1/2 mx-auto mt-10">
        <h1>CONTACT US</h1>
        <form className="bg-pandaWhite text-pandaBlack  flex flex-col p-6 w-70 rounded-md mb-28">
          <label className="mt-2 font-bold"
          htmlFor="name">NAME:</label>
          <input className="rounded-md h-8 px-2" type="text" id="name" name="name" />
          <label className="mt-4 font-bold" htmlFor="email">EMAIL:</label>
          <input className="rounded-md h-8 px-2 " type="email" id="email" name="email" />
          <label className="mt-4 font-bold " htmlFor="message">MESSAGE:</label>
          <textarea className="rounded-md" id="message" name="message"></textarea>
          <button className="bg-themeGreen text-pandaWhite rounded-md mt-4 mb-2 h-12" type="submit">SEND</button>
        </form>
        </main>
    </>
  );
};

export default Contact;
