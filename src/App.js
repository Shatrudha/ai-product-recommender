import { useState } from "react";
import products from "./products";  

function App() {
  const [preference, setPreference] = useState("");
  const [recommended, setRecommended] = useState([]);

  //this used when click on button , i used arrow function 
  const getRecommendations = () => {
    const input = preference.toLowerCase();

    // here is Simple AI-like logic uses and here filter from product
    const filtered = products.filter(product => {
      if (input.includes("phone") && product.category === "phone") {
        return product.price <= 500;
      }
      if (input.includes("laptop") && product.category === "laptop") {
        return true;
      }
      return false;
    });

    setRecommended(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Product Recommendation System Here</h2>
       
      <input
        type="text"
        placeholder="Example: phone under 500"
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
      />

      <button onClick={getRecommendations}>
        Get Recommendation
      </button>

      <h3>Recommended Products:</h3>

      <ul>
        {recommended.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
