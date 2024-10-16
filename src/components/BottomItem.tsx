import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Row, Col } from 'react-bootstrap';
//Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
//Images
import FbLogo from '../images/icon-facebook.svg';
import TwLogo from '../images/icon-twitter.svg';
import InLogo from '../images/icon-instagram.svg';
import YtLogo from '../images/icon-youtube.svg';

interface BottomItemProps {
    icon: string,
    currTheme: string,
    headline: string,
    num: string,
    arrow: string,
    per: number,
}

const randomZoom = ["zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right"];

function getRandomZoom() {
  return randomZoom[Math.floor(Math.random() * randomZoom.length)];
}

const BottomItem: FC<BottomItemProps> = ({ icon, currTheme, headline, num, arrow, per }) => {
    const zoom = getRandomZoom();
    
    const renderIcon = () => {
        switch (icon) {
            case 'fb':
                return <Image fluid src={FbLogo} alt='facebook logo' className='h-75' />
            case 'tw':
                return <Image fluid src={TwLogo} alt='twitter logo' className='h-75' />
            case 'in':
                return <Image fluid src={InLogo} alt='instagram logo' className='h-75' />
            default:
                return <Image fluid src={YtLogo} alt='youtube logo' className='h-75' />
        }
    };

    const renderPercent = () => {
        switch (arrow) {
            case 'up':
                return <p className='fw-700 tc-green m-0'><MdArrowDropUp />{per}%</p>
            default:
                return <p className='fw-700 tc-red m-0'><MdArrowDropDown />{per}%</p>
        }
    }

    return(
        <Container data-aos={zoom} className={`h-100 cs-item cs-transition p-4 rounded bg-item-${currTheme}`}>
            <Row>
                <Col xs={12} className='d-flex flex-row justify-content-between align-items-center'>
                    <h5 className={`h6 fw-700 cs-transition my-1 d-flex flex-row cs-transition tc-${currTheme}-2`}>{headline}</h5>
                    {renderIcon()}
                </Col>
                <Col xs={12} className='mt-4 d-flex flex-row justify-content-between align-items-end'>
                    <h5 className={`h1 fw-700 cs-transition m-0 d-flex flex-row cs-transition tc-${currTheme}`}>{num}</h5>
                    {renderPercent()}
                </Col>
            </Row>
        </Container>
    );
}

export default BottomItem;