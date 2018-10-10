import React from 'react';
import classes from './Gallery.css';
import Segment from '../../hoc/Segment/Segment';
import GalleryImage from './GalleryImage/GalleryImage';

const listOfPics = [{ title: 1 }, { title: 22 }, { title: 333 }, { title: 4444 }, { title: 55555 }, { title: 666666 }, { title: 7777777 }, { title: 888888888 }, { title: 999999999 }, { title: 1000000000 }, { title: 11 }, { title: 122 }, { title: 1333 }, { title: 14444 }, { title: 155555 }, { title: 1666666 }, { title: 17777777 }, { title: 1888888888 }];

function Gallery() {
  const mosaic = listOfPics.map(info => <GalleryImage data={info} key={info.title} />);
  return (
    <Segment>
      <div className={classes.Gallery}>
        {mosaic}
      </div>
    </Segment>
  );
}

export default Gallery;
