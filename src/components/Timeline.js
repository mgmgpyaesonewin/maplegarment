import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const color1 = '#fff';
const color2 = 'inherit';
const backgroundColor1 = '#eeeeee';
const backgroundColor2 = '#999999';
const backgroundColor3 = '#2e6da4';
const backgroundColor4 = '#3f903f';
const backgroundColor5 = '#f0ad4e';
const backgroundColor6 = '#d9534f';
const backgroundColor7 = '#5bc0de';
const TimelineContainer = Styled.ul`
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
  &:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: ${backgroundColor1};
    left: 50%;
    margin-left: -1.5px;
  }
  >li {
    margin-bottom: 20px;
    position: relative;
    &:before {
      content: " ";
      display: table;
      content: " ";
      display: table;
    }
    &:after {
      content: " ";
      display: table;
      clear: both;
      content: " ";
      display: table;
      clear: both;
    }
    >.timeline-panel {
      width: 46%;
      float: left;
      border: 1px solid #d4d4d4;
      border-radius: 2px;
      padding: 20px;
      position: relative;
      -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
      &:before {
        position: absolute;
        top: 26px;
        right: -15px;
        display: inline-block;
        border-top: 15px solid transparent;
				border-left: 15px solid #ccc;
				border-right: 0 solid #ccc;
				border-bottom: 15px solid transparent;
				content: " ";
			}
			&:after {
				position: absolute;
				top: 27px;
				right: -14px;
				display: inline-block;
				border-top: 14px solid transparent;
				border-left: 14px solid #fff;
				border-right: 0 solid #fff;
				border-bottom: 14px solid transparent;
				content: " ";
			}
		}
		>.timeline-badge {
			color: $color_1;
			width: 50px;
			height: 50px;
			line-height: 50px;
			font-size: 1.4em;
			text-align: center;
			position: absolute;
			top: 16px;
			left: 50%;
			margin-left: -25px;
			background-color: ${backgroundColor2};
			z-index: 100;
			border-top-right-radius: 50%;
			border-top-left-radius: 50%;
			border-bottom-right-radius: 50%;
			border-bottom-left-radius: 50%;
		}
	}
	>li.timeline-inverted {
		>.timeline-panel {
			float: right;
			&:before {
				border-left-width: 0;
				border-right-width: 15px;
				left: -15px;
				right: auto;
			}
			&:after {
				border-left-width: 0;
				border-right-width: 14px;
				left: -14px;
				right: auto;
			}
		}
	}
`;

const TimelineBadge = Styled.div`
  background-color: ${props => props.warning ? backgroundColor5 : backgroundColor4};
  color: $color_1;
  width: 50px;
	height: 50px;
	line-height: 50px;
	font-size: 1.4em;
	text-align: center;
	position: absolute;
	top: 16px;
	left: 50%;
	margin-left: -25px;
	z-index: 100;
	border-top-right-radius: 50%;
	border-top-left-radius: 50%;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
`;

const Text = Styled.h1`
  text-align: center;
`;

const Timeline = () => (
  <div>
    <Grid>
      <Row>
        <Col mdOffset={2} md={8}>
          <Text>Mission / Vision / Value</Text>
        </Col>
      </Row>
      <TimelineContainer>
        <li>
          <div className="timeline-badge"><i className="glyphicon glyphicon-check" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Mission</h4>
              <br />
            </div>
            <div className="timeline-body">
              <p>Our mission is to pursue customer satisfaction by producing best quality garments with great efficiency; to become internationally recognized garment factory that complies with international factory audit standards and regulations, and to remodel our service from <b>CMP</b> basis to <b>FOB</b>. </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <TimelineBadge warning><i className="glyphicon glyphicon-credit-card" /></TimelineBadge>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Vision</h4><br />
            </div>
            <div className="timeline-body">
              <p>Maple will produce most reliable and ethical products. We will provide employment opportunities promoting and enhancing supporting industries and will lead for brand building with high reputation.</p>
            </div>
          </div>
        </li>
        <li>
          <TimelineBadge><i className="glyphicon glyphicon-euro" /></TimelineBadge>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Value</h4>
            </div>
            <div className="timeline-body">
              <br />
              <ul>
                <li>Development</li>
                <li>Recognition</li>
                <li>Enjoyment</li>
                <li>Ambition</li>
                <li>Mutual Trust</li>
              </ul>
            </div>
          </div>
        </li>
      </TimelineContainer>
    </Grid>
  </div>
);

export default Timeline;
