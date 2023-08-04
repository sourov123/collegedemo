import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./Home'));
const AluminiPage = lazy(() => import('./Alumini'));
const FacultyPage = lazy(() => import('./Faculty'));
const StudyroomPage = lazy(() => import('./Studyroom'));
const GalleryPage = lazy(() => import('./Gallery'));
const ContactPage = lazy(() => import('./Contact'));
const FeedbackPage = lazy(() => import('./Feedback/Feedback'));
const Notfoundpage = lazy(() => import('./Notfound'));

function Routing() {

    return (
        <Routes>
            <Route index path={`/`} element={<Home />} />
            <Route  path={`Alumini`} element={<AluminiPage />}  />
            <Route  path={`Faculty`} element={<FacultyPage />} />
            <Route  path={`Gallery`} element={<GalleryPage />} />
            <Route  path={`Contact`} element={<ContactPage />} />
            <Route  path={`Studyroom/:type`} element={<StudyroomPage />} />
            <Route  path={`Feedback/StudentFeedBack`} element={<FeedbackPage />} />
            <Route  path="*" element={<Notfoundpage/>} />
        </Routes>
    )
}

export default Routing
