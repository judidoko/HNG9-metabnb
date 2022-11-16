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
    <>
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
              <Button
                className="btn_connect"
                data-bs-toggle="modal"
                data-bs-target="#connectWallet"
              >
                Connect Wallet
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* connection Wallet Section */}

      <div
        className="modal fade"
        id="connectWallet"
        tabindex="-1"
        aria-labelledby="connectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="connectModalLabel">
                Connect Wallet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Choose your Preferred wallet:
                </label>
                <br />
                <Button>MataMask</Button>
              </div>
              <div class=" wallet mb-3">
                <Button>WalletConnent</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
