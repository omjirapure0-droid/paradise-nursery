import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2e4b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 22,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Boston Fern",
    price: 28,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 35,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 32,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1600411833111-9e6c1e9f3c0d?auto=format&fit=crop&w=500&q=80",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8f7c5b1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 24,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 21,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Burro's Tail",
    price: 27,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },

  // Tropical Plants
  {
    id: 13,
    name: "Monstera",
    price: 35,
    category: "Tropical",
    image:
      "https://images.unsplash.com/photo-1614594576270-0d2f4b7c3f4f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Bird of Paradise",
    price: 45,
    category: "Tropical",
    image:
      "https://images.unsplash.com/photo-1597055181300-1a5b5f7f5f0f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Calathea",
    price: 38,
    category: "Tropical",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Philodendron",
    price: 34,
    category: "Tropical",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Fiddle Leaf Fig",
    price: 42,
    category: "Tropical",
    image:
      "https://images.unsplash.com/photo-1597055181449-8b8b8b8b8b8b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "ZZ Plant",
    price: 28,
    category: "Tropical",
    image:
      "https://images.unsplash.com/photo-1632207691148-4e4a3c9b6c3d?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    if (!isInCart(plant.id)) {
      dispatch(addItem(plant));
    }
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      <main id="plants" className="product-list">
        <h2>Our Plants</h2>

        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h3>{category}</h3>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <article className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-thumbnail"
                    />

                    <h4>{plant.name}</h4>

                    <p>${plant.price}</p>

                    <button
                      className="add-to-cart"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;