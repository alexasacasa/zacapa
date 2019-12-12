import React from 'react';

import Button from './components/buttons/button';
import Input from './components/form/input';
import Textarea from './components/form/textarea'
import Task from './components/task/task'

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      dashboard: "",
      tasks: [],
      title: "",
      description: "",
      date: Date.now(),
      deadline: "",
    }
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = (event) => {
    const target = event.target;
    const valueInput = target.value;
    const eventName = target.name;

    this.setState({
      [eventName]: valueInput
    },()=>{
      // console.log(this.state)
    })
    /**
     * Esto es una implementación con spreed para poder acceder a los 
     * elementos del state cuando es un objeto 
     * form={title:'',descript:'',date:''}
     * 
     * this.state(() => {
          form: {
            ...this.state.form,
            [eventName]: value 
          }
      * }) 
      * 
    */
      
    // , () => {console.log(this.state, eventName, value)})
  }

  showForm () {
    const form = this.Form();
    this.setState({
      dashboard: form
    })
  }

  Form() {
    
    return (
      <div className='form-contain'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label className='form-label' htmlFor='title'>Title:</label>  
          <input className='form-input' id="title"
            name='title' type='text'
            onChange={this.handleChange}
          />
          <label className='form-label' htmlFor='description'>Description:</label>  
          <input className='form-input' id="description"
            name='description' type='text'
            onChange={this.handleChange}
          />
          <label className='form-label' htmlFor='date'>Deadline:</label>  
          <input className='form-input' id="deadline"
            name='deadline' type='date'
            onChange={this.handleChange}
          />
          <Button name='Create task' customStyle='form-btn' action={console.log(this.state.tasks)}/>        
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title === 
      !this.state.title) {
      return (
        new Error()
      )
    }
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      date: new Date() ,
      deadline: this.state.deadline
    }
    // console.log(newTask)
    this.setState({
      tasks: this.state.tasks.concat(newTask),
      title: '',
      description: '',
      deadline: ''
    })
    console.log(this.state.tasks)

  }

  deleteTask(element) {
    this.state.tasks.remove(element)
    console.log(this.state.tasks)
  }

  showTasks() {
    const tasks = this.state.tasks

    const showTasks = (() => {
      return (
        tasks && tasks.map((i) => {
          return <Task 
            key={i.deadline}
            customStyle='task'
            title={i.title}
            descrip={i.description}
            date={i.date.toDateString()}
            deadline={i.date}
          />
        })
      )      
    })
    
    this.setState({
      dashboard: showTasks()
    })

    console.log(this.state.dashboard)

  }

  pendingTasks() {}
  completedTasks() {}

  componentDidMount() {
  }

  render() {
    // const showForm = this.state.form;

    return (
      <div className='container'>
        <div className='sidebeard-contain'>
          <Button name='Create new task' action={() => this.showForm()} customStyle='side-button'/>
          <Button name='All tasks' action={() => this.showTasks()} customStyle='side-button'/>
          <Button name='Pending tasks' action={() => this.pendingTasks()} customStyle='side-button'/>
          <Button name='Completed tasks' action={() => this.completedTasks()} customStyle='side-button'/>
        </div>
        <div className='dashboard-contain'>
          {this.state.dashboard}
        </div>
      </div>
    )
  } 
}

export default App;
