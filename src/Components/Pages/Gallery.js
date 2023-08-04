import React, { useEffect, lazy }from 'react';
import seo from '../Layout/seo';
const HeaderSvg = lazy(() => import('../Layout/HeaderSvg'));

function Gallery() {

  useEffect(() => {
    seo({
      title: 'Gallery',
      metaDescription: 'Department of Computer Science Gallery'
    });
  }, [])

  return (
    <React.Fragment>
      <HeaderSvg heading={{ "title": "Gallery", "sublocation": "", "location": "Gallery", "coverimg": "assets/images/banners/banner1.jpg" }} />
    <h1>Gallery</h1>
    </React.Fragment>
  )
}

export default Gallery