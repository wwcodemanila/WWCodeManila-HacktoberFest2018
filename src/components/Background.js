import React from "react";

const Background = ({
  imgSrc,
  alt,
  imageLoaded,
  handleImageLoader,
  placeholder
}) => {
  return (
    <React.Fragment>
      <div className="background-container background-loaded background-fade-in">
        <img
          className={imageLoaded ? "is-hidden" : "background-preload"}
          src={placeholder}
          width="100%"
          alt={alt}
        />
        <img
          className={
            imageLoaded
              ? "background-loaded background-fade-in"
              : "background-loaded"
          }
          src={imgSrc}
          onLoad={handleImageLoader}
          alt={alt}
        />
      </div>
    </React.Fragment>
  );
};

export default Background;
