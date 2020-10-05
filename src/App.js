import React from 'react';

// import BooksCard from './components/BooksCard'
// import Grid from '@material-ui/core/Grid'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components 
import Header from './Components/Header';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';


// const App = () => (
class App extends React.Component {
  state = {
		projectData: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appxHbAmWEaapw9Gf/Table%201?api_key=keyHoZe6iixLcTeeA')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ projectData: res.records })
			})
			.catch(error => console.log(error))
  }

  render() { 
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          

          <Switch> {/* render the first Route component that matches url. If not found, than it renders NotFound component */}
            <Route exact path="/" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/projects" render={ () => <Projects projectData={this.state.projectData}/>}/> 
            <Route exact path="/contact" component={Contact} />        
            <Route component={NotFound} />
          </Switch>
          
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
  
};


  // return (
  //   <div>
  //     <Jumbotron>
  //       <Container>
  //         <h1>Search App</h1>
  //         <p>This is a simple search app</p>
  //       </Container>
  //     </Jumbotron>

  //   </div>
  // );
 
export default App;
