import React from 'react';

const ScrollButton = () =>{
    const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
          <button onClick={scrollToTop} className="btn btn-outlined-success btn-success">Top</button>
  );
}
export default ScrollButton;