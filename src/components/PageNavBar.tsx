import React, { FC } from 'react';
//Bootstrap
import { Container, Navbar, Form } from 'react-bootstrap';

interface PageNavBarProps {
    navHead: string,
    navPar: string,
    currTheme: string,
    setCurrTheme: (currTheme: string) => void;
}

const PageNavBar: FC<PageNavBarProps> = ({ navHead, navPar, currTheme, setCurrTheme }) => {
    const toggleTheme = () => {
        const newTheme = currTheme === 'dark' ? 'light' : 'dark';
        setCurrTheme(newTheme);
    };

    return (
        <Navbar data-aos="fade-down" className='pt-4'>
            <Container fluid className='d-flex flex-md-row flex-column align-items-center justify-content-between'>
                <Navbar.Brand>
                    <h1 className={`fw-700 m-0 h2 cs-transition tc-${currTheme}`}>{navHead}</h1>
                    <p className={`fs-6 m-0 fw-700 cs-transition tc-${currTheme}-2`}>{navPar}</p>
                </Navbar.Brand>
                <Form className={`cs-transition cs-switch fw-700 tc-${currTheme}`}>
                    <Form.Check
                        type='switch'
                        id="cs-switch"
                        label={currTheme === 'dark' ? 'Dark mode' : 'Light mode'}
                        onClick={toggleTheme}
                    />
                </Form>
            </Container>
        </Navbar>
    );
}

export default PageNavBar;