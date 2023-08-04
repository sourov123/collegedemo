import React, { useEffect, lazy } from 'react';
import seo from '../Layout/seo';
const HeaderSvg = lazy(() => import('../Layout/HeaderSvg'));

function Alumini() {

  useEffect(() => {
    seo({
      title: 'Alumini',
      metaDescription: 'Department of Computer Science Alumini'
    });
  }, [])

  return (
    <React.Fragment>
    <HeaderSvg heading={{ "title": "Alumini",  "sublocation": "", "location": "Alumini", "coverimg": "assets/images/banners/banner1.jpg" }} />
    <h1>This is Alumini</h1>
  </React.Fragment>
  )
}

export default Alumini;