// "use client";
// import PageBanner from "@/components/PageBanner";
// import WellFoodLayout from "@/layout/WellFoodLayout";
// import { Accordion } from "react-bootstrap";
// const page = () => {
//   return (
//     <WellFoodLayout>
//       {/* <PageBanner pageTitle={"Checkout"} /> */}
//       <div className="checkout-form-area py-130">
//         <div className="container">
//           <div className="checkout-faqs" id="checkout-faqs">
      

//             <Accordion defaultActiveKey="collapse4">
//               <div className="alert bgc-lighter wow fadeInUp delay-0-4s">
//                 <h6>
//                   Billing Address{" "}
//                   <Accordion.Toggle
//                     as={"a"}
//                     eventKey="collapse4"
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                     className="card-header"
//                   >
//                     {" "}
//                     Enter here
//                   </Accordion.Toggle>
//                 </h6>
//                 <Accordion.Collapse eventKey="collapse4" className="content">
//                   <form
//                     id="checkout-form"
//                     className="checkout-form"
//                     name="checkout-form"
//                     action="#"
//                     method="post"
//                   >
//                     <div className="row">
//                       <div className="col-lg-12 pt-15">
//                         <h5>Personal Information</h5>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="first-name"
//                             name="first-name"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="First Name"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="last-name"
//                             name="last-name"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Last Name"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="number"
//                             name="number"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Phone Number"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Email Address"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="company-name"
//                             name="company-name"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Company name (optional)"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="company-address"
//                             name="company-address"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Company Address (optional)"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-12">
//                         <h5>Your Address</h5>
//                       </div>
//                       <div className="col-md-6 mb-30">
//                         <div className="form-group">
//                           <select name="country" id="country">
//                             <option value="value1">Select Country</option>
//                             <option value="value2">Australia</option>
//                             <option value="value3">Canada</option>
//                             <option value="value4">China</option>
//                             <option value="value5">Morocco</option>
//                             <option value="value6">Saudi Arabia</option>
//                             <option value="value7">United Kingdom (UK)</option>
//                             <option value="value8">United States (US)</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="city"
//                             name="city"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="City"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="state"
//                             name="state"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="State"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="zip"
//                             name="zip"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Zip"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="street-name"
//                             name="street-name"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="House, street name"
//                             required=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             id="apartment-name"
//                             name="apartment-name"
//                             className="form-control"
//                             defaultValue=""
//                             placeholder="Apartment, suite, unit etc. (optional)"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-12">
//                         <h5>Order Notes (optional)</h5>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="form-group mb-0">
//                           <textarea
//                             name="order-note"
//                             id="order-note"
//                             className="form-control"
//                             rows={5}
//                             placeholder="Notes about your order, e.g. special notes for delivery."
//                             defaultValue={""}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </Accordion.Collapse>
//               </div>
//             </Accordion>

//             <Accordion>
//               <div className="alert bgc-lighter wow fadeInUp delay-0-2s">
//                 <h6>
//                   Select Your{" "}
//                   <Accordion.Toggle
//                     as={"a"}
//                     eventKey="collapse5"
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                     className="collapsed card-header"
//                   >
//                     {" "}
//                     Payment Method
//                   </Accordion.Toggle>
//                 </h6>
//                 <Accordion.Collapse eventKey="collapse5" className="content">
//                   <div className="payment-cart-total pt-25">
//                     <div className="row justify-content-between">
//                       <div className="col-lg-6">
//                         <div className="payment-method rmb-30">
//                           <h5 className="mb-20">Payment Method</h5>
//                           <Accordion
//                             defaultActiveKey="collapseOne"
//                             as="ul"
//                             id="paymentMethod"
//                             className="mb-30"
//                           >
//                             {/* Default unchecked */}
//                             <li className="custom-control custom-radio">
//                               <input
//                                 type="radio"
//                                 className="custom-control-input"
//                                 id="methodone"
//                                 name="defaultExampleRadios"
//                                 defaultChecked
//                               />{" "}
//                               <Accordion.Toggle
//                                 as="label"
//                                 className="custom-control-label"
//                                 htmlFor="methodone"
//                                 data-toggle="collapse"
//                                 data-target="#collapseOne"
//                                 eventKey="collapseOne"
//                               >
//                                 {" "}
//                                 Direct Bank Transfer{" "}
//                                 <i className="fas fa-money-check" />
//                               </Accordion.Toggle>
//                               <Accordion.Collapse
//                                 eventKey="collapseOne"
//                                 data-parent="#paymentMethod"
//                                 style={{}}
//                               >
//                                 <p>
//                                   Make your payment directly into our bank
//                                   account. Please use your Order ID as the
//                                   payment reference. Your order will not be
//                                   shipped our account.
//                                 </p>
//                               </Accordion.Collapse>
//                             </li>
//                             {/* Default unchecked */}
//                             <li className="custom-control custom-radio">
//                               <input
//                                 type="radio"
//                                 className="custom-control-input"
//                                 id="methodtwo"
//                                 name="defaultExampleRadios"
//                               />{" "}
//                               <Accordion.Toggle
//                                 as="label"
//                                 className="custom-control-label collapsed"
//                                 htmlFor="methodtwo"
//                                 data-toggle="collapse"
//                                 data-target="#collapseTwo"
//                                 eventKey="collapseTwo"
//                               >
//                                 {" "}
//                                 Cash On Delivery <i className="fas fa-truck" />
//                               </Accordion.Toggle>
//                               <Accordion.Collapse
//                                 eventKey="collapseTwo"
//                                 data-parent="#paymentMethod"
//                                 style={{}}
//                               >
//                                 <p>Pay with cash upon delivery.</p>
//                               </Accordion.Collapse>
//                             </li>
//                             {/* Default unchecked */}
//                             <li className="custom-control custom-radio">
//                               <input
//                                 type="radio"
//                                 className="custom-control-input"
//                                 id="methodthree"
//                                 name="defaultExampleRadios"
//                               />{" "}
//                               <Accordion.Toggle
//                                 as="label"
//                                 className="custom-control-label collapsed"
//                                 htmlFor="methodthree"
//                                 data-toggle="collapse"
//                                 data-target="#collapsethree"
//                                 eventKey="collapsethree"
//                               >
//                                 Paypal <i className="fab fa-cc-paypal" />
//                               </Accordion.Toggle>
//                               <Accordion.Collapse
//                                 eventKey="collapsethree"
//                                 data-parent="#paymentMethod"
//                                 style={{}}
//                               >
//                                 <p>
//                                   Pay via PayPal; you can pay with your credit
//                                   card if you don’t have a PayPal account.
//                                 </p>
//                               </Accordion.Collapse>
//                             </li>
//                           </Accordion>
//                           <p>
//                             Your personal data will be used to process your
//                             order, support your experience throughout this
//                             website, and for other purposes described in our
//                             privacy policy.
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col-lg-5">
//                         <div className="shoping-cart-total text-left mb-20">
//                           <h5 className="text-center mb-20">Cart Totals</h5>
//                           <table>
//                             <tbody>
//                               <tr>
//                                 <td>
//                                   Chicken Soup <strong>× 1</strong>
//                                 </td>
//                                 <td>$70.00</td>
//                               </tr>
//                               <tr>
//                                 <td>
//                                   Alaskan Crab <strong>× 2</strong>
//                                 </td>
//                                 <td>$130.00</td>
//                               </tr>
//                               <tr>
//                                 <td>Shipping Fee</td>
//                                 <td>$10.00</td>
//                               </tr>
//                               <tr>
//                                 <td>Vat</td>
//                                 <td>$5.00</td>
//                               </tr>
//                               <tr>
//                                 <td>
//                                   <strong>Order Total</strong>
//                                 </td>
//                                 <td>
//                                   <strong>$225.00</strong>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Accordion.Collapse>
//               </div>
//             </Accordion>
//             <button type="button" className="theme-btn w-100">
//               Place order <i className="fas fa-angle-double-right" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </WellFoodLayout>
//   );
// };
// export default page;
"use client";
import { useState } from "react";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../../features/cart/cartSlice";
import { useEffect, useRef } from "react";

const Page = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  
  // Form states
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedZipcode, setSelectedZipcode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  
  // Sample zipcodes for delivery
  const availableZipcodes = [
    "90001", "90002", "90003", "90004", "90005", 
    "90006", "90007", "90008", "90009", "90010"
  ];



  
  const renderCount = useRef(0);
useEffect(() => {
  renderCount.current += 1;
  console.log("🔁 Component rendered", renderCount.current, "times");
}, []);



  // Shipping and tax calculations
  const shippingFee = 3.99;
  const taxRate = 0.08; // 8% tax
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingFee + taxAmount;

  // Handle send OTP
  const handleSendOTP = () => {
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
      // In a real app, you would call an API to send OTP
      alert("OTP sent! For testing, use 2222");
    } else {
      alert("Please enter a valid mobile number");
    }
  };

  // Handle verify OTP
  const handleVerifyOTP = () => {
    if (otp === "2222") {
      setVerified(true);
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (!verified) return;
    
    alert("Order placed successfully!");
    // Here you would typically process the order
  };

  return (
    <WellFoodLayout>
      {/* Desktop-only margin using CSS class */}
      <div className="checkout-form-area py-5 py-md-5">
        <style jsx>{`
          @media (min-width: 992px) {
            .checkout-form-area {
              margin-top: 80px;
            }
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="checkout-form-container p-4 bg-light rounded shadow-sm">
                <h4 className="mb-4">Delivery Details</h4>
                
                {/* Name Input */}
                <div className="form-group mb-3">
                  <label htmlFor="name" className="mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                {/* Mobile Number with Send OTP button */}
                <div className="form-group mb-3">
                  <label htmlFor="mobile" className="mb-2">Mobile Number</label>
                  <div className="input-group">
                    <input
                      type="tel"
                      id="mobile"
                      className="form-control"
                      placeholder="Enter your mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      disabled={otpSent && verified}
                      required
                    />
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={handleSendOTP}
                      disabled={otpSent && verified}
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
                
                {/* OTP Input (visible only after sending OTP) */}
                {otpSent && !verified && (
                  <div className="form-group mb-3">
                    <label htmlFor="otp" className="mb-2">Enter OTP</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="otp"
                        className="form-control"
                        placeholder="Enter 4-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={4}
                      />
                      <button 
                        className="btn btn-outline-success" 
                        type="button"
                        onClick={handleVerifyOTP}
                      >
                        Verify
                      </button>
                    </div>
                    <small className="text-muted">For testing, use OTP: 2222</small>
                  </div>
                )}
                
                {/* Zipcode Dropdown - Only one instance */}
                <div className="form-group mb-4">
                  <label htmlFor="zipcode" className="mb-2">Select Delivery Zipcode</label>
                  <select
                    id="zipcode"
                    className="form-select"
                    value={selectedZipcode}
                    onChange={(e) => setSelectedZipcode(e.target.value)}
                    required
                  >
                    <option value="">Select your zipcode</option>
                    console.log("zipcode")
                    {availableZipcodes.map((zipcode) => (
                      <option key={zipcode} value={zipcode}>
                        {zipcode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="cart-summary p-4 bg-light rounded shadow-sm">
                <h4 className="mb-4">Order Summary</h4>
                
                {cartItems.length === 0 ? (
                  <div className="text-center py-4">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="cart-items mb-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                      {cartItems.map((item, index) => (
                        <div key={index} className="cart-item d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                          <div>
                            <h6 className="mb-1">{item.title}</h6>
                            <p className="text-muted small mb-0">
                              {item.size && `Size: ${item.size}`} 
                              {item.quantity > 1 && ` × ${item.quantity}`}
                            </p>
                          </div>
                          <div className="text-end">
                            <p className="mb-0 fw-bold">£{Number(item.price).toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="cart-totals">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span>£{Number(totalPrice).toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Shipping</span>
                        <span>£{shippingFee.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Tax</span>
                        <span>£{taxAmount.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between border-top pt-3 mb-4">
                        <span className="fw-bold">Total</span>
                        <span className="fw-bold">£{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <button 
                      type="button" 
                      className="theme-btn w-100"
                      disabled={!verified || !selectedZipcode || !name}
                      onClick={handlePlaceOrder}
                    >
                      {verified ? "Place Order" : "Verify OTP to Continue"}
                      <i className="fas fa-angle-double-right ms-2"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WellFoodLayout>
  );
};

export default Page;