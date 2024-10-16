import React, { FC, useState } from 'react';
//Components
import './DashboardStyle.css';
import PageNavBar from './PageNavBar.tsx';
import TopItemsPanel from './TopItemsPanel.tsx';
import BottomItemsPanel from './BottomItemsPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const DashboardPage: FC = () => {
    const [currTheme, setCurrTheme] = useState('dark');

    const linesProps = {
        navHead: 'Social Media Dashboard',
        navPar: 'Total Followers: 23,004',
        midHead: 'Overview - Today',

        //top cards text
        line_1_1: '@nathanf',
        line_1_2: '1987',
        line_1_3: 'Followers',
        line_1_4: 12,

        line_2_1: '@nathanf',
        line_2_2: '1044',
        line_2_3: 'Followers',
        line_2_4: 99,

        line_3_1: '@realnathanf',
        line_3_2: '11k',
        line_3_3: 'Followers',
        line_3_4: 1099,
        
        line_4_1: 'Nathan F.',
        line_4_2: '8239',
        line_4_3: 'Subscribers',
        line_4_4: 144,
    }

    AOS.init({
        once: true, 
    });

    return (
        <Container fluid className={`overflow-hidden px-5 min-vh-100 cs-transition cs-bg-${currTheme}`}>
            <PageNavBar
                navHead={linesProps.navHead}
                navPar={linesProps.navPar}
                currTheme={currTheme}
                setCurrTheme={setCurrTheme} />
            <TopItemsPanel 
                currTheme={currTheme}
                linesProps={linesProps} />
            <BottomItemsPanel 
                currTheme={currTheme}
                head={linesProps.midHead} />
        </Container>
    );
}

export default DashboardPage;