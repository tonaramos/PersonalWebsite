import React from 'react';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <li>
          Home
        </li>
        <li>
          Blog
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </div>
    );
  }
}

export default MenuBar;
