import React, { useEffect, lazy } from 'react';
import seo from '../../Layout/seo';
const HeaderSvg = lazy(() => import('../../Layout/HeaderSvg'));

function Feedback() {

    useEffect(() => {
        seo({
            title: 'Student Feedback',
            metaDescription: 'Department of Computer Science Student Feedback'
        });
    }, [])

    return (
        <React.Fragment>
            <HeaderSvg heading={{ "title": "Student Feedback", "sublocation": "", "location": "Student Feedback", "coverimg": "assets/images/banners/banner1.jpg" }} />
            <h1>Student Feedback</h1>
        </React.Fragment>
    )
}

export default Feedback;