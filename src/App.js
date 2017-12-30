import React, { Component } from 'react';
import './css/calender.css'
class App extends Component {

  state={
    grids: [
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0,
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0, 
      0, 0, 0,
      0, 0, 0, 
      0, 0, 0,
    ],
    week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    now:new Date(),
    year:new Date().getFullYear(),
    month:new Date().getMonth(),
  }
  
  setContext= (num)=>{

      return (num===0)? '':num; 
        
  }
  renderDay=(year,month)=>{
   
    var lastday=new Date(year,month+1,0).getDate();  
    var weekday=new Date(year,month,1).getDay();//第一天是禮拜幾
    var day=1;
    
    this.state.grids.map((item,idx)=>{
        this.state.grids[idx]=0;
    });

    for(var i=weekday;i<lastday+weekday;i++)
    {
       this.state.grids[i]=day;
       day++;      
    }
  }
  // -1:pre  1:next
  NextMonth=()=>{
      let {month,year,now}=this.state;    
      month=month+1;
     
      if (month>=12)
      {
          year=year+1;
          month=0;
      }
        
      now=new Date(year,month,1);
     
      this.setState({
          now,year,month

      });
        
  }

  PreMonth=()=>{
    let {month,year,now}=this.state;    
    month=month-1;
   
    if (month<=0)
    {
        year=year-1;
        month=11;
    }
      
    now=new Date(year,month,1);
   
    this.setState({
        now,year,month

    });
      
  }

  render() {
    var {year,month}=this.state;
    this.renderDay(year,month);
   
    return (
      <div className="App">
      <div className="a"></div>
      <center>
      <div>
            <table>
               
                 <tr>  
                    <th><button className='btn'  onClick={()=>this.PreMonth()}>{"<<"}</button></th>
                    <th><h1><div className="b">{this.state.year+"/"+(this.state.month+1)}</div></h1></th>
                    <th><button className='btn' onClick={()=>this.NextMonth()}>{">>"}</button></th>
                </tr>           
           </table>
            </div>
            <div className='board'>
            {
              this.state.week.map((num,idx)=>{
                    return (<div className='grid'>{num}</div>)
              })
            }
            </div>
            <div className='board'>
            {this.state.grids.map((num, idx) => {

                  let today='grid';
                  if (num===new Date().getDate() && this.state.month===new Date().getMonth())
                      today='grid today';
                  return (
                    
                     <div className={today} >
                          {this.setContext(num)}
                     </div>           
                  );

            })}
          </div></center>
      </div>
    );
  }
}

export default App;
``