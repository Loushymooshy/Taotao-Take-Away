
import { useState } from "react"
import Card from "./Card"

// Menu item type
type MenuItem = {
  id: number
  name: string
  category: string
  price: number
}

// Menu data (normally this would come from an API or database)
const menuItems: MenuItem[] = [
  { id: 1, name: "Salmon Nigiri", category: "Sushi", price: 5.99 },
  { id: 2, name: "Tuna Sashimi", category: "Sashimi", price: 7.99 },
  { id: 3, name: "California Roll", category: "Rolls", price: 6.99 },
  { id: 4, name: "Miso Soup", category: "Appetizers", price: 2.99 },
  { id: 5, name: "Yellowtail Nigiri", category: "Sushi", price: 6.99 },
  { id: 6, name: "Octopus Sashimi", category: "Sashimi", price: 8.99 },
  { id: 7, name: "Spicy Tuna Roll", category: "Rolls", price: 7.99 },
  { id: 8, name: "Edamame", category: "Appetizers", price: 3.99 },
  { id: 9, name: "Pickled Beets", category: "Appetizers", price: 3.99 },
]

// Filter categories
const categories = ["All", "Sushi", "Sashimi", "Rolls", "Appetizers"]

const MenuFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mt-10 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={` w-full px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category ? "bg-themeGreen text-white" : "bg-gray-200 text-gray-700"
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
            key={item.id}
            title={item.name}
            description={item.category}
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
  )
}

export default MenuFilter