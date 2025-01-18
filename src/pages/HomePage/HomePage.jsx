import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url('/images/hero-van-with-sunset.png')" }}
    >
      <div className="hero-text">
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog" className="btn">
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
