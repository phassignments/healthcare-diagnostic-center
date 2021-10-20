import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const gIcon = <FontAwesomeIcon icon={faGoogle} />;

  const {
    signInWithEmail,
    signInByGoogle,
    handleEmail,
    handlePassword,
    setUser
  } = useAuth();

  const location = useLocation();
  const hostory = useHistory();
  const redirectURL = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    signInByGoogle().then((result) => {
      hostory.push(redirectURL);
    });
  };

  const handleEmailPassSignIn = (e) => {
    e.preventDefault();
    signInWithEmail().then((result) => {
      setUser(result.user);
      hostory.push(redirectURL);
    });
  };

  return (
    <>
      <div className="login-form my-5 py-5">
        <Container>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <div className="service-title">
                <h2>Login Here</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <form
                onSubmit={handleEmailPassSignIn}
                className="loginForm mt-5 mb-3"
              >
                <input
                  type="email"
                  onBlur={handleEmail}
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  onBlur={handlePassword}
                  name="pass"
                  id="pass"
                  placeholder="Enter Your Password"
                />
                <button type="submit">Login</button>
                <p className="already-have-ac-txt">
                  New Here? <Link to="/signup">Sign up</Link>{" "}
                </p>
              </form>
              <button onClick={handleGoogleSignIn} className="google-btn">
                {gIcon} Login with Google
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
