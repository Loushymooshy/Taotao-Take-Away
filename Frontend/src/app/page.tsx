import { ShoppingCartDropdown } from "@/components/shopping-cart";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col dark:bg-zinc-950">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Store</h1>
          <ShoppingCartDropdown />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Store</h2>
        <p>Click on the cart icon in the header to view your shopping cart.</p>
      </main>
    </div>
  );
}
