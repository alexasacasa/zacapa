import React from 'react';
import Input from './input';
import Button from '../buttons/button'

function Form () {
  return (
    <form className='Form'>
      <Input value={} inputName='Task name' id='taskName' type='text' name='task name'/>
      <Input value={} inputName='Deadline' id='deadline' type='date' name='task deadline date'/>
      <Input value={} inputName='Time' id='timeCreate' type='time' name='Time of creation'/>
      <Input value={} inputName='Task description:' id='taskDescrip' name='task descrip'/>
      <Button name='Create task' class='form-button'/>
    </form>

    // <form className='Form'>
    //   <Input value={this.state.taskName} onChange={this.onChange} inputName='Task name' id='taskName' type='text' name='task name'/>
    //   <Input value={this.state.taskDeadline} onChange={this.onChange} inputName='Deadline' id='deadline' type='date' name='task deadline date'/>
    //   <Input value={this.state.taskDate} onChange={this.onChange} inputName='Time' id='timeCreate' type='time' name='Time of creation'/>
    //   <Input value={this.state.taskDescription} onChange={this.onChange} inputName='Task description' id='taskDescrip' name='task descrip'/>
    //   <Button name='Create task' class='form-button' onClick={this.addTask}/>
    // </form>

  )
}

export default Form;
