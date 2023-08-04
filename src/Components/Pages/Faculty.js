import React, { useEffect, lazy } from 'react';
import seo from '../Layout/seo';
const HeaderSvg = lazy(() => import('../Layout/HeaderSvg'));

function Faculty() {

  useEffect(() => {
    seo({
      title: 'Faculty',
      metaDescription: 'Department of Computer Science Faculty'
    });
  }, [])

  return (
    <React.Fragment>
      <HeaderSvg heading={{ "title": "Faculty",  "sublocation": "", "location": "Faculty", "coverimg": "assets/images/banners/banner1.jpg" }} />
      <h1>Faculty</h1>
    </React.Fragment>

  )
}

export default Faculty;