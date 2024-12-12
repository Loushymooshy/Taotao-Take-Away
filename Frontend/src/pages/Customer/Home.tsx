import Card from "../../components/Card";
import MenuFilter from "../../components/MenuFilter";

const Home: React.FC = () => {
  return (
    <main>
      <section className="mb-20">
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow my-20">
          OUR FAVORITES
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <Card
            tall
            title="Yellowtail Nigiri"
            description="rice, soy sauce, yellowtail"
            price={6.99}
          />
          <Card
            tall
            title="California Roll"
            description="avocado, crab meat, cucumber, nori, rice, soy sauce"
            price={7.99}
          />
        </div>
      </section>
      <section>
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow">
          MENU
        </h2>
        <MenuFilter />
      </section>
    </main>
  );
};

export default Home;
