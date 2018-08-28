import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import MenuBar from './MenuBar';
import Logo from './Logo';
import Cover from './Cover';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'none',
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
      <StyleRoot>
        <div className="pageContents">
          <div className="header">
            <Logo />
            <MenuBar />
          </div>
          <div className="board">
            <Cover name={this.state.name} />
            <About />
            <Projects list={this.state.projects} />
            <Gallery />
            <Contact summitButton={this.summitMessageHandler} />
            <Footer />
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
