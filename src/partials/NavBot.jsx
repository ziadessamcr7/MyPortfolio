import { Link, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./CSS/NavBot.css";

function NavBot() {
  var numberPage;
  var titlePage;
  var directUp;
  var directDown;
  const { pathname } = useLocation();

  switch (pathname) {
    case "/home":
      numberPage = "01";
      titlePage = "Home";
      break;
    case "/MyPortfolio":
      numberPage = "01";
      titlePage = "Home";
      break;
    case "/about":
      numberPage = "02";
      titlePage = "About";
      break;
    case "/skills":
      numberPage = "03";
      titlePage = "Skills";
      break;
    case "/projects":
      numberPage = "04";
      titlePage = "Projects";
      break;
    case "/contact":
      numberPage = "05";
      titlePage = "Contact";
      break;
    default:
  }

  // Direct Up
  switch (pathname) {
    case "/home":
      directUp = "/contact";
      break;
    case "/MyPortfolio":
      directUp = "/contact";
      break;
    case "/about":
      directUp = "/home";
      break;
    case "/skills":
      directUp = "/about";
      break;
    case "/projects":
      directUp = "/skills";
      break;
    case "/contact":
      directUp = "/projects";
      break;
    default:
  }

  // Direct Down
  switch (pathname) {
    case "/home":
      directDown = "/about";
      break;
    case "/MyPortfolio":
      directDown = "/about";
      break;
    case "/about":
      directDown = "/skills";
      break;
    case "/skills":
      directDown = "/projects";
      break;
    case "/projects":
      directDown = "/contact";
      break;
    case "/contact":
      directDown = "/home";
      break;
    default:
  }

  return (
    <>
      <footer className="navbot px-4">
        <div className="navbot-left d-flex">
          <p className="navbot-title">{titlePage}</p>
          <p className="navbot-number">
            {numberPage} <span className="disabled-color">/ 05</span>
          </p>
        </div>
        <div className="navbot-right d-flex">
          <Link to={directUp} className="d-flex align-items-center arrow">
            <AiOutlineArrowLeft />
          </Link>
          <Link
            to={directDown}
            className="d-flex align-items-center ps-4 arrow"
          >
            <AiOutlineArrowRight />
          </Link>
        </div>
      </footer>
    </>
  );
}

export default NavBot;
