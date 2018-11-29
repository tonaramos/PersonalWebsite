import React, { Component } from 'react';
import axios from '../../axios-messages';
import Layout from '../../hoc/Layout/Layout';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Backdrop from '../../components/Backdrop/Backdrop';

import FilePOne from '../../assets/pone.png';
import FilePTwo from '../../assets/ptwo.png';
import FilePThree from '../../assets/pthree.png';
import HelloWorld from '../../assets/HelloWorld.png';
import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/Redux.png';
import expressLogo from '../../assets/expressjs.png';
import nodeLogo from '../../assets/nodejs.png';
import awsLogo from '../../assets/AWS.png';
import dockerLogo from '../../assets/docker.png';
import herokuLogo from '../../assets/heroku.png';
import socketioLogo from '../../assets/Socketio.png';
import mongodbLogo from '../../assets/Mongodb.png';
import postgresqlLogo from '../../assets/postgresql.png';
import redisLogo from '../../assets/Redis.png';
import webpackLogo from '../../assets/Webpack.png';
import babelLogo from '../../assets/babel.png';
import newRelicLogo from '../../assets/NewRelic.png';
import css3ModulesLogo from '../../assets/CSSModules.png';
import AWSS3Logo from '../../assets/awsS3.png';
import JestLogo from '../../assets/Jest.png';
import BurritoBuilder from '../../assets/BurritoBuilder.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: 'Tona',
      projects: [{
        id: 0,
        image: FilePOne,
        name: 'DataTable: System design of OpenTable',
        summary: 'Restaurant Reviews',
        description: 'Scaled microservice to handle 200rps with 70M records of user data by deploying two EC2 instances and multi-node Cassandra cluster. Load tested with Artillery.io, Loadder.io, and New Relic to analyse response times, and potential bottlenecks. Resulting in restructuring the database tables and adding indexes for faster queries. Reduced initial page load time to 350ms by implementing React server-side rendering and a Redis cache system.',
        techStack: [redisLogo, postgresqlLogo, newRelicLogo, dockerLogo],
      }, {
        id: 1,
        image: FilePTwo,
        name: 'Napbnb',
        summary: 'Property listing and title Gallery',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
        techStack: [nodeLogo, expressLogo, mongodbLogo, awsLogo],
      }, {
        id: 2,
        name: 'T-minus',
        image: FilePThree,
        summary: 'Live multiplayer game',
        description: 'Used ReactJS on the client side and NodeJS/Socket.io on server side to create a realtime race course. Used MongoDB to have a registry system of game users, record times, and usage of the game. Created a seamless interface by reducing the number of actions a user needs to take to move between stages with a countdown for login and race stages.',
        techStack: [ reactLogo, socketioLogo, mongodbLogo, herokuLogo],
      }, {
        id: 3,
        image: BurritoBuilder,
        name: 'Burrito Builder',
        summary: 'Online burrito ordering site',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
        techStack: [reduxLogo, css3ModulesLogo, JestLogo, webpackLogo],
      }, {
        id: 3,
        image: HelloWorld,
        name: 'Personal Website',
        summary: 'Description Listing and title Gallery',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
        techStack: [nodeLogo, webpackLogo, babelLogo, AWSS3Logo],
      }],
    };
    this.summitMessageHandler = this.summitMessageHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  summitMessageHandler(info) {
    const { loading } = this.state;
    // alert('Thanks for your message, I\'ll be in touch soon!')

    // this.setState({ loading: true });

    // const message = info;
    axios.post('/message.json', info)
      .then((response) => {
        console.log(response);
        // this.setState({
        //   loading: false,
        // });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   loading: false,
        // });
      });
  }

  nameChangeHandler(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const { name, projects } = this.state;
    return (
      <Layout>
        <div className="pageContents">
          <div className="board">
            <Backdrop />
            <Cover name={name} />
            <About />
            <Projects list={projects} />
            <Gallery />
            <Contact summitButton={this.summitMessageHandler} />
            <Footer />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
