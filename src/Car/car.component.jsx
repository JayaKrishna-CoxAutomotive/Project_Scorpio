import React, { Component } from 'react';
import { Link } from 'react-router';
//import neo4j from 'neo4j-driver';
//var neo4j = require('neo4j-driver').v1;
 //var neo4j = require('neo4j');
 //var driver = neo4j.driver('bolt://localhost',neo4j.auth.basic('neo4j','OMSAIRAM@faith1'));

  


        
                
class Car extends Component {
   /*handleClick(e){
       console.log("compName")}*/
    render(){
/*        var session = driver.session();
var moviearr=[];
const resultPromise = session.run('MATCH (n:Process) RETURN n LIMIT 10')
    .then(function(result){
        
        result.records.forEach(function(record) {
            moviearr.push({
                name:record._fields[0].identity.low,
                tagline:record._fields[0].properties.ProcessName,
                
            }); 
        });
    });
    console.log(moviearr);*/
        // Get data from route props
        const cars = this.props.route.data;
        const numbers = [1, 2, 3, 4, 5]
        // Map through cars and return linked cars
         const listItems = numbers.map((number) =>
  <li className="list-group-item">{number}</li>
  );
         
        return (
            <div>
                <h1>View Process and Logs</h1>
                <div className="list-group">
                   
                    {listItems}
                  
                    
                </div>
            </div>
        );
    }
}

export default Car
