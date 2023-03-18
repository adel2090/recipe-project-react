const CustomImage = ({ imgSrc, pt }) => {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      
      <img src={imgSrc} alt="imageFood" />
    </div>
  );
};

export default CustomImage;
