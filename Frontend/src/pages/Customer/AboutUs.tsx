import pandaIcon from "../../assets/pandaicon.svg";

const AboutUs: React.FC = () => {
  return (
    <>
      
      <main>
        <h1 className="flex justify-center items-center text-4xl font-black h-48 font-Darumadrop">ABOUT US</h1>
        <section className="flex">
        <article className="flex w-1/2 justify-center">
          <img src={pandaIcon} alt="pandaIcon"/>
        </article>
        <article className="w-1/2">
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
        </article>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
