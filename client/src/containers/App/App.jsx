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
        description: 'Scaled microservice to handle 200rps with 70M records of user data by deploying two EC2 instances and multi-node Cassandra cluster. Load tested with Artillery.io, Loadder.io, and New Relic to analyse response times, and potential bottlenecks. Resulting in restructuring the database tables and adding indexes for faster queries. Reduced initial page load time to 350ms by implementing React server-side rendering and a Redis cache system.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Redis.png', 'Redis'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/postgresql.png', 'PostgreSQL'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/NewRelic.png', 'NewRelic'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/docker.png', 'Docker']],
      }, {
        id: 1,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/ptwo.png',
        webAddress: null,
        name: 'Napbnb',
        summary: 'Property listing and title Gallery',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/nodejs.png', 'Nodejs'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/expressjs.png', 'Express'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Mongodb.png', 'MongoDB'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/AWS.png', 'AWS']],
      }, {
        id: 2,
        name: 'T-minus',
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/pthree.png',
        webAddress: null,
        summary: 'Live multiplayer game',
        description: 'Used ReactJS on the client side and NodeJS/Socket.io on server side to create a realtime race course. Used MongoDB to have a registry system of game users, record times, and usage of the game. Created a seamless interface by reducing the number of actions a user needs to take to move between stages with a countdown for login and race stages.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/react.png', 'Reactjs'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Socketio.png', 'Socketio'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Mongodb.png', 'MongoDB'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/heroku.png', 'Heroku']],
      }, {
        id: 3,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/FoodBuilder.png',
        webAddress: null,
        name: 'Burrito Builder',
        summary: 'Online burrito ordering site',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
        techStack: [['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Redux.png', 'Redux'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/CSSModules.png', 'CSSModules'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Jest.png', 'Jest'], ['https://s3-us-west-1.amazonaws.com/tonaramoswebsite/Webpack.png', 'Webpack']],
      }, {
        id: 3,
        image: 'https://s3-us-west-1.amazonaws.com/tonaramoswebsite/HelloWorld.png',
        webAddress: 'https://www.tonatiuhramos.com',
        name: 'Personal Website',
        summary: 'Description Listing and title Gallery',
        description: 'Used React.js to developed a single page flexible microservice that displays an interactive image carousel and  description listing of a properties. Created a Mongo database hosted in Mlab that could handle and store the different size of each property information for  thousands of properties.',
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
