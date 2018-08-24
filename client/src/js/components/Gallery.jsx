import React from 'react';
import Radium from 'radium';


function Gallery() {
  // Radium is very useful for :hover or any other css pseudo classes
  const styleOne = {
    backgroundColor: 'grey',
    fontWeight: '800',
    cursor: 'pointer',
  };
  const styleTwo = {
    backgroundColor: 'gold',
    fontSize: '25px',
    cursor: 'crosshair',
    ':hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  };
  /* Radium can also be use for media queries, transforming selectors, or animation with keyframes
    or  but you need to wrap the entire return statement in <StyleRoot> */
  const styleWithMediaQuery = {
    '@media (max-width: 500px)': {
      backgroundColor: 'lightBlue',
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  };

  return (
    <div className="galleryContainer" style={styleWithMediaQuery}>
      <div className="galleryBlock" key="item1" style={styleOne}>
        Item 1
      </div>
      <div className="galleryBlock" key="item2" style={styleTwo}>
        Item 2
      </div>
      <div className="galleryBlock" key="item3" style={styleOne}>
        Item 3
      </div>
      <div className="galleryBlock" key="item4" style={styleTwo}>
        Item 4
      </div>
      <div className="galleryBlock" key="item5" style={styleOne}>
        Item 5
      </div>
      <div className="galleryBlock" key="item6" style={styleTwo}>
        Item 6
      </div>
    </div>
  );
}

export default Radium(Gallery);
