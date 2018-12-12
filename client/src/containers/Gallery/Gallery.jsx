import React from 'react';
import classes from './Gallery.css';
import Segment from '../../hoc/Segment/Segment';

const listOfPics = [
  { title: 'file2', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File2.jpg' },
  { title: 'file3', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File3.jpg' },
  { title: 'file4', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File4.jpg' },
  { title: 'file5', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File5.jpg' },
  { title: 'file6', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File6.jpg' },
  { title: 'file7', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File7.jpg' },
  { title: 'file8', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File8.jpg' },
  { title: 'file10', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File10.jpg' },
  { title: 'file11', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File11.jpg' },
  { title: 'file12', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File12.jpg' },
  { title: 'file14', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File14.jpg' },
  { title: 'file21', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File21.jpg' },
  { title: 'file16', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File16.jpg' },
  { title: 'file17', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File17.jpg' },
  { title: 'file18', item: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File18.jpg' },
];

function Gallery() {
  const mosaic = listOfPics.map(info => (
    <img key={info.title} src={info.item} alt="pic" />
  ));


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
