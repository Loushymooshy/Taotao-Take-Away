import Card from "../../components/Card";
import MenuFilter from "../../components/MenuFilter";

const Home: React.FC = () => {
  return (
    <main>
      <section className="mb-20">
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow">
          Our Favorites
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <Card tall title="Favorite Sushi" description="Delicious sushi" price={12.99} />
          <Card tall title="Favorite Sashimi" description="Fresh sashimi" price={15.99} />
        </div>
      </section>
      <section className="mt-10">
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow">
          Menu
        </h2>
        <MenuFilter />
      </section>
    </main>
  );
};

export default Home;