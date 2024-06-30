import home from "../assets/Home page.png";
import Arrow from "../assets/Arrow white.png";
import Arrow2 from "../assets/Arrow.png";
import "../App.css";
function Home() {
  return (
    <div className="container">
      <div className="Home">
        <div className="Home-content">
          <div className="home-img">
            <img src={home} alt="home" />
            <div className="home-txt">
              <h1>
                Let`s make your <br /> home beautiful together
              </h1>
              <p>
                There are many variations of the passages <br /> of lorem Ipsum
                fromavailable, majority.
              </p>
              <button>
                Get Started <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>

          <div className="home-cards">
            <div className="card">
              <h2>Project Plan</h2>
              <p>
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <a href="./product">
                Read More <img src={Arrow2} alt="" />
              </a>
            </div>
            <div className="card">
              <h2>Interior Work</h2>
              <p>
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <a href="./Product.jsx">
                Read More <img src={Arrow2} alt="" />
              </a>
            </div>
            <div className="card">
              <h2>Realization</h2>
              <p>
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
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
  );
}

export default Home;
