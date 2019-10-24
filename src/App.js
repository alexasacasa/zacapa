import React from 'react';
import Sidebard from './components/sidebard';
import Task from './components/task/task';
import Form from './components/form/form';

class App extends React.Component {

  contructor() {
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebard/>
        <div className='tasks-contain'>
          <Task class='task' title='Estilos de tarea'
            descrip='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            deadline='20/03/2020'
            date='22/10/2019'
          />
        </div>
      </div>
    )
  }
  
}

export default App;
