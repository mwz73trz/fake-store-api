import { useEffect, useState } from "react";
import fakeStoreAPI from "../api/FakeStoreAPI";
import Categories from "../components/Categories";

function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await fakeStoreAPI.getAllCategories();
    setCategories(data ? data : []);
  };

  const renderCategories = () => {
    return categories.map((category, index) => {
      return <Categories key={index} category={category} />;
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      {renderCategories()}
    </div>
  );
}

export default HomePage;
