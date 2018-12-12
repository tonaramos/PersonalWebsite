import React from 'react';
import classes from './Gallery.css';
import Segment from '../../hoc/Segment/Segment';
import Aux from '../../hoc/Aux/Aux';

const listOfPics = [
  {
    title: 'file2', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File2.jpg', description: 'Top of Half Dome', location: '- Yosemite NP -',
  },
  {
    title: 'file3', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File3.jpg', description: 'Mt Davidson, SF', location: '- SF -',
  },
  {
    title: 'file4', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File4.jpg', description: 'San Mateo Library', location: '',
  },
  {
    title: 'file5', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File5.jpg', description: 'Treasure Island, SF', location: '- Treasure Island, SF -',
  },
  {
    title: 'file6', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File6.jpg', description: 'Point Reyes National Seashore', location: '',
  },
  {
    title: 'file7', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File7.jpg', description: 'Beach hike to Alamere Falls', location: '',
  },
  {
    title: 'file8', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File8.jpg', description: 'Ediza Lake, Ansel Adams Wilderness', location: '',
  },
  {
    title: 'file10', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File10.jpg', description: 'Breakfast time, yumm!', location: '',
  },
  {
    title: 'file11', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File11.jpg', description: 'Las Vegas with Chewy', location: '',
  },
  {
    title: 'file12', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File12.jpg', description: 'Lake Tahoe', location: '',
  },
  {
    title: 'file14', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File14.jpg', description: 'Glacier Point', location: '',
  },
  {
    title: 'file21', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File21.jpg', description: 'Horseshoe Bend', location: '',
  },
  {
    title: 'file16', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File16.jpg', description: 'Joshua Tree National Park', location: '',
  },
  {
    title: 'file17', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File17.jpg', description: 'Solar Eclipse 2017', location: '',
  },
  {
    title: 'file18', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File18.jpg', description: 'Mission District, SF', location: '',
  },
];

function Gallery() {
  const mosaic = listOfPics.map((info) => {
    return (
      <Aux>
        <div key={info.title + info.description} className={classes.Container}>
          <img key={info.title} src={info.item} alt="pic" />
          {/* <div style={{ backgroundImage: `url(${info.item})` }} className={classes.Mosaic}> */}
          <div key={info.description} className={classes.Des}>
            {`${info.description}`}
          </div>
        </div>
      </Aux>
    );
  });


  return (
    <Segment>
      <div id="Gallery" className={classes.Gallery}>
        <div className={classes.Frame}>
          {mosaic}
          <div />
        </div>
      </div>
    </Segment>
  );
}

export default Gallery;
