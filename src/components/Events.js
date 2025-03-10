import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import underconst from "../assets/undraw_under_construction_-46-pa.svg"
import Card from 'react-bootstrap/Card';
//import inaugration from '../assets/Inaugration.png'
import inauguration from '../assets/inauguration2.png'
import Badge from 'react-bootstrap/Badge';
import workshop from '../assets/workshop.jfif'



class Events extends Component {
    render() {
        return (
            <Container fluid className="event-section" >
                <h1 className="project-heading" style={{ textAlign: "center" }}>
                    Stay tuned for upcoming <span className='purple'>events</span> !
                </h1>

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> A New Start! </h2><Badge bg="danger" >Upcoming</Badge>
                                   

                                </Card.Title>
                                <Card.Text>
                                    You're cordially invited to the IETE Forum Inauguration at Deogiri Institute of Engineering and Management Studies. Join us on 25th Oct 2024 to celebrate the launch of this vibrant platform for electronics and telecommunications enthusiasts. Expect insightful speakers, networking opportunities, and a journey into the future of technology. Don't miss this exciting event!
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={inauguration}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                
                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> Micromaster! </h2><Badge bg="danger" >Upcoming</Badge>
                                   

                                </Card.Title>
                                <Card.Text>
                                Presenting the Deogiri Institute of Engineering and Management Studies, a distinguished institution known for its commitment to providing top-tier education and fostering innovation. Join us for a dynamic two-day workshop on the 8051 microcontroller, in microcontroller workshop offers sessions on introductory concepts, embedded C programming, timers, interrupts and sensors/actuators, providing a well-rounded understanding of microcontrollers, supported by the IETE, which aims to equip students with hands-on microcontroller expertise.
                                 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={workshop}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                

            </Container>
        );
    }
}

export default Events;