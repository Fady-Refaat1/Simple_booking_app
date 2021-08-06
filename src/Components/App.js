import React,{Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { handleIntilData } from '../Actions/shared';
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading';
import DashBoard from './DashBoard';
import Booking from './Booking';
import Page404 from './Page404';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  const {handleIntilData} = props
  
  useEffect(()=>{
    handleIntilData()
  }) // = componentDidMount

  return (
    <Fragment >
      <LoadingBar />
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={DashBoard} />
            <Route path='/booking/:id' exact component={Booking} />
            <Route  component={ Page404 }/>
          </Switch>
        </Router>
      </div>
    </Fragment>
    
  );
}

App.propTypes = {
  handleIntilData: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleIntilData : ()=>{
        dispatch(handleIntilData())
    }
  }
}

export default connect(null,mapDispatchToProps)(App)
