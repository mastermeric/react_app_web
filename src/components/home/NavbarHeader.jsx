import React, { useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import '../../App.css';
import LogoImage from "../../images/tradeIstLogo.jpg"
// $(function () {
//   $(".navbar-toggler-icon").on("click", function () {
//       $(".navbar-collaps").slideToggle('slow');

//   });
// });
const NavbarHeader = () => {  
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
}, []);
  return (
    <React.Fragment>
      <Navbar bg="lg" expand="lg" fixed="top">
        <a href="/"><img src={LogoImage} className="image-source"/></a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-1"
            style={{ maxHeight: "140px" }}
            id="menu-items"
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/why-us">Why Us</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="USD">{}</div>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarHeader;
