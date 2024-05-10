import React from "react";

import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app_aboutus app_bg flex_center section_padding" id="#about">
    {/* G Logo */}
    <div className="app_aboutus-overlay flex_center">
      <img src={images.G} alt="Letter G" />
    </div>
    {/* About US */}
    <div className="app_aboutus-content flex_center">
      <div className="app_aboutus-content-about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={images.spoon} alt="image of a spoon" />
        <p className="p_opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom_button">
          Know More
        </button>
      </div>
      {/* Knife Image */}
      <div className="app_aboutus-content-knife flex_center">
        <img src={images.knife} alt="Chef Knife" />
      </div>
      {/* Our History */}
      <div className="app_aboutus-content-history">
        <h1 className="headtext_cormorant">Our History</h1>
        <img src={images.spoon} alt="image of a spoon" />
        <p className="p_opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom_button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
