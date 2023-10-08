import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Bali1 from "./bgImages/Bali_1.jpeg";
import Bali2 from "./bgImages/Bali_2.jpeg";
import Bali3 from "./bgImages/Bali_3.jpeg";
import Bali4 from "./bgImages/Bali_4.jpeg";
import Bali5 from "./bgImages/Bali_5.jpeg";
import Bali6 from "./bgImages/Bali_6.jpeg";
import Bali7 from "./bgImages/Bali_7.jpeg";
import Bali8 from "./bgImages/Bali_8.jpeg";

const imageUrls = [Bali1, Bali2, Bali3, Bali4, Bali5, Bali6, Bali7, Bali8 ]; // Import images

const BackgroundImageChanger = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const style = {
    backgroundImage: `url(${imageUrls[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh", 
    width:'100vw',
    backgroundColor: (0,0,0,0.5), 
    transition: "background-image 0.5s ease-in-out",
    position: "relative",
    zIndex: "-1"
  };

    return (
     
        <div style={style}>
          {children}
        </div>
    );
};

BackgroundImageChanger.propTypes = {
  children: PropTypes.node.isRequired,
};


export default BackgroundImageChanger;
