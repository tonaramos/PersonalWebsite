import React from 'react';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menuBar">
        <li className="menuItem">
          Home
        </li>
        <li className="menuItem">
          Projects
        </li>
        <li className="menuItem">
          About
        </li>
        <li className="menuItem">
          Contact
        </li>
      </div>
    );
  }
}

export default MenuBar;
