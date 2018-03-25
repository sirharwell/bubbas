import React, { Component } from 'react';
import NavBar from './NavBar';
import {
  Header,
  Container,
  Divider,
  Segment,
  Grid,
  Card,
  Transition,
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class About extends Component {
  render () {
    return (

      <div
        style={{
                backgroundImage: `url(images/foodplates.jpg)`, backgroundSize: " 100% " }}>
        <Container class="ui container" >
          <br/>
          <Header as="h1" textAlign="center">About Us</Header>
        </Container>
        <Card centered>
        A long, long time ago
        In a galaxy far away
        Naboo was under an attack
        And I thought me and Qui-Gon Jinn
        Could talk the Federation into
        Maybe cutting them a little slack
        But their response, it didn't thrill us
        They locked the doors and tried to kill us
        We escaped from that gas
        Then met Jar Jar and Boss Nass
        We took a bongo from the scene
        And we went to Theed to see the Queen
        We all wound up on Tatooine
        That's where we found this boy...
        </Card>
        <Card centered>
          <div textAlign="center">
            <br/>
            <Header as="h4" textAlign="Left">Basic Info</Header>
            <div >
              565 E 2100 S
            <br/>
              Salt Lake City, UT 84106
            <br/>
              (801) 268-3374
            <br/>
              Open: Wednesday - Sunday 11am - 9pm
            <br/>
              Closed: Monday & Tuesday
            </div>
              <br/>
              <a href="https://www.google.com/maps/place/565+Firehouse/@40.7256923,-111.8769849,17z/data=!3m1!4b1!4m5!3m4!1s0x87528ab9882e4d53:0xf67f854b36163cf6!8m2!3d40.7256923!4d-111.8747962" >
                Directions
              </a>
              <Header as="h4">Upcoming Events</Header>
            <div>
              <Header as="h4">Follow Us</Header>
              <a href="https://twitter.com/BubbasFirehouse">
                <img src="../images/twitter.png" alt="twitter" width="50" height="50"/>
              </a>
              <a href="https://www.yelp.com/search?find_desc=bubba%27s+Firehouse+BBQ&find_loc=Highland%2C+UT&ns=1">
                <img src="../images/yelp.png" alt="yelp" width="50" height="50" />
              </a>
            </div>
          </div>
        </Card>
    </div>
    )
  }
}

export default About;
