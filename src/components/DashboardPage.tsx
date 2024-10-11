import React, { FC } from 'react';
//Components
import './DashboardStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Form } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const DashboardPage: FC = () => {
    return (
        <Container fluid className='vh-100 bg-dark-blue'>
            <Navbar>
                <Container>
                    <Navbar.Brand className='text-white'>
                        <h1>Social Media Dashboard</h1>
                        <p>Total Followers: 23,004</p>
                    </Navbar.Brand>
                    <Form className='cs-switch text-white'>
                        <Form.Check
                            type='switch'
                            id="custom-switch"
                            label='Dark mode'
                        />
                    </Form>
                </Container>
            </Navbar>
        </Container>
    );
}

export default DashboardPage;