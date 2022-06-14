// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import "./App.css";
import Body from "./Body";
import Navbar from "./Navbar";
import LeftPannel from "./LeftPannel";




const initial_state = {
  page:0,
}

const reducer = (state=initial_state, action)=>{
  switch(action.type){
    case 'SET_PAGE':
      return  {...state, page:action.payload}
    default:
      return state;
  }
  
}
const store = createStore(reducer)


function App() {
  const url = "http://localhost:5000/api";

  const [tours, setTours] = useState(null);

  const fetchTours = async () => {
    try {
      console.log("started fetch");

      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log("error started");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);


  const mapStateToProps = (state)=>{
    return{
      page:state.page,
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
      setPage:( page )=>{
        dispatch({type:'SET_PAGE', payload: page})
      }
    }
  }
  const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar);
  const BodyContainer = connect(mapStateToProps,mapDispatchToProps)(Body);

  return (
    <div className="App">
      {/* <h1>Hello</h1>
      {tours!==null? tours.thissucks :"Loading"} */}
      <Provider store={store}>
        <NavbarContainer />
        {/* <LeftPannel/> */}
        <BodyContainer />
      </Provider>
    </div>
  );
}

export default App;
