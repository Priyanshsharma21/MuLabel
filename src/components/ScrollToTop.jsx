import React, { useEffect, useState } from "react";
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, []);
  
  return (
    <>
        {isVisible && (
            <div onClick={scrollToTop} className="w-[40px] h-[40px] bg-blue-400">
             <MdOutlineKeyboardArrowUp />
             </div>
        )}
    </>
  )
}

export default ScrollToTop

