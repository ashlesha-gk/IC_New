import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const courses = [
    { id: 1, title: "C", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmV8X-77qSnSrlavouIEpyhASBCrF4bxFwhXq1z0NfvZZmysChvBtazqICk4mdrfnmdk&usqp=CAU" },
    { id: 2, title: "C++", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrG9_RBubUN3tO1DmCiEFEi2Kv5U5jUgZ5VwShIFs3suB3F64ETcWrvj91A_q7cPtcKM&usqp=CAU" },
    { id: 3, title: "Java", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1" },
    { id: 4, title: "Python", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbo1w8eWCW1KgYXituNHrTtcsQL5GYA3CvTVuyFjcYLIlRuXe6dYA_s3fBenR2VD2TLM&usqp=CAU" },
    { id: 5, title: "React", image: "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg" },
    { id: 6, title: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" },
  ];

  return (
    <div className="container">
      <h1>Courses Offered</h1>
      <div className="row">
        {courses.map((course) => (
          <div className="col-lg-4 col-md-6" key={course.id}>
            <div className="card mb-4">
              <img className="card-img-top" src={course.image} alt={course.title} style={{ width: "200px", height: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Course description goes here.</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
