import React, { useState, useEffect } from "react";
import ProductList from "./component/ProductList";
import Logo from "./component/Logo";


function App() {
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products/view1");
      const json = await response.json();
      if (response.ok) {
        setBackendData(json);
        setLoading(true);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
     <Logo />
      {loading ? (
        <ProductList backendData={backendData} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}

export default App;
