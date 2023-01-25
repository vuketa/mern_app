import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
   const fetchProducts = async () => {
    const response = await fetch('/api/products')
    const json = await response.json()
    if(response.ok) {
      setBackendData(json)
    }
   }
   fetchProducts()
  }, []);

  return (
    <div>
      {backendData && backendData.map((product) => {
        return <p>{product.name}</p>
      })}
    </div>
  );
}

export default App;
