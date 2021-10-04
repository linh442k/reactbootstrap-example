// import logo from "./logo.svg";
import "./App.css";
// import Button from "react-bootstrap/Button";
import { Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">
                    This is a sample text holder.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="********" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "black" }}>
            <Card.Img src="https://picsum.photos/1000/200" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>ReactBootstrap Card</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active="true">Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
