import React from 'react'
import MenuRoll from './MenuRoll.js'
import '../resources/css/BodyContent.css'
import '../StyleSheets/DashBoard.scss'
import {SummaryNPS} from '../Functions/UserFunctions.js'
import {Card} from 'react-bootstrap'
import Highcharts from 'highcharts'

class DashBoard extends React.Component {

    constructor() {
        super()
        this.state = {
            detractors: '',
            nps: 0,
            passives: 0,
            promoters: 0
        }
            SummaryNPS().then(res => {
                this.setState(
                    {detractors: res[2].Detractors, passives: res[3].Passives, promoters: res[1].Promoters, nps: res[4].Percentage}
                )
            })
        
    }
    componentDidUpdate() {
        Highcharts.chart('pie', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'NPS Score = ' + this.state.nps,
                align: 'center',
                verticalAlign: 'middle',
                y: 60
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: [
                        '50%', '75%'
                    ],
                    size: '110%'
                }
            },
            series: [
                {
                    type: 'pie',
                    name: 'Percentage',
                    innerSize: '50%',
                    data: [
                        [
                            'Detractors',
                            this.state.detractors
                        ],
                        [
                            'Passives',
                            this.state.passives
                        ],
                        [
                            'Promoters',
                            this.state.promoters
                        ],{
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }
            ]
        });

        
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    height: "max-content",
                    width: "max-content"
                }}>
                <MenuRoll/>
                <section>
                    <div id="pie"></div>
                </section>
                <section className="NPS">
                    <Card>
                        <Card.Body>
                            <Card.Title>Detractors</Card.Title>
                            {this.state.detractors}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Passives</Card.Title>
                            {this.state.passives}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Promoters</Card.Title>
                            {this.state.promoters}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>NPS Score</Card.Title>
                            {this.state.nps}
                        </Card.Body>
                    </Card>
                </section>
            </div>
        );
    }
}

export default DashBoard;