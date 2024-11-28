"use client"
import React, { useState } from "react";
import "./header.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
 <nav className="navbar">
  <div className= "container">
<div className="flext-items">
<div>
  <span>logo </span>
</div>
    <ul>
      <li>الرئيسية</li>
      <li>مسلسلات</li>
      <li>نصوص</li>
      <li>الشركه</li>
      <li>تصريحات صحفية</li>
      <li>اتصل بنا</li>
      <span>icon </span>
    </ul>

</div>

  </div>

 </nav>
  );
};

export default Navbar;
