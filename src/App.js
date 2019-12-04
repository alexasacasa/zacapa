import React from 'react';
// import Task from './components/task/task';
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
      form: {
        title: "",
        description: "",
        date: ""
      },
      taskTemplate: {
        title: "",
        description: "",
        date: "",
        id: 0,
        complete: false
      }
    }
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const eventName = target.name;
    // console.log(eventName, value)

    this.setState(() => ({
      form: {
        ...this.state.form,
        [eventName]: value 
      }
    }))
    // , () => {console.log(this.state, eventName, value)})
  }

  showForm () {
    const form = this.Form();
    this.setState({
      dashboard: form
    })
  }

  Form() {
    const { title, description, date } = this.state.form
    return (
      <div className='form-contain'>
        <form className='Form'>
          <Input value={title} inputName='title' type='text' name='title' change={this.handleChange}/>
          <Input value={description} name='description' inputName='description' change={this.handleChange}/>
          <Input value={date} type='date' name='date' inputName='date' change={this.handleChange}/>
        </form>
        <Button name='Create task' action={() => {this.addTask()}}/>        
      </div>
    )
  }

  addTask() {
    let task = this.state.taskTemplate;
    const {title, description, date} = this.state.form
    task.title = title
    task.description = description
    task.date = date
    console.log(task)

    const taskComponent = () => {
      return (
        <Task 
          title={task.title}
          description={task.description}
          date={task.date}
          delete={() => this.deleteTask()}
        />
      )
    }

    this.setState({
      id: this.state.id++,
    }), () => {
      this.setState({
        ...form,
        title: "",
        description: "",
        date: ""
      })
    }, () => {console.log(this.state.form, this.state.id)}
  }

  deleteTask(element) {
    this.state.tasks.remove(element)
    console.log(this.state.tasks)
  }

  showTasks() {}

  componentDidMount() {
    this.showTasks();
  }

  render() {
    // const showForm = this.state.form;

    return (
      <div className='container'>
        <div className='sidebeard-contain'>
          <Button name='Create new task' action={() => this.showForm()}/>
          <Button name='All tasks' action={() => this.allTask()}/>
          <Button name='Pending tasks' action={() => this.allTask()}/>
          <Button name='Completed tasks' action={() => this.allTask()}/>
        </div>
        <div className='dashboard-contain'>
          {this.state.dashboard}
        </div>
      </div>
    )
  } 
}

export default App;
