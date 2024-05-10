import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuitem">
    <div className="app_menuitem-head">
      {/* title */}
      <div className="app_menuitem-name">
        <p className="p_cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      {/* connecting line */}
      <div className="app_menuitem-dash"></div>

      {/* price */}
      <div className="app_menuitem-price">
        <p className="p_cormorant">{price}</p>
      </div>

      <div className="app_menuitem-sub">
        <p className="p_opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  </div>
);

export default MenuItem;
