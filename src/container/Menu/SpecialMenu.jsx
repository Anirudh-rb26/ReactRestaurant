import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app_specialmenu flex_center section_padding" id="menu">
    <div className="app_specialmenu-title">
      <SubHeading title={"Menu that fits your Palette"} />
      <h1 className="headtext_cormorant">Today's Special</h1>
    </div>
    {/* menu */}
    <div className="app_specialmenu-menu">
      {/* left side */}
      <div className="app_specialmenu-menu-wine">
        <p className="app_specialmenu-menu-heading">Wine & Beer</p>
        <div className="app_specialmenu-menu-items">
          {data.wines.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
      {/* middle image */}
      <div className="app_specialmenu-menu-img">
        <img src={images.menu} alt="menu image" />
      </div>
      {/* left side */}
      <div className="app_specialmenu-menu-cocktails">
        <p className="app_specialmenu-menu-heading">Cocktails</p>
        <div className="app_specialmenu-menu-items">
          {data.cocktails.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
    {/* view more button */}
    <div style={{ marginTop: "15px" }}>
      <button className="custom_button" type="button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
