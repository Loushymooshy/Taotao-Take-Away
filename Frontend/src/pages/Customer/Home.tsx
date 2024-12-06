import Card from "../../components/Card";

const Home: React.FC = () => {
  return (
    <main>
      <section className="mt-10">
        <h2 className="text-4xl font-Darumadrop font-bold text-center">
          Our Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Card />
          <Card />
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-4xl font-Darumadrop font-bold text-center">Menu</h2>

        <div className="flex justify-center mt-10 space-x-4">
          <button className="px-4 py-2 bg-themeDarkGreen text-white rounded-full hover:bg-themeGreen">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            TaoTao sushi
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Rolls
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Sashimi
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Other
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};

export default Home;
