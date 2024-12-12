import { useEffect, useState } from "react";
import Card from "./Card";
import getMenu from "@/api/getMenu";
import { MenuItem } from "@/types/Menu";

// Filter categories
const categories = ["All", "Sushi", "Sashimi", "Rolls", "Appetizers"];

const MenuFilter: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu();
        setMenuItems(data);
        console.log(data);
      } catch {
        console.error("Error fetching menu items");
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mt-10 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={` w-full px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-themeGreen text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-6">
        {filteredItems.map((item) => (
          <Card
            key={item.menuID}
            title={item.name}
            description={item.ingredients.join(", ")} // Convert ingredients array to a string
            price={item.price}
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No items found in this category.
        </p>
      )}
    </div>
  );
};

export default MenuFilter;
