import Card from "../../components/Card";
import MenuFilter from "../../components/MenuFilter";
import useMenuItems from "@/hooks/useMenuItems";
import { useState, useEffect } from "react";
import { MenuItem } from "@/types/Menu";
import { useCart } from "@/context/CartContext";

const Home: React.FC = () => {
  const { menuItems, isLoading, error } = useMenuItems(); // custom hook for our fetch
  const [topTwoItems, setTopTwoItems] = useState<MenuItem[]>([]);
  const { addItem } = useCart();

  // check data for the 2 items that have the higest price and then display as favorites
  
  useEffect(() => {
    if (menuItems && menuItems.length > 0) {
      const topItems = menuItems
        .sort((a, b) => b.price - a.price) // Sort by price descending
        .slice(0, 2); // Get the top two items
      setTopTwoItems(topItems);
    }
  }, [menuItems]);
  
  const addItemToCart = (item: MenuItem) => {
    const cartItem = {
      id: Number(item.menuID),
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    addItem(cartItem);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main>
      <section className="mb-20">
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow my-20">
          OUR FAVORITES
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {topTwoItems.map((item) => (
            <Card
              key={item.menuID}
              tall
              title={item.name}
              description={item.ingredients.join(", ")}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToCart={() => addItemToCart(item)}
            />
          ))}
        </div>
      </section>
      <section id="menu">
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow">
          MENU
        </h2>
        <MenuFilter addItemToCart={addItemToCart} />
      </section>
    </main>
  );
};

export default Home;