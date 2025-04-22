"use client";
import { useState, useEffect } from "react";
import Headline from "@/components/Headline";
import OfferCard from "@/components/OfferCard";
import PageBanner from "@/components/PageBanner";
import RestaurantMenu from "@/components/RestaurantMenu";
import WellFoodLayout from "@/layout/WellFoodLayout";
import {
  fetchAllCategories,
  fetchPizzasByCategory,
} from "@/services/menuPizzaServices";

// Helper function to get icon based on category name
const getCategoryIcon = (categoryName) => {
  const iconMap = {
    "Non-Vegetarian": "flaticon-cupcake",
    Vegetarian: "flaticon-broccoli",
    Seafood: "flaticon-crab",
    Drinks: "flaticon-poinsettia",
    // Add more mappings as needed
  };

  return iconMap[categoryName] || "flaticon-cupcake"; // Default icon
};

// Helper function to get base price from sizes
const getBasePrice = (sizes) => {
  try {
    const sizeObj = typeof sizes === "string" ? JSON.parse(sizes) : sizes;
    return sizeObj.SMALL || "10"; // Default to small size price or 10
  } catch (e) {
    return "10"; // Default price if parsing fails
  }
};

const MenuPizzaPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const response = await fetchAllCategories();
        if (response && response.data) {
          setCategories(response.data);
          // Set the first category as selected by default
          if (response.data.length > 0) {
            setSelectedCategory(response.data[0].id);
          }
        }
      } catch (err) {
        console.error("Error loading categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  // Fetch pizzas when a category is selected
  useEffect(() => {
    const loadPizzas = async () => {
      if (!selectedCategory) return;

      try {
        setLoading(true);
        const response = await fetchPizzasByCategory(selectedCategory);
        if (response && response.data && response.data.pizzas) {
          setPizzas(response.data.pizzas);
        }
      } catch (err) {
        console.error("Error loading pizzas:", err);
        setError("Failed to load pizzas. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPizzas();
  }, [selectedCategory]);

  // Format categories for the RestaurantMenu component
  const formattedCategories = categories.map((category) => ({
    id: category.id,
    title: category.name,
    icon: getCategoryIcon(category.name),
    event: `food-tab-${category.id}`,
    items: [], // This will be populated when a category is selected
  }));

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Format pizzas for the RestaurantMenu component
  const formatPizzasForMenu = (pizzas) => {
    return pizzas.map((pizza) => ({
      id: pizza.id,
      title: pizza.name,
      price: getBasePrice(pizza.sizes),
      decs: pizza.description || "Delicious pizza with fresh ingredients",
      img: pizza.imageUrl
        ? `/uploads/${pizza.imageUrl}`
        : "/assets/images/food/pm-food1.png",
      ingredients: [], // You can add default ingredients if needed
      toppings: [], // You can add default toppings if needed
    }));
  };

  // Update the items for the selected category
  const menuItems = formattedCategories.map((category) => {
    if (category.id === selectedCategory) {
      return {
        ...category,
        items: formatPizzasForMenu(pizzas),
      };
    }
    return category;
  });

  return (
    <WellFoodLayout>
      {/* <PageBanner pageTitle={"Menu pizza"} /> */}
      {/* <Headline /> */}
      <RestaurantMenu
        menus={menuItems}
        loading={loading}
        error={error}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      {/* <OfferCard /> */}
    </WellFoodLayout>
  );
};

export default MenuPizzaPage;
