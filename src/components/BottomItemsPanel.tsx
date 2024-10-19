import React, { FC } from 'react';
//Components
import BottomItem from './BottomItem.tsx';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

interface TopItemsPanelProps {
    currTheme: string,
    head: string,
}

const BottomItemsPanel: FC<TopItemsPanelProps> = ({ currTheme, head }) => {
    const bottomItems = [
        { icon: 'fb', headline: 'Page Views', num: '87', arrow: 'up', per: 3},
        { icon: 'fb', headline: 'Likes', num: '52', arrow: 'down', per: 2},
        { icon: 'in', headline: 'Likes', num: '5462', arrow: 'up', per: 2257},
        { icon: 'in', headline: 'Profile Views', num: '52k', arrow: 'up', per: 1375},
        { icon: 'tw', headline: 'Retweets', num: '117', arrow: 'up', per: 303},
        { icon: 'tw', headline: 'Likes', num: '507', arrow: 'up', per: 553},
        { icon: 'yt', headline: 'Likes', num: '107', arrow: 'down', per: 19},
        { icon: 'yt', headline: 'Total Views', num: '1407', arrow: 'down', per: 12}
    ];
    
    return (
        <Container fluid className='mt-4'>
            <div data-aos="fade-right">
                <h4 className={`ms-md-0 ms-5 h4 m-0 fw-700 cs-transition tc-${currTheme}`}>{head}</h4>
            </div>
            <Row>
                {bottomItems.map((item, index) => (
                    <BottomItem
                        index={index}
                        icon={item.icon}
                        currTheme={currTheme}
                        headline={item.headline}
                        num={item.num}
                        arrow={item.arrow}
                        per={item.per}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default BottomItemsPanel;