import React from 'react'
import { Container, ProgressBar, Button, ButtonGroup, Row, Col, Card, ListGroup, Alert, Badge, Nav, Form } from 'react-bootstrap'
import './Main.css'

function Main() {

    return (
        <Container fluid={true}>
            <Row >
                <Col md={3}>


                    <Card className="card">
                        <Card.Header className="card-header">
                            <h3><ion-icon name="repeat-outline"></ion-icon> Feature</h3>
                        </Card.Header>
                        <ListGroup className="list-group list-group-flush">
                            <ListGroup.Item className="list-group-item">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item className="list-group-item">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className="list-group-item">Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>


                    <Card className="card">
                        <Card.Header>
                            <h3><ion-icon name="settings-outline"></ion-icon> Feature</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="outline-secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                    <Card className="card">
                        <Card.Header>
                            <h3><ion-icon name="settings-outline"></ion-icon> Feature</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant=" inline-secondary border">Left</Button>
                                <Button variant="inline-secondary border">Middle</Button>
                                <Button variant="inline-secondary border">Right</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>


                </Col>
                <Col md={6} id="main-section">
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message.
                         </p>
                    </Alert>

                    <Row>
                        <Col>
                            <h3> Nice Marker</h3>
                            <p> Hallo ich bin Hooman. ich bin 24 jare alt</p>
                            <Button variant="outline-success">Read more</Button>
                            <Row>




                                <Nav className="nav"
                                    activeKey="/home"
                                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                                >
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                                <div className="badge">
                                    <h5>
                                        <Badge variant="info" >keyword</Badge>
                                        <Badge variant="info">Info</Badge>
                                        <Badge variant="info">post</Badge>
                                    </h5>

                                </div>

                            </Row>


                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h3> Nice Marker</h3>
                            <p> Hallo ich bin Hooman. ich bin 24 jare alt</p>
                            <Button variant="outline-danger">Read more</Button>
                            <Row>




                                <Nav className="nav"
                                    activeKey="/home"
                                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                                >
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                                <div className="badge">
                                    <h5>
                                        <Badge variant="danger" >keyword</Badge>
                                        <Badge variant="danger">Info</Badge>
                                        <Badge variant="danger">post</Badge>
                                    </h5>

                                </div>

                            </Row>


                        </Col>
                    </Row>




                    <Row>
                        <Col>
                            <h3> Nice Marker</h3>
                            <p> Hallo ich bin Hooman. ich bin 24 jare alt</p>
                            <Button variant="outline-warning">Read more</Button>
                            <Row>




                                <Nav className="nav"
                                    activeKey="/home"
                                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                                >
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className="badge">
                                    <h5>
                                        <Badge variant="warning" >keyword</Badge>
                                        <Badge variant="warning">Info</Badge>
                                        <Badge variant="warning ">post</Badge>
                                    </h5>

                                </div>

                            </Row>


                        </Col>
                    </Row>




                </Col>


                <Col md={3}>


                    <Card className="card">
                        <Card.Header>
                            <h3><ion-icon name="log-out-outline"></ion-icon> Login</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="card">
                        <Card.Header>
                            <h3><ion-icon name="logo-electron"></ion-icon> Dramatically Engage</h3>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-center font-weight-bold">Speed</p>
                            <ProgressBar className="mb-3" variant="success" now={40} />
                            <p className="text-center font-weight-bold">Delivery</p>
                            <ProgressBar className="mb-3" variant="info" now={20} />
                            <p className="text-center font-weight-bold">Timing</p>
                            <ProgressBar className="mb-3" variant="warning" now={60} />
                            <p className="text-center font-weight-bold">Performance</p>
                            <ProgressBar className="mb-3" variant="danger" now={80} />
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    )
}

export default Main
