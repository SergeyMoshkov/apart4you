import React from 'react';
import './App.css';
import SecondComponents from './components/SecondComponets';



function App() {
  let apple = 1
  function sumApple(n) {

    if (n===1) {
      return `У Сергея ${n} яблоко!`
    }
    else if (n < 0) {
      return `Сергей отдал ${Math.abs(n)} яблок!`
    }
    else if (n===0 || n > 4) {
      return `У Сергея ${n} яблок!`
    }
    else if (2 < n < 4) {
      return `У Сергея ${n} яблока!`
    }
    
    
  }

  function MyComponents() {
    return (
      <React.Fragment>
        <h1 className='myClass'>{sumApple(apple)}</h1>
        
      </React.Fragment>
      
    )
    
  }
  
  return (
    <div>
      <MyComponents />
      <SecondComponents />
    </div>
  );
}

export default App;
