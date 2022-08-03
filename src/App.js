
import './App.css';
import React from 'react';
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';



class RandomQuote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        
       randomQuote: Math.round(Math.random() * 5)

}
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
  
     this.setState(state => ({

       randomQuote: Math.round(Math.random() * 5)

     }))
      
  }

  render(){
  
    let newIndex = this.state.randomQuote;
      const quoteTable = [
          ["Hello there", "Obi Wan Kenobi", "brown"], ["My favorite ring is the next one", "Tom Brady", "red"],
           ["You dont know the power of the dark side", "Darth Vader", "grey"], ["What you do speaks louder then what you say", "Anthony Rizzo", "blue"],
           ["Rawwwwwwwwwwwwrrr", "Godzilla", "maroon"], ["Its not about who I am underneath, but what i do that defines me", "Batman", "black"]
] ;  
 let jimmy = quoteTable[newIndex][0] + " -" + quoteTable[newIndex][1];
    return(
      <div id= "parent" style = {{background: quoteTable[this.state.randomQuote][2]}}>
      <div  id= "quote-box">
          <div>
            <h1 id = "text" style = {{color: quoteTable[this.state.randomQuote][2]}}>{quoteTable[newIndex][0]}</h1>
          </div>
              <h4 style = {{color: quoteTable[this.state.randomQuote][2]}} id = "author">-{quoteTable[newIndex][1]}</h4>
              
             <div id = "link-box">
             <button className = "button-style" style = {{color: quoteTable[this.state.randomQuote][2]}}id = "new-quote" onClick = {this.handleClick}>New Quote</button> 

<div id = "anchor-div"><a id = "tweet-quote" href={`http://www.twitter.com/intent/tweet?text=${jimmy}`} target="_blank">Tweet</a></div>
              
              </div> 
              
             

      </div>
</div>

    );
  }



}

/* class ButtonLinks extends React.Component {
      constructor(props){
        super(props);
      }
      render(){
        return(
          <div>
             <button><a href = "twitter.com/intent/tweet" target="_blank"></a></button>
            <button className = "button-style" id = "tweet-quote2"></button>

             
          </div>
        );

      }
}
*/


export default RandomQuote;
