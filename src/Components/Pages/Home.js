import React, { useEffect } from "react";
import Slider from "../Layout/Slider";
import seo from "../Layout/seo";
import Notice from "../Layout/Notice/Notice";
import Hodprofile from "../Layout/Hod/Hodprofile";
import StudentReview from "../Layout/StudentReview";
import { GetAll } from "../../Services/MasterService";
import { useState } from "react";

function Home() {

  const [Noticedata,setstate] = useState([]); 

  useEffect(() => {
    seo({
      title: "Home",
      metaDescription: "Department of Computer Science home page",
    });
    GetNotice();
  }, []);

 
  function GetNotice() {
    GetAll("posts/1/comments").then((result) => {
        if(result.status){
            let data = result.data;
           if(data.length > 0){
             setstate(data)
           }else{
            setstate([])
           }
        }
    })
    .catch(err => {
        console.log(err);
    });
  }

  return (
    <React.Fragment>
      <Slider />
      <section className="sptb bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Hodprofile />
            </div>
            <div className="col-md-3">
              <Notice Noticedata={Noticedata}/>
            </div>
          </div>
        </div>
      </section>
      <StudentReview />
    
    </React.Fragment>
  );
}

export default Home;

