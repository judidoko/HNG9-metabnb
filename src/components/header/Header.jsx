import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import HeaderLogo from "../../Assets/imgs/metabnb-logo.JPG";

function Header() {
  return (
    <Navbar className="nav" bg="white" expand="lg">
      <Container>
        <Link to="#">
          <img src={HeaderLogo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav_item me-auto my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/placetostay">Place To Stay</Link>
            <Link to="#">NFTs</Link>
            <Link to="#">Community</Link>
          </Nav>
          <Form className="d-flex">
            <Button className="btn_connect">Connect Wallet</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
