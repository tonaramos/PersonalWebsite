import React from 'react';
import MenuBar from './MenuBar';
import Logo from './Logo';
import Cover from './Cover';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
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
        name: 'Grayscale - restaurant review component',
        summary: 'Airbnb replica',
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
    this.buttonHandler = this.buttonHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  buttonHandler () {
   console.log('the button was clicked!');
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
          <button type="button" onDoubleClick={this.buttonHandler}>
            Double click button
          </button>
        </div>
        <div className="board">
          <Cover name={this.state.name} />
          <About />
          <Projects list={this.state.projects} />
          <Contact nameInput={this.nameChangeHandler} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
