import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import Logo from './components/Logo';
import Cover from './components/Cover';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Builder from './components/Builder';

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
    console.log('the button was clicked!');
    console.log('the info received', info);
  }

  nameChangeHandler(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="pageContents">
        <div className="header">
          <Logo />
          <MenuBar />
        </div>
        <div className="board">
          <Cover name={this.state.name} />
          <Builder />
          <About />
          <Projects list={this.state.projects} />
          <Gallery />
          <Contact summitButton={this.summitMessageHandler} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
