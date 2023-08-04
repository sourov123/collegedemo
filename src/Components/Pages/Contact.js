import React, { useEffect, lazy } from 'react'
import seo from '../Layout/seo';
const HeaderSvg = lazy(() => import('../Layout/HeaderSvg'));

function Contact() {
  useEffect(() => {
    seo({
      title: 'Contact Us',
      metaDescription: 'Department of Computer Science Contact Us'
    });
  }, [])
  return (
    <React.Fragment>
      <HeaderSvg heading={{ "title": "Contact Us",  "sublocation": "", "location": "Contact Us", "coverimg": "assets/images/banners/banner1.jpg" }} />
      <h1>Contact us</h1>
    </React.Fragment>
  )
}

export default Contact;