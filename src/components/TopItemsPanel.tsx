import React, { FC } from 'react';
//Components
import TopItem from './TopItem.tsx';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

interface TopItemsPanelProps {
    currTheme: string,
    linesProps: {
        line_1_1: string;
        line_1_2: string;
        line_1_3: string;
        line_1_4: number;
        line_2_1: string;
        line_2_2: string;
        line_2_3: string;
        line_2_4: number;
        line_3_1: string;
        line_3_2: string;
        line_3_3: string;
        line_3_4: number;
        line_4_1: string;
        line_4_2: string;
        line_4_3: string;
        line_4_4: number;
      };
}

const TopItemsPanel: FC<TopItemsPanelProps> = ({ currTheme, linesProps }) => {
   
    const topItems = [
        { icon: 'fb', lines: { line_1: linesProps.line_1_1, line_2: linesProps.line_1_2, line_3: linesProps.line_1_3, line_4: linesProps.line_1_4 }},
        { icon: 'tw', lines: { line_1: linesProps.line_2_1, line_2: linesProps.line_2_2, line_3: linesProps.line_2_3, line_4: linesProps.line_2_4 }},
        { icon: 'in', lines: { line_1: linesProps.line_3_1, line_2: linesProps.line_3_2, line_3: linesProps.line_3_3, line_4: linesProps.line_3_4 }},
        { icon: 'yt', lines: { line_1: linesProps.line_4_1, line_2: linesProps.line_4_2, line_3: linesProps.line_4_3, line_4: linesProps.line_4_4 }},
    ];
    
    return(
        <Container fluid>
            <Row>
                {topItems.map((item, index) => (
                    <TopItem
                        index={index}
                        icon={item.icon}
                        currTheme={currTheme}
                        line_1={item.lines.line_1}
                        line_2={item.lines.line_2}
                        line_3={item.lines.line_3}
                        line_4={item.lines.line_4}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default TopItemsPanel;