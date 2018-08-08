import React from 'react';
import MenuBar from './MenuBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          My personal Website
        </div>
        <div>
          <MenuBar />
        </div>
      </div>
    );
  }
}

export default App;
