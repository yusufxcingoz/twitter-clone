import React from "react";
import "../styles/PhotoSlide.css";

function PhotoSlide() {
  return (
    <div className="photo__slide">
      <div className="image_container">
        <img src="https://pbs.twimg.com/profile_images/1355074377797267456/OmSXuU7U_400x400.jpg" />
        <div class="bottom-left">
          <h1>Yusuf Cingöz'ün serveti kasalara sığmıyor!</h1>
        </div>
      </div>
    </div>
  );
}

export default PhotoSlide;
