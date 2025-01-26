import MenuFilter from "../../components/MenuFilter";
import { MenuItem } from "../../types/Menu";
import { useCart } from "@/context/CartContext";

const UpdateMenu: React.FC = () => {
  const addItemToCart = (item: MenuItem) => {
    const { addItem } = useCart();

    const cartItem = {
      id: Number(item.menuID),
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    addItem(cartItem);
  };

  return (
    <main>
      <section id="menu">
        <h2 className="flex justify-center items-center text-4xl font-black font-Darumadrop drop-shadow">
          MENU
        </h2>
        <MenuFilter addItemToCart={addItemToCart} />
      </section>
    </main>
  );
};

export default UpdateMenu;
