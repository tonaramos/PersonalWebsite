import React from 'react';
import MenuBar from './MenuBar';
import Logo from './Logo';

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
          Gabriel Tonatiuh Ramos
        </div>
      </div>
    );
  }
}

export default App;
