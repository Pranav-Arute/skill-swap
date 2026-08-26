import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Badge, Form } from 'react-bootstrap';
import { FaCode, FaGuitar, FaLanguage, FaCamera, FaPalette, FaCalculator, FaExchangeAlt } from 'react-icons/fa';

function App() {
  const featuredSkills = [
    { id: 1, title: 'React JS Mentoring', category: 'Programming', icon: <FaCode />, provider: 'Alex M.', exchangeFor: 'Spanish Lessons' },
    { id: 2, title: 'Acoustic Guitar Basics', category: 'Music', icon: <FaGuitar />, provider: 'Sarah T.', exchangeFor: 'Graphic Design' },
    { id: 3, title: 'Conversational French', category: 'Languages', icon: <FaLanguage />, provider: 'Jean D.', exchangeFor: 'Math Tutoring' },
    { id: 4, title: 'Portrait Photography', category: 'Photography', icon: <FaCamera />, provider: 'Emily R.', exchangeFor: 'Video Editing' },
    { id: 5, title: 'Digital Illustration', category: 'Design', icon: <FaPalette />, provider: 'Chris P.', exchangeFor: 'Web Development' },
    { id: 6, title: 'Calculus Tutoring', category: 'Academics', icon: <FaCalculator />, provider: 'Michael S.', exchangeFor: 'Piano Lessons' }
  ];
//thsi is comment
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="light" expand="lg" sticky="top" className="navbar-custom py-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <FaExchangeAlt className="text-primary me-2" size={24} style={{ color: 'var(--primary-color)' }} />
            <span className="fs-3">Skill<span className="text-gradient">Swap</span></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#explore">Explore Skills</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              <Button variant="outline-custom" className="px-4">Log In</Button>
              <Button variant="primary" className="btn-primary-custom">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Badge className="badge-custom mb-3 p-2 px-3">🚀 Campus Community Platform</Badge>
              <h1 className="display-4 fw-bold mb-4">
                Trade Skills, Not <span className="text-gradient">Money</span>
              </h1>
              <p className="lead text-secondary mb-5 px-md-5">
                Join the ultimate college network where students teach and learn from each other. 
                Need math tutoring? Offer your guitar skills in return! 
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button size="lg" className="btn-primary-custom px-5 py-3">
                  Offer a Skill
                </Button>
                <Button size="lg" variant="outline-custom" className="px-5 py-3 bg-white">
                  Find a Skill
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="border-0 shadow-sm rounded-pill p-2">
                <div className="d-flex">
                  <Form.Control 
                    type="text" 
                    placeholder="Search for a skill to learn (e.g., Python, Guitar, French...)" 
                    className="border-0 shadow-none ps-4"
                    style={{ borderRadius: '50px' }}
                  />
                  <Button className="btn-primary-custom px-4 ms-2 rounded-pill">Search</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Skills Section */}
      <section id="explore" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Featured <span className="text-gradient">Skills</span></h2>
            <p className="text-secondary">Discover what your peers are offering on campus right now.</p>
          </div>
          
          <Row className="g-4">
            {featuredSkills.map(skill => (
              <Col md={6} lg={4} key={skill.id}>
                <Card className="skill-card">
                  <div className="card-img-wrapper">
                    {skill.icon}
                  </div>
                  <Card.Body className="p-4">
                    <Badge className="badge-custom mb-2">{skill.category}</Badge>
                    <Card.Title className="fw-bold fs-4 mb-3">{skill.title}</Card.Title>
                    <div className="d-flex justify-content-between text-secondary small mb-3">
                      <span><strong>Provider:</strong> {skill.provider}</span>
                    </div>
                    <Card.Text className="text-muted small border-top pt-3">
                      <strong>Looking for:</strong> {skill.exchangeFor}
                    </Card.Text>
                    <Button variant="outline-custom" className="w-100 mt-2">Connect to Swap</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <Button variant="outline-custom" className="px-5">View All Skills</Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <FaExchangeAlt className="text-primary me-2" size={24} style={{ color: '#6366f1' }} />
                <span className="fs-4 text-white fw-bold">SkillSwap</span>
              </div>
              <p className="text-muted pe-md-5">
                The leading peer-to-peer skill exchange platform for college students. Empowering learning through community collaboration.
              </p>
            </Col>
            <Col md={4} lg={3} className="mb-4 mb-md-0">
              <h5>Quick Links</h5>
              <a href="#home" className="footer-link">Home</a>
              <a href="#explore" className="footer-link">Explore Skills</a>
              <a href="#how-it-works" className="footer-link">How It Works</a>
              <a href="#about" className="footer-link">About Us</a>
            </Col>
            <Col md={4} lg={2} className="mb-4 mb-md-0">
              <h5>Legal</h5>
              <a href="#terms" className="footer-link">Terms of Service</a>
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#safety" className="footer-link">Safety Guidelines</a>
            </Col>
            <Col md={4} lg={3}>
              <h5>Subscribe to Newsletter</h5>
              <p className="text-muted small">Get weekly updates on new skills offered on campus.</p>
              <div className="d-flex mt-3">
                <Form.Control type="email" placeholder="Your Email" className="me-2 rounded-1" />
                <Button className="btn-primary-custom rounded-1">Subscribe</Button>
              </div>
            </Col>
          </Row>
          <hr className="my-4 border-secondary" />
          <div className="text-center text-muted small">
            &copy; {new Date().getFullYear()} SkillSwap. All rights reserved. Created for a college practical project.
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
