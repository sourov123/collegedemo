import React, { useEffect, lazy } from 'react';
import { useParams } from "react-router-dom";
import seo from '../Layout/seo';
import { DecryptId } from '../common/Utill';
const HeaderSvg = lazy(() => import('../Layout/HeaderSvg'));

function Studyroom() {
  const { type } = useParams();
  let Decrypttype = DecryptId(type);

  useEffect(() => {
    seo({
      title: Decrypttype,
      metaDescription: `Department of Computer Science ${Decrypttype}`
    });
  }, [Decrypttype])

  return (
    <React.Fragment>
      <HeaderSvg heading={{ "title": Decrypttype, "sublocation": "Study Room", "location": Decrypttype, "coverimg": "assets/images/banners/banner1.jpg" }} />
      <h1>Test StudyRoom Type {Decrypttype}</h1>
    </React.Fragment>

  )
}

export default Studyroom;