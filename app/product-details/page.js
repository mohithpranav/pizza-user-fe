// "use client";
// import FixedBtn from "@/components/custom/FixedBtn";
// import PageBanner from "@/components/PageBanner";
// import WellFoodLayout from "@/layout/WellFoodLayout";
// import Link from "next/link";
//  import { useRouter } from 'next/navigation';

// import { useSearchParams } from "next/navigation";

// import { useDispatch } from "react-redux";
// import { addItem } from "../../features/cart/cartSlice.js";

// import React, { useEffect, useState, useRef } from "react";



// import { Nav, Tab } from "react-bootstrap";
// const page = () => {

//   const dispatch = useDispatch();
//   const router = useRouter();
 
//   // const [ingredients, setIngredients] = useState([]);
//   // const [Toppings,setToppings] = useState([]);



//   const searchParams = useSearchParams();

//   const title = searchParams.get("title");
//   // const price = searchParams.get("price");
//   const desc = searchParams.get("desc");
//   const img = searchParams.get("img");
//   const BasePrice = Number(searchParams.get("price"));

//   const [ingredients, setIngredients] = useState([]); // Default to empty array
//   const [Toppings, setToppings] = useState([]); // Default to empty array
//   const [initialBasePrice, setInitialBasePrice] = useState(0); // Static base price
//   const [tempPrice, setTempPrice] = useState(0); // Tracks current price dynamically
//   const [finalPrice, setFinalPrice] = useState(0); // Final price displayed to the user
//   const [quantity, setQuantity] = useState(1);
//   const hasSetInitialPrice = useRef(false); // To track if the initial price has been set
  
//   // Load ingredients from searchParams
//   useEffect(() => {
//     const ingredientsString = searchParams.get("ingredients");
//     if (ingredientsString) {

//       const parsedIngredients = JSON.parse(ingredientsString);
//       setIngredients(parsedIngredients); // Set ingredients
//     }
//   }, [searchParams]);
  
//   // Load toppings from searchParams
//   useEffect(() => {
//     const ToppingsString = searchParams.get("toppings");
//     if (ToppingsString) {
//       const parsedToppings = JSON.parse(ToppingsString);
//       setToppings(parsedToppings); // Set toppings
//     }
//   }, [searchParams]);
  
//   // Calculate the initial price only once after data is loaded
//   useEffect(() => {
//     if (!hasSetInitialPrice.current && (ingredients.length > 0 || Toppings.length > 0)) {
//       const basePrice =
//         ingredients.reduce(
//           (sum, ingredient) =>
//             ingredient.quantity > 0 ? sum + Number(ingredient.price) * Number(ingredient.quantity) : sum,
//           0
//         ) +
//         Toppings.reduce(
//           (sum, topping) =>
//             topping.quantity > 0 ? sum + Number(topping.price) * Number(topping.quantity) : sum,
//           0
//         ) + BasePrice;
  
//       console.log("Calculating initial base price:", basePrice);
  
//       setInitialBasePrice(basePrice*quantity );
//       setFinalPrice(basePrice*quantity);
//       setTempPrice(basePrice*quantity);
  
//       hasSetInitialPrice.current = true; // Ensure this block runs only once
//     }
//   }, [ingredients, Toppings, BasePrice, quantity]); // Dependencies ensure this runs after data is populated
  
//   // Update tempPrice and finalPrice dynamically
//   useEffect(() => {
//     const basePrice =
//       ingredients.reduce(
//         (sum, ingredient) =>
//           ingredient.quantity > 0 ? sum + Number(ingredient.price) * Number(ingredient.quantity) : sum,
//         0
//       ) +
//       Toppings.reduce(
//         (sum, topping) =>
//           topping.quantity > 0 ? sum + Number(topping.price) * Number(topping.quantity) : sum,
//         0
//       ) + BasePrice ;
  
//     setTempPrice(basePrice*quantity);
  
//     if (basePrice > initialBasePrice) {
//       setFinalPrice(basePrice*quantity);
//     } else {
//       setFinalPrice(initialBasePrice*quantity);
//     }
//   }, [ingredients, Toppings, BasePrice, initialBasePrice, quantity]);
  
  




//   // const calculatePrice = () => {
//   //   // Calculate the current price based on user selections
//   //   const ingredientTotal = ingredients.reduce(
//   //     (sum, ingredient) =>
//   //       sum +
//   //       (ingredient.included || ingredient.quantity > 0 ? Number(ingredient.price) * Number(ingredient.quantity) : 0),
//   //     0
      
//   //   ); console.log(ingredients)
  
//   //   const toppingTotal = Toppings.reduce(
//   //     (sum, topping) =>
//   //       sum +
//   //       (topping.included || topping.quantity > 0 ? Number(topping.price) * Number(topping.quantity) : 0),
//   //     0
//   //   );
    
  
//   //   let calculatedPrice = ingredientTotal + toppingTotal;
  
//   //   // Update temporary price (tempPrice) to reflect reductions
//   //   setTempPrice((prevTempPrice) => {
//   //     // If the calculated price goes below the base price
//   //     if (calculatedPrice < initialBasePrice) {
//   //       return calculatedPrice; // Allow tempPrice to go below base price
//   //     } else {
//   //       return prevTempPrice; // Keep it as is when above base price
//   //     }
//   //   });
  
//   //   // Update finalPrice based on tempPrice logic
//   //   setFinalPrice((prevFinalPrice) => {
//   //     if (calculatedPrice >= initialBasePrice) {
//   //       return calculatedPrice; // Normal price updates when above base price
//   //     } else if (calculatedPrice > tempPrice) {
//   //       return calculatedPrice; // Increase price from tempPrice when it's higher
//   //     } else {
//   //       return Math.max(initialBasePrice, tempPrice); // Ensure final price respects base price
//   //     }
//   //   });
//   // };



//   const maxQuantity = 3;
//   const maxPizzaQuantity = 9;


  


//   const updateQuantity = (index, operation) => {
//     setIngredients((prevIngredients) =>
//       prevIngredients.map((ingredient, idx) =>
//         idx === index
//           ? {
//               ...ingredient,
//               quantity:
//                 operation === "add"
//                   ? Math.min(ingredient.quantity + 1, maxQuantity)
//                   : Math.max(ingredient.quantity - 1, 0),
//             }
//           : ingredient
//       )
//     ); 
//     // calculatePrice()
//   };
//  const updatedToppingQuantity = (index, operation) => {
//   setToppings((prevTopping )=> 
//     prevTopping.map((Toppings,idx) =>
//        idx === index
//   ? 
//   {
//     ...Toppings,
//     quantity:
//        operation == "add"
//        ? Math.min(Toppings.quantity + 1, maxQuantity)
//        : Math.max(Toppings.quantity - 1, 0),
//     }:Toppings
//   )    
// );
// //  calculatePrice()

//  }

//  const removeIngredient = (index) => {
//   setIngredients((prevIngredients) =>
//     prevIngredients.map((ingredient, idx) =>
//       idx === index ? { ...ingredient, quantity: 0, included: false } : ingredient
//     )
//   );
//   // calculatePrice()
// };

// const removeToppings = (index)=>{
//   setToppings((prevToppings) =>
//   prevToppings.map((Topping,idx) =>
//   idx === index ? {...Topping, quantity:0, included:false} : Topping )
//   );
//   // calculatePrice()
// }


//   const handleIncrease = (event) => {
//       event.preventDefault();
//     if (quantity < 10) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleDecrease = (event) => {
//       event.preventDefault();
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };



  

//   const [size, setSize] = useState('Small');


//   const getPrice = () => {
//       switch (size) {
//           case 'Medium':
    
//               return Number(finalPrice + (4*quantity));;
//           case 'Large':
         
//               return Number(finalPrice + (6*quantity));
//           default:
            
//               return Number(finalPrice);
//       }
//   };

//   const handleAddToCart = (e) => {
//     console.log('Item added to the cart');
//     // e.preventDefault()
//     if (quantity > 0) {
//       dispatch(addItem({
//         title: title,
//         img: img,
//         price: Number( getPrice()),
//         eachprice:Number( getPrice() / quantity),
//         ingredients: ingredients,
//         toppings: Toppings,
//         quantity: Number(quantity),
//         size: size,
//       }));
//     } else {
//       console.error("Quantity must be greater than 0");
//     }
//     // router.push('cart');
//   };



//   return (
//     <WellFoodLayout>
//       {/* <PageBanner pageTitle={"single product"} /> */}
//       {/* Product Details Start */}
     

//  <section className="product-details pb-10 pt-130 rpt-100">
//       <div className="container">
//         {/* <div className="row align-items-center"> */}
//         <div className="row">
//           <div className="col-lg-6">
//             <div
//               className="product-details-image rmb-55"
//               data-aos="fade-left"
//               data-aos-duration={1500}
//               data-aos-offset={50}
//             >
//               <img
//                 className="custom-imgage-product"
//                 // src="assets/images/products/product-details.jpg"
//                 src={img}
//                 alt="Product Details"
//               />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div
//               className="product-details-content"
//               data-aos="fade-right"
//               data-aos-duration={1500}
//               data-aos-offset={50}
//             >
//               <div className="section-title">
  
//   <div className="mobil-quantity-controls">
//   <div className="mobil-custom-quantity">
//     <h3 className="mob-pizza-title">{title}</h3>
//     <div className="mob-quantity-controls">
//       <h3 className="mob-quantity-label">Qty</h3>
//       <button
//         className="mob-button"
//         disabled={quantity <= 0}
//         onClick={handleDecrease}
//       >
//         -
//       </button>
//       <span className="mob-quantity-display">{quantity}</span>
//       <button
//         className="mob-button"
//         disabled={quantity >= maxPizzaQuantity}
//         onClick={handleIncrease}
//       >
//         +
//       </button>
//     </div>
//   </div>
// </div>

// <div className="size-container">
//       <div className="size-options">
//         <label>
//           <input
//             type="radio"
//             name="size"
//             value="Small"
//             checked={size === "Small"}
//             onChange={() => setSize("Small")}
//           />
//           <span>Small (Default)</span>
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="size"
//             value="Medium"
//             onChange={() => {setSize("Medium"); }}
//           />
//           <span>Medium (+ £4)</span>
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="size"
//             value="Large"
//             onChange={() => setSize("Large")}
//           />
//           <span>Large (+ £6)</span>
//         </label>
//       </div>
//     </div>

//               </div>
//               <div className="price-in-pc">
//               <h5 >Total Price</h5>
//               {/* <span className="price mb-15">£{finalPrice}</span> */}
//               <span className="price mb-15">£{getPrice()}</span>
//               </div>





              

        
// {/* 
//           <div className="form-in-pc">  */}
//         <form action="#" className="add-to-cart py-5">
//       <div className="quantity-controls">
//         <div className="custom-quantity">
        
//          <h5>Quantity</h5>
//                         <button
//                           disabled={quantity <= 0}
//                           onClick={ handleDecrease}
//                         >
//                           -
//                         </button>
//                         <span>{quantity}</span>
//                         <button
//                           disabled={quantity >= maxPizzaQuantity}
//                           onClick={handleIncrease}
//                         >
//                           +
//                         </button>
                      
//                       </div>
//                 </div>      
      
//                 <Link href="/cart">
//       <button type="submit" className="theme-btn mb-15" onClick={handleAddToCart}>

//         Add to Cart <i className="far fa-arrow-alt-right" />
//       </button>    
//         </Link>
//     </form>
//     {/* </div>    */}
//     {/* <FixedBtn/> */}



//               <div className="ingredients-section py-5">
//                 <h5>Ingredients</h5>
//                 <ul className="ingredients-list">
//                   {ingredients.map((ingredient, index) => (
//                     <li key={index} className="ingredient-item">
//                       <span> {ingredient.name} - £{ingredient.price.toFixed(1)}</span>
//                       <div className="ingredient-controls">
//                         <button
//                           disabled={ingredient.quantity <= 0}
//                           onClick={() => updateQuantity(index, "subtract")}
//                         >
//                           -
//                         </button>
//                         <span>{ingredient.quantity}</span>
//                         <button
//                           disabled={ingredient.quantity >= maxQuantity}
//                           onClick={() => updateQuantity(index, "add")}
//                         >
//                           +
//                         </button>
//                         <button
//                           className="remove-btn"
//                           onClick={() => removeIngredient(index)}
//                         >
//                           <i className="fas fa-trash-alt"></i>
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 {/* {calculateSum()} */}
//               </div>







//               <div className="ingredients-section py-5">
//                 <h5>Toppings</h5>
//                 <ul className="ingredients-list">
//                   {Toppings.map((Toppings, index) => (
//                     <li key={index} className="ingredient-item">
//                       {console.log(Toppings)}
//                       <span>{Toppings.name} - £{Toppings.price.toFixed(1)}</span>
//                       <div className="ingredient-controls">
//                         <button
//                           disabled={Toppings.quantity <= 0}
//                           onClick={() => updatedToppingQuantity(index, "subtract")}
//                         >
//                           -
//                         </button>
//                         <span>{Toppings.quantity}</span>
//                         <button
//                           disabled={Toppings.quantity >= maxQuantity}
//                           onClick={() => updatedToppingQuantity(index, "add")}
//                         >
//                           +
//                         </button>
//                         <button
//                           className="remove-btn"
//                           onClick={() => removeToppings(index)}
//                         >
//                           <i className="fas fa-trash-alt"></i>
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 {/* {calculateSum()} */}
//               </div>








//               <ul className="category-tags pt-20 pb-30">
//                 <li>
//                   <h6>Categories</h6> :<a href="#">Restaurant</a>
//                 </li>
//                 <li>
//                   <h6>Tags </h6> :<a href="#">Pizza</a>
//                   <a href="#">Burger</a>
//                   <a href="#">Soup</a>
//                 </li>
//               </ul>
            
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//       {/* Product Details End */}
//       {/* Review Form Start */}
   
//       {/* Review Form End */}
//       {/* Related Products Area start */}
      
//       {/* Related Products Area end */}
//       <FixedBtn price={getPrice()} onAddToCart={handleAddToCart} name={"Add To Cart"} link="/cart"/>
//     </WellFoodLayout>
//   );
// };
// export default page;
"use client";
import FixedBtn from "@/components/custom/FixedBtn";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice.js";
import React, { useEffect, useState, useRef } from "react";
import { Nav, Tab } from "react-bootstrap";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const combo = searchParams.get("combo");
  const img = searchParams.get("img");
  const BasePrice = Number(searchParams.get("price"));

  const [ingredients, setIngredients] = useState([]);
  const [Toppings, setToppings] = useState([]);
  const [initialBasePrice, setInitialBasePrice] = useState(0);
  const [tempPrice, setTempPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const hasSetInitialPrice = useRef(false);
  const [isCombo, setIsCombo] = useState(false);  // Use state for reactivity

  // Load ingredients from searchParams

  useEffect(() => {
 
    if (combo == "True") {
      setIsCombo(true);
    
    }
  }, [combo, isCombo]);

  useEffect(() => {
    const ingredientsString = searchParams.get("ingredients");
    if (ingredientsString) {
      const parsedIngredients = JSON.parse(ingredientsString);
      setIngredients(parsedIngredients);
    }
  }, [searchParams]);
  
  // Load toppings from searchParams
  useEffect(() => {
    const ToppingsString = searchParams.get("toppings");
    if (ToppingsString) {
      const parsedToppings = JSON.parse(ToppingsString);
      setToppings(parsedToppings);
    }
  }, [searchParams]);
  
  // Calculate the initial price only once after data is loaded
  useEffect(() => {
    if (!hasSetInitialPrice.current && (ingredients.length > 0 || Toppings.length > 0)) {
      const basePrice =
        ingredients.reduce(
          (sum, ingredient) =>
            ingredient.quantity > 0 ? sum + Number(ingredient.price) * Number(ingredient.quantity) : sum,
          0
        ) +
        Toppings.reduce(
          (sum, topping) =>
            topping.quantity > 0 ? sum + Number(topping.price) * Number(topping.quantity) : sum,
          0
        ) + BasePrice;
  
      setInitialBasePrice(basePrice * quantity);
      setFinalPrice(basePrice * quantity);
      setTempPrice(basePrice * quantity);
  
      hasSetInitialPrice.current = true;
    }
  }, [ingredients, Toppings, BasePrice, quantity]);
  
  // Update tempPrice and finalPrice dynamically
  useEffect(() => {
    const basePrice =
      ingredients.reduce(
        (sum, ingredient) =>
          ingredient.quantity > 0 ? sum + Number(ingredient.price) * Number(ingredient.quantity) : sum,
        0
      ) +
      Toppings.reduce(
        (sum, topping) =>
          topping.quantity > 0 ? sum + Number(topping.price) * Number(topping.quantity) : sum,
        0
      ) + BasePrice;
  
    setTempPrice(basePrice * quantity);
  
    if (basePrice > initialBasePrice) {
      setFinalPrice(basePrice * quantity);
    } else {
      setFinalPrice(initialBasePrice * quantity);
    }
  }, [ingredients, Toppings, BasePrice, initialBasePrice, quantity]);

  const maxQuantity = 3;
  const maxPizzaQuantity = 9;

  const updateQuantity = (index, operation) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient, idx) =>
        idx === index
          ? {
              ...ingredient,
              quantity:
                operation === "add"
                  ? Math.min(ingredient.quantity + 1, maxQuantity)
                  : Math.max(ingredient.quantity - 1, 0),
            }
          : ingredient
      )
    );
  };
  
  const updatedToppingQuantity = (index, operation) => {
    setToppings((prevTopping) => 
      prevTopping.map((Toppings, idx) =>
        idx === index
          ? {
              ...Toppings,
              quantity:
                operation === "add"
                  ? Math.min(Toppings.quantity + 1, maxQuantity)
                  : Math.max(Toppings.quantity - 1, 0),
            }
          : Toppings
      )    
    );
  };

  const removeIngredient = (index) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient, idx) =>
        idx === index ? { ...ingredient, quantity: 0, included: false } : ingredient
      )
    );
  };

  const removeToppings = (index) => {
    setToppings((prevToppings) =>
      prevToppings.map((Topping, idx) =>
        idx === index ? {...Topping, quantity: 0, included: false} : Topping
      )
    );
  };

  const handleIncrease = (event) => {
    event.preventDefault();
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [size, setSize] = useState('Small');

  const getPrice = () => {
    switch (size) {
      case 'Medium':
        return Number(finalPrice + (4 * quantity));
      case 'Large':
        return Number(finalPrice + (6 * quantity));
      default:
        return Number(finalPrice);
    }
  };

  const handleAddToCart = (e) => {
    if (quantity > 0) {
      dispatch(addItem({
        title: title,
        img: img,
        price: Number(getPrice()),
        eachprice: Number(getPrice() / quantity),
        ingredients: ingredients,
        toppings: Toppings,
        quantity: Number(quantity),
        size: size,
      }));
    } else {
      console.error("Quantity must be greater than 0");
    }
  };
    


  return (
    <WellFoodLayout>
      <section className="product-details pb-10 pt-130 rpt-100">
        <div className="container">
          <div className="row">
            {/* Product Image - Enhanced with shadow and larger size */}
            <div className="col-lg-6">
              <div
                className="product-details-image rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="product-image-wrapper">
                  <img
                    className="product-image"
                    src={img}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="col-lg-6">
              <div
                className="product-details-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <h2 className="mb-4" style={{ fontSize: "2.5rem", fontWeight: "700", color: "#333" }}>
                    {title}
                  </h2>
                  <p className="mb-4" style={{ fontSize: "1.2rem", color: "#666" }}>{desc}</p>
                  
                  {/* Mobile view controls */}
                  <div className="mobil-quantity-controls d-block d-lg-none">
                    <div className="mobil-custom-quantity">
                      <h3 className="mob-pizza-title">{title}</h3>
                      <div className="mob-quantity-controls">
                        <h3 className="mob-quantity-label">Qty</h3>
                        <button
                          className="mob-button"
                          disabled={quantity <= 0}
                          onClick={handleDecrease}
                        >
                          -
                        </button>
                        <span className="mob-quantity-display">{quantity}</span>
                        <button
                          className="mob-button"
                          disabled={quantity >= maxPizzaQuantity}
                          onClick={handleIncrease}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Size Selection - Enhanced with better styling */}
                  {!isCombo && (
                  <div className="size-container mb-4">
                    <h5 className="mb-3" style={{ fontSize: "1.2rem", fontWeight: "600" }}>Size Selection</h5>
                    <div className="size-options" style={{ display: "flex", gap: "15px" }}>
                      {["Small", "Medium", "Large"].map((sizeOption) => (
                        <label 
                          key={sizeOption}
                          style={{ 
                            display: "flex",
                            alignItems: "center",
                            padding: "10px 15px",
                            borderRadius: "8px",
                            border: "2px solid",
                            borderColor: size === sizeOption ? "#ff6b35" : "#ddd",
                            backgroundColor: size === sizeOption ? "#fff4f0" : "#fff",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                        >
                          <input
                            type="radio"
                            name="size"
                            value={sizeOption}
                            checked={size === sizeOption}
                            onChange={() => setSize(sizeOption)}
                            style={{ marginRight: "8px" }}
                          />
                          <span style={{ fontWeight: size === sizeOption ? "600" : "400" }}>
                            {sizeOption} 
                            {sizeOption === "Medium" && " (+£4)"}
                            {sizeOption === "Large" && " (+£6)"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div> )}
                </div>
                
                {/* Price Display - Enhanced */}
                <div className="price-container mb-4">
                  <h5 style={{ fontSize: "1.2rem", fontWeight: "600" }}>Total Price</h5>
                  <span className="price" style={{ 
                    fontSize: "2.2rem", 
                    fontWeight: "700", 
                    color: "#ff6b35",
                    display: "block",
                    marginTop: "5px"
                  }}>
                    £{getPrice().toFixed(2)}
                  </span>
                </div>

                {/* Quantity Controls - Enhanced */}
                <form className="add-to-cart mb-4">
                  <div className="quantity-controls">
                    <div className="custom-quantity" style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "15px",
                      marginBottom: "20px" 
                    }}>
                      <h5 style={{ margin: "0", fontSize: "1.2rem", fontWeight: "600" }}>Quantity</h5>
                      <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        border: "2px solid #eee",
                        borderRadius: "8px",
                        overflow: "hidden" 
                      }}>
                        <button
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "none",
                            background: "#f5f5f5",
                            fontSize: "1.2rem",
                            cursor: quantity <= 1 ? "not-allowed" : "pointer",
                            opacity: quantity <= 1 ? "0.5" : "1"
                          }}
                          disabled={quantity <= 1}
                          onClick={handleDecrease}
                        >
                          -
                        </button>
                        <span style={{ 
                          width: "40px", 
                          textAlign: "center", 
                          fontSize: "1.1rem",
                          fontWeight: "600"
                        }}>
                          {quantity}
                        </span>
                        <button
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "none",
                            background: "#f5f5f5",
                            fontSize: "1.2rem",
                            cursor: quantity >= maxPizzaQuantity ? "not-allowed" : "pointer",
                            opacity: quantity >= maxPizzaQuantity ? "0.5" : "1"
                          }}
                          disabled={quantity >= maxPizzaQuantity}
                          onClick={handleIncrease}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Add to Cart Button - Enhanced */}
                  <Link href="/cart">
                    <button 
                      type="submit" 
                      className="theme-btn" 
                      onClick={handleAddToCart}
                      style={{
                        padding: "14px 30px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        borderRadius: "8px",
                        background: "#ff6b35",
                        border: "none",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 10px rgba(255, 107, 53, 0.3)"
                      }}
                    >
                      Add to Cart
                      <i className="far fa-arrow-alt-right" />
                    </button>    
                  </Link>
                </form>

                {/* Ingredients Section - Enhanced */}
                {!isCombo && (
                <div className="ingredients-section mb-4">
                  <h5 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "15px" }}>Ingredients</h5>
                  <ul className="ingredients-list" style={{ listStyle: "none", padding: "0" }}>
                    {ingredients.map((ingredient, index) => (
                      <li 
                        key={index} 
                        className="ingredient-item" 
                        style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          padding: "12px 15px",
                          margin: "8px 0",
                          borderRadius: "8px",
                          backgroundColor: "#f9f9f9",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>
                          {ingredient.name} - £{ingredient.price.toFixed(1)}
                        </span>
                        <div className="ingredient-controls" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            overflow: "hidden" 
                          }}>
                            <button
                              style={{
                                width: "30px",
                                height: "30px",
                                border: "none",
                                background: "#f0f0f0",
                                cursor: ingredient.quantity <= 0 ? "not-allowed" : "pointer",
                                opacity: ingredient.quantity <= 0 ? "0.5" : "1"
                              }}
                              disabled={ingredient.quantity <= 0}
                              onClick={() => updateQuantity(index, "subtract")}
                            >
                              -
                            </button>
                            <span style={{ width: "30px", textAlign: "center" }}>{ingredient.quantity}</span>
                            <button
                              style={{
                                width: "30px",
                                height: "30px",
                                border: "none",
                                background: "#f0f0f0",
                                cursor: ingredient.quantity >= maxQuantity ? "not-allowed" : "pointer",
                                opacity: ingredient.quantity >= maxQuantity ? "0.5" : "1"
                              }}
                              disabled={ingredient.quantity >= maxQuantity}
                              onClick={() => updateQuantity(index, "add")}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="remove-btn"
                            onClick={() => removeIngredient(index)}
                            style={{
                              width: "30px",
                              height: "30px",
                              border: "none",
                              borderRadius: "50%",
                              background: "#ff6b3520",
                              color: "#ff6b35",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer"
                            }}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>)}

                {/* Toppings Section - Enhanced */}
                {!isCombo && (
                <div className="toppings-section mb-4">
                  <h5 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "15px" }}>Toppings</h5>
                  <ul className="toppings-list" style={{ listStyle: "none", padding: "0" }}>
                    {Toppings.map((topping, index) => (
                      <li 
                        key={index} 
                        className="topping-item" 
                        style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          padding: "12px 15px",
                          margin: "8px 0",
                          borderRadius: "8px",
                          backgroundColor: "#f9f9f9",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>
                          {topping.name} - £{topping.price.toFixed(1)}
                        </span>
                        <div className="topping-controls" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            overflow: "hidden" 
                          }}>
                            <button
                              style={{
                                width: "30px",
                                height: "30px",
                                border: "none",
                                background: "#f0f0f0",
                                cursor: topping.quantity <= 0 ? "not-allowed" : "pointer",
                                opacity: topping.quantity <= 0 ? "0.5" : "1"
                              }}
                              disabled={topping.quantity <= 0}
                              onClick={() => updatedToppingQuantity(index, "subtract")}
                            >
                              -
                            </button>
                            <span style={{ width: "30px", textAlign: "center" }}>{topping.quantity}</span>
                            <button
                              style={{
                                width: "30px",
                                height: "30px",
                                border: "none",
                                background: "#f0f0f0",
                                cursor: topping.quantity >= maxQuantity ? "not-allowed" : "pointer",
                                opacity: topping.quantity >= maxQuantity ? "0.5" : "1"
                              }}
                              disabled={topping.quantity >= maxQuantity}
                              onClick={() => updatedToppingQuantity(index, "add")}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="remove-btn"
                            onClick={() => removeToppings(index)}
                            style={{
                              width: "30px",
                              height: "30px",
                              border: "none",
                              borderRadius: "50%",
                              background: "#ff6b3520",
                              color: "#ff6b35",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer"
                            }}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>)}

                {/* Categories and Tags */}
                <ul className="category-tags" style={{ 
                  padding: "20px 0",
                  margin: "0",
                  borderTop: "1px solid #eee",
                  listStyle: "none"
                }}>
                  <li style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "5px", 
                    marginBottom: "10px" 
                  }}>
                    <h6 style={{ margin: "0", fontWeight: "600" }}>Categories</h6> :
                    <a href="#" style={{ 
                      color: "#ff6b35", 
                      textDecoration: "none",
                      background: "#fff4f0",
                      padding: "3px 10px",
                      borderRadius: "4px" 
                    }}>
                      Restaurant
                    </a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
                    <h6 style={{ margin: "0", fontWeight: "600" }}>Tags </h6> :
                    {["Pizza", "Burger", "Soup"].map((tag) => (
                      <a 
                        key={tag} 
                        href="#" 
                        style={{ 
                          color: "#ff6b35", 
                          textDecoration: "none",
                          background: "#fff4f0",
                          padding: "3px 10px",
                          borderRadius: "4px",
                          marginRight: "5px" 
                        }}
                      >
                        {tag}
                      </a>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fixed Button at bottom */}
      <FixedBtn 
        price={getPrice()} 
        onAddToCart={handleAddToCart} 
        name={"Add To Cart"} 
        link="/cart"
      />
    </WellFoodLayout>
  );
};

export default page;