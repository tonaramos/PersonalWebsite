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
    this.state = {};
  }

  render() {
    return (
      <div className="pageContents">
        <div className="header">
          <Logo />
          <MenuBar />
        </div>
        <div className="board">
          <Cover />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
