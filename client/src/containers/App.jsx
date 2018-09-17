import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import MenuBar from '../components/MenuBar';
import Logo from '../components/Logo';
import Cover from '../components/Cover';
import About from '../components/About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tona',
      projects: [{
        id: 0,
        name: 'Napbnb - Property listing',
        summary: 'Airbnb replica',
        description: 'This was the first project a worked on',
        techStack: ['ReactJS', 'Node.js', 'MongoDB'],
      }, {
        id: 1,
        name: 'Grayscale - restaurant review service',
        summary: 'Open Table reviews component replica',
        description: 'Worked on back-end to ensure scalability for the service and reduce latancy',
        techStack: ['React.js', 'Node.js', 'PostgreSQL'],
      }, {
        id: 2,
        name: 'T-minus',
        summary: 'Live multiplayer game',
        description: 'live multiplayer racing game using socket.io ',
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
          <div className="header">
            <Logo />
            <MenuBar />
          </div>
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
