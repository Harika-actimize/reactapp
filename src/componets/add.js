import React, { Component } from 'react';

import styled from "@emotion/styled";
import axios from "axios";
// import Header from "../../components/Header";
const Container = styled.div`
  margin-top: 150px;
`;
class RetrieveList extends Component {
  state = {
      persons: [],
  };
/* 
 This is where the magic happens 
*/
componentDidMount(){
    axios.get("http://localhost:3000/users") // where the api gets fetched from that API
      .then(res=>{
        console.log(res);
        this.setState({ persons: res.data});
      })
  }
  render() {
    return (
      <Container>
        {/* <Header/> */}
        {this.state.persons.map(person=><li key = {person.id}>{person.name}</li>)}
      </Container>
    );
  }
}
export default RetrieveList;
