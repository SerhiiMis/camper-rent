import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import Container from "../../components/Container/Container.jsx";
import notFoundImage from "../../assets/images/404-CampersNotFound.webp";

const NotFoundPage = () => {
  return (
    <Container>
      <Helmet>
        <title>TravelTrucks - Page Not Found</title>
      </Helmet>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.animationContainer} aria-hidden="true">
            <img
              src={notFoundImage}
              alt="Page not found"
              className={styles.animation}
            />
          </div>
          <section className={styles.content} aria-labelledby="not-found-title">
            <h1 className={styles.title} id="not-found-title">
              Oops!
            </h1>
            <p className={styles.message}>
              Looks like this page is not available.
            </p>
            <p className={styles.subMessage}>Let's get you back on track!</p>
            <Link to="/" className={styles.link} aria-label="go back">
              Go to Home
            </Link>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
