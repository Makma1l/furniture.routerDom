import service from "../assets/Services page.png"
import Arrow2 from "../assets/Arrow.png"
function Services() {
  return (
    <div>
      <img className="service-img" src={service} alt="Image" />
      <div className="container">
        <div className="services">
          <div className="sercvices-content">
            <div className="services-img">
              <div className="services-txt">
                <h1>Services</h1>
              </div>
            </div>
            <div className="services-cards">
              <div className="card">
                <h2>Project Plan</h2>
                <p>
                  There are many variations of the <br /> passages of lorem
                  Ipsum from <br />
                  available, majority.
                </p>
                <a href="./product">
                  Read More <img src={Arrow2} alt="" />
                </a>
              </div>
              <div className="card">
                <h2>Interior Work</h2>
                <p>
                  There are many variations of the <br /> passages of lorem
                  Ipsum from <br />
                  available, majority.
                </p>
                <a href="./Product.jsx">
                  Read More <img src={Arrow2} alt="" />
                </a>
              </div>
              <div className="card">
                <h2>Realization</h2>
                <p>
                  There are many variations of the <br /> passages of lorem
                  Ipsum from <br />
                  available, majority.
                </p>
                <a href="#">
                  Read More <img src={Arrow2} alt="" />
                </a>
              </div>
            </div>
            <div className="services-cards">
              <div className="card">
                <h2>Project Plan</h2>
                <p>
                  There are many variations of the <br /> passages of lorem
                  Ipsum from <br />
                  available, majority.
                </p>
                <a href="./product">
                  Read More <img src={Arrow2} alt="" />
                </a>
              </div>
              <div className="card card-yellow">
                <h2>Interior Work</h2>
                <p>
                  There are many variations of the <br /> passages of lorem
                  Ipsum from <br />
                  available, majority.
                </p>
                <a href="./Product.jsx">
                  Read More <img src={Arrow2} alt="" />
                </a>
              </div>
              <div className="card">
                <h2>Realization</h2>
                <p>
                  There are many variations of the <br /> passages of lorem
                  Ipsum from <br />
                  available, majority.
                </p>
                <a href="#">
                  Read More <img src={Arrow2} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
