import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import Button from "react-bootstrap/Button";
//import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg';
//import twitter from '../assets/img/twitter.svg';
import pdf from '../assets/Divyamshu_resume.pdf';


export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    DM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('home')}
                        >Home</Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('skills')}
                        >Skills</Nav.Link>

                        <Nav.Link 
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                        >Projects</Nav.Link>
                        
                        <Nav.Link 
                            href="#contact"
                            className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                        >Contact</Nav.Link>
                        
                    </Nav>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        &nbsp;Download Resume
                    </Button>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/DivyamshuMandadi" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/DivyamshuM" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}