import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CatalogPage() {
  useEffect(() => {
    // Here you can fetch data for campers
  }, []);

  return (
    <div>
      <h1>Catalog of Campers</h1>
      {/* You will loop through campers here */}
      <div>
        <h2>Camper 1</h2>
        <p>Details of the camper...</p>
        <Link to="/catalog/1">
          <button>Show more</button>
        </Link>
      </div>
      <button>Load More</button>
    </div>
  );
}

export default CatalogPage;
