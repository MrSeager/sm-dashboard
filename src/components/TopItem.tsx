import React, { FC } from 'react';
//Bootstrap
import { Container, Image } from 'react-bootstrap';
//Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
//Images
import FbLogo from '../images/icon-facebook.svg';
import TwLogo from '../images/icon-twitter.svg';
import InLogo from '../images/icon-instagram.svg';
import YtLogo from '../images/icon-youtube.svg';

interface TopItemProps {
    icon: string,
    currTheme: string,
    line_1: string,
    line_2: string,
    line_3: string,
    line_4: number,
}

const randomZoom = ["zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right"];

function getRandomZoom() {
  return randomZoom[Math.floor(Math.random() * randomZoom.length)];
}

const TopItem: FC<TopItemProps> = ({ icon, currTheme, line_1, line_2, line_3, line_4 }) => {
    const zoom = getRandomZoom();

    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'fb':
                return <Image fluid src={FbLogo} alt='facebook logo' className='me-2 p-0 h-100' />
            case 'tw':
                return <Image fluid src={TwLogo} alt='twitter logo' className='me-2 p-0 h-100' />
            case 'in':
                return <Image fluid src={InLogo} alt='instagram logo' className='me-2 p-0 h-100' />
            default:
                return <Image fluid src={YtLogo} alt='youtube logo' className='me-2 p-0 h-100' />
        }
    };

    const renderBorder = (icon: string) => {
        switch (icon) {
            case 'in':
                return '-in';
            case 'yt':
                return '-red';
            default:
                return '-blue';
        }
    };

    const renderArrow = (icon: string) => {
        switch (icon) {
            case 'yt':
                return <MdArrowDropDown />
            default:
                return <MdArrowDropUp />
        }
    };

    const renderTC = (icon: string) => {
        switch (icon) {
            case 'yt':
                return 'red'
            default:
                return 'green'
        }
    }

    return(
        <Container data-aos={zoom} className={`h-100 cs-item cs-bc${renderBorder(icon)} cs-transition d-flex flex-column align-items-center justify-content-between text-center pt-4 pb-3 px-0 rounded bg-item-${currTheme}`}>
            <h2 className={`cs-transition h6 lh-base my-1 d-flex flex-row cs-transition tc-${currTheme}-2`}>{renderIcon(icon)}{line_1}</h2>
            <h3 className={`cs-transition display-2 my-1 fw-700 tc-${currTheme}`}>{line_2}</h3>
            <h4 className={`cs-transition my-1 text-uppercase h6 tc-${currTheme}-2 letter-spacing-3`}>{line_3}</h4>
            <p className={`fw-700 fs-6 tc-${renderTC(icon)} mt-3`}>{renderArrow(icon)}{line_4} Today</p>
        </Container>
    );
}

export default TopItem;