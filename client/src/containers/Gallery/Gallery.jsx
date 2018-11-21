import React from 'react';
import classes from './Gallery.css';
import Segment from '../../hoc/Segment/Segment';

import File1 from '../../assets/File1.png';
import File2 from '../../assets/File2.jpg';
import File3 from '../../assets/File3.jpg';
import File4 from '../../assets/File4.jpg';
import File5 from '../../assets/File5.jpg';
import File6 from '../../assets/File6.jpg';
import File7 from '../../assets/File7.jpg';
import File8 from '../../assets/File8.jpg';
import File9 from '../../assets/File9.jpg';
import File10 from '../../assets/File10.jpg';
import File11 from '../../assets/File11.jpg';
import File12 from '../../assets/File19.jpg';
import File13 from '../../assets/File16.jpg';
import File14 from '../../assets/File14.jpg';
import File21 from '../../assets/File21.jpg';
import File16 from '../../assets/File16.jpg';
import File17 from '../../assets/File17.jpg';
import File18 from '../../assets/File18.jpg';


const listOfPics = [
  { title: 'file1', item: File1 },
  { title: 'file2', item: File2 },
  { title: 'file3', item: File3 },
  { title: 'file4', item: File4 },
  { title: 'file5', item: File5 },
  { title: 'file6', item: File6 },
  { title: 'file7', item: File7 },
  { title: 'file8', item: File8 },
  { title: 'file9', item: File9 },
  { title: 'file10', item: File10 },
  { title: 'file11', item: File11 },
  { title: 'file12', item: File12 },
  { title: 'file13', item: File13 },
  { title: 'file14', item: File14 },
  { title: 'file21', item: File21 },
  { title: 'file16', item: File16 },
  { title: 'file17', item: File17 },
  { title: 'file18', item: File18 }];

function Gallery() {
  const mosaic = listOfPics.map(info => (
    <img key={info.title} src={info.item} alt="pic" />
  ));


  return (
    <Segment>
      <div className={classes.Gallery}>
        <div className={classes.Frame}>
          {mosaic}
          <div />
        </div>
      </div>
    </Segment>
  );
}

export default Gallery;
