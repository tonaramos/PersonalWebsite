import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../../hoc/Layout/Layout';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Gallery from '../Gallery/Gallery';
import PhotoBackdrop from '../../components/PhotoBackdrop/PhotoBackdrop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: 'Tona',
      projects: [{
        id: 0,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/pone.png',
        webAddress: null,
        name: 'DataTable',
        summary: 'System design of OpenTable Reviews',
        description: 'The goal of the project was to work on and scaled the back-end API of an Open Table reviews component to properly handle over 200rps with over 70M records of user data and reduce the initial page load time to under 1000ms. The microservice implements React server-side rendering, a Redis chace system, and a Postgres database. Tested with Artillery.io, Loadder.io, and New Relic to analyze the response times, of the server and database and examine potential bottlenecks.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Redis.png', 'Redis'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/postgresql.png', 'PostgreSQL'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/NewRelic.png', 'NewRelic'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/docker.png', 'Docker']],
      }, {
        id: 1,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/ptwo.png',
        webAddress: null,
        name: 'Napbnb',
        summary: 'Description listing of an Airbnb property',
        description: 'Used React.js to develop and design a user interface identical to Airbnb which displays a property description listing, amenities, rules, and room arrangements as well as unique characteristics and attributes for properties meeting certain criteria. Created a Mongo database hosted in Mlab flexible to handle and store different size and contents of each property information for thousands of properties.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/nodejs.png', 'Nodejs'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/expressjs.png', 'Express'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Mongodb.png', 'MongoDB'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/AWS.png', 'AWS']],
      }, {
        id: 2,
        name: 'T-minus',
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/pthree.png',
        webAddress: null,
        summary: 'Live multiplayer game',
        description: 'Using React.js on the client side with a  Node.js, Express, and Socket.io server. I created a simple real-time multi-player race course. Connected with a Mongo database the game incorporates a registry system of game users, record times, and game usage. I focused on creating a seamless interface by reducing the number of actions a user needs to take to transition between the different stages of the game.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/react.png', 'Reactjs'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Socketio.png', 'Socketio'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Mongodb.png', 'MongoDB'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/heroku.png', 'Heroku']],
      }, {
        id: 3,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/FoodBuilder.png',
        webAddress: null,
        name: 'Fix me a Burger',
        summary: 'Restaurant online ordering system',
        description: 'Single page application with a multi-page feeling that incorporates routing, form validation, and authentication. Using redux for data management, and tested with Jest and Enzyme this is online ordering system optimized for all screen sizes and seamless ordering experience.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Redux.png', 'Redux'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/CSSModules.png', 'CSSModules'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Jest.png', 'Jest'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Webpack.png', 'Webpack']],
      }, {
        id: 3,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/HelloWorld.png',
        webAddress: 'http://tonatiuhramos.com',
        name: 'TonatiuhRamos.com',
        summary: 'Personal Website',
        description: 'Built with React and Redux, this single page website showcases a short description about me, my projects, a picture gallery, a contact form with Sendgrid for email delivery, and links to my social media profiles.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/nodejs.png', 'Nodejs'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Webpack.png', 'Webpack'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/babel.png', 'Babel'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/awsS3.png', 'AWSS3']],
      }],
    };
    this.summitMessageHandler = this.summitMessageHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  summitMessageHandler(info) {
    const { loading } = this.state;
    this.setState({ loading: true });
    axios.post('/sendMessage', info)
      .then((response) => {
        this.setState({
          loading: false,
        });
        alert('Thanks for your message, I\'ll be in touch soon!');
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log('Error from the request', error.response);
        console.log('Error Code ', error.response.status, '-', error.response.statusText);
        console.log('Error message', error.message);
        alert(`Message failed to send: ${error.response.data.reason}. `, error.response.data.messsage);
      });
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
            <PhotoBackdrop />
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
