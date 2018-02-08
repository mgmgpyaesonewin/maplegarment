import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import callto from '../assets/img/call-to.jpg';

const CallToAction = Styled.div`
  background: url(${callto});
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 90%;
  color: #fff;
  text-align: center;
  padding: 100px 0;
`;

const ZoomInAnimation = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

const ZoomIn = Styled.div`
  animation: ${ZoomInAnimation} 2s;
`;

const H1 = Styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
`;

const P = Styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 3px;
`;

const PanelBody = Styled(Panel.Body)`
  color: #000000;
`;

const QuotesWithImage = () => (
  <CallToAction>
    <Grid>
      <Row>
        <Col md={6}>
          <ZoomIn>
            <H1>
              Our Code of Compliance
            </H1>
            <br />
            <P>
            Corporate Social Compliance is a key priority for us and we have been working to drive up standards in recent years. We are making consitent improvements to create a better work place for our employees and to support our community.In 2017, we have registered ourselves in SEDEX-registration number ZS293209420. In addition we were awarded a certificate by Aeon, Japan. We are working in collaboration with CBI (Dutch Government Programme on sustainable exports to EU), SMART Myanmar, Pyoe Pin (British funded Capacity Development Program). In 2018, we have achieved H&M sustainability audit and BSCI is underway.
            </P>
          </ZoomIn>
        </Col>
        <Col md={6}>
          <div>
            <Panel id="collapsible-panel-example-2" defaultExpanded>
              <Panel.Heading>
                <Panel.Title toggle>
              International Certification
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <PanelBody>
              In 2017, we have registered ourselves under SEDEX. We have also achieved certification from Aeon, Japan. In 2018, we passed H&M’s sustainability audit, TAKKO social compliance audit and BSCI is in progress.
                </PanelBody>
              </Panel.Collapse>
            </Panel>
            <Panel id="collapsible-panel-example-3">
              <Panel.Heading>
                <Panel.Title toggle>
              Collaboration with International and Local Organizations
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <PanelBody>
              We are working closely with CBI (Dutch Government Programme on sustainable exports to EU), SMART Myanmar and Pyoe Pin (British funded Programme). We are a member of Myanmar Garment Manufacturers Association (MGMA) and Union of Myanmar Federation of Chamber of Commerce and Industry (UMFCCI).
                </PanelBody>
              </Panel.Collapse>
            </Panel>
            <Panel id="collapsible-panel-example-4">
              <Panel.Heading>
                <Panel.Title toggle>
            Community Engagement
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <PanelBody>
            The Primary-Middle school that we donated in our neighborhood currently accommodates over 800 students.
            Maple family has donated pagoda in the community called,{'"'}Sanda Muni{'"'}.
            In the future, Maple would also like to build a hospital in the community to support patients who need to be cared for.
            Maple offers yearly financial allowances for children{'\''}s education of our employees up to high school.
                </PanelBody>
              </Panel.Collapse>
            </Panel>
            <Panel id="collapsible-panel-example-5">
              <Panel.Heading>
                <Panel.Title toggle>
            Capacity Development
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <PanelBody>
              Maple grows together with our employees. Maple not only focuses on technical development, but also gives training for moral, education, and critical aspects of life. We offer both, Inbound and Outbound training programs for our employees. Countries for outbound training include Japan, China, Vietnam and Thailand.
                </PanelBody>
              </Panel.Collapse>
            </Panel>
            <Panel id="collapsible-panel-example-6" defaultExpanded>
              <Panel.Heading>
                <Panel.Title toggle>
              Sustain Festival and Cultural Celebration
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <PanelBody>
              We observe the following annual festivals.
                  <ul>
                    <li>January - Independence Day Celebration</li>
                    <li>February - Annual Holiday Trip</li>
                    <li>April - Water Festival</li>
                    <li>October - Thadinkyut Festival</li>
                    <li>November - Ta Zaung Daing Festival</li>
                  </ul>
                </PanelBody>
              </Panel.Collapse>
            </Panel>
          </div>
        </Col>
      </Row>
    </Grid>
  </CallToAction>
);

export default QuotesWithImage;
