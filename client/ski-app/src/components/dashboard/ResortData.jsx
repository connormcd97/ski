import React, { Component } from 'react';
import Table from './Table'
import axios from 'axios';
class Data extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items:[],

      id:'',

    };

  }

 async componentDidMount() {
   let api=[];
   switch(this.props.api){
      case 'NH':
      api=['https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/attitash',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/waterville',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/brettonwoods',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/cannon',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/cranmore-mountain',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/gunstock',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/king-pine',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/loon',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/mount-sunapee',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/pats-peak',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/ragged-mountain',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/wildcat']
      break;


      case 'CO':
      api=['https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/abasin',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/aspen-highlands',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/beavercreek',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/breck',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/buttermilk',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/crested-butte',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/keystone',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/loveland',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/monarch',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/snowmass',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/steamboat',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/vail',
      'https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/winter-park' ]
      break;
      default:
            api=null;
            break;
            }
            await Promise.all(api.map(url => fetch(url)))

              .then(resp => Promise.all( resp.map(r => r.json()  ) ))


                .then(
                  (result) =>{
                  this.setState({
                    items:result,
                    id:result.id

                  })

                  console.log(this.state)
          })


                  this.setState({
             isLoading: false
           })
          }
        


createTableData(){
  let rows=[]
  console.log(this.state.items);
  this.state.items.map(resort => (

  rows.push({id:resort.id,name:resort.name,open:resort.lifts.stats.open,closed:resort.lifts.stats.closed,
  percent:resort.lifts.stats.percentage.open})))


return rows
console.log(rows);
}




  render() {
let data=this.createTableData();
console.log(data);



       return (
         <Table resort={data}/>
        )




 }
}
 export default Data;
