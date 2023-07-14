import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="data:image/png;base64,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" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className="container">
          <h1>Welcome to our Education Website</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">
            <a href="#">Current Page</a>
            </li>
          </ol>
        </div>
      </header>

      {/* Content */}
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://hh-certificates.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2022/08/29130437/pasted-image-0-2022-09-29T183418.867.jpg" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.shutterstock.com/image-vector/students-laptops-studying-huge-laptop-260nw-1331332628.jpg" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZ689eEahddCmt-gAs8s6oKOeFdLA32szEyhsE1Yr4TDr6yd7qZJFTxBE3-4RBJAyiEI&usqp=CAU" alt="Slide 3" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.shiksha.com/mediadata/images/articles/1660459082phpOTrRnB.jpeg" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Course 1</h5>
                <p className="card-text">Python Course Discount of 10%.</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.shiksha.com/mediadata/images/articles/1660459082phpOTrRnB.jpeg" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Course 2</h5>
                <p className="card-text">Free C++ course.</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.shiksha.com/mediadata/images/articles/1660459082phpOTrRnB.jpeg" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Course 3</h5>
                <p className="card-text">Java course with project.</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-light">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Our Education Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

