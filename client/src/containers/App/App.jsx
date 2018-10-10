import React, { Component } from 'react';
import './App.css';
import Layout from '../../hoc/Layout/Layout';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Gallery from '../Gallery/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tona',
      projects: [{
        id: 0,
        name: 'DataTable: System design of OpenTable',
        summary: 'Restaurant Reviews',
        description: 'Scaled microservice to handle 200rps with 70M records of user data by deploying two EC2 instances and multi-node Cassandra cluster. Load tested with Artillery.io, Loadder.io, and New Relic to analyse response times, and potential bottlenecks. Resulting in restructuring the database tables and adding indexes for faster queries. Reduced initial page load time to 350ms by implementing React server-side rendering and a Redis cache system.',
        techStack: ['React.js', 'Node.js', 'PostgreSQL'],
      }, {
        id: 0,
        name: 'Napbnb - Property listing',
        summary: 'Description Listing and title Gallery',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
        techStack: ['ReactJS', 'Node.js', 'MongoDB'],
      }, {
        id: 2,
        name: 'T-minus',
        summary: 'Live multiplayer game',
        description: 'Used ReactJS on the client side and NodeJS/Socket.io on server side to create a realtime race course. Used MongoDB to have a registry system of game users, record times, and usage of the game. Created a seamless interface by reducing the number of actions a user needs to take to move between stages with a countdown for login and race stages.',
        techStack: ['React.js', 'Node.js', 'Socket.io'],
      }],
    };
    this.summitMessageHandler = this.summitMessageHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  summitMessageHandler(info) {
    console.log('the button was clicked!', this.name);
    console.log('the info received', info);
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
