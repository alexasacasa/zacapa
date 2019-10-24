import React from 'react';
import Input from './input';
import Button from '../buttons/button'

export default () => {
  return (
    <form className='Form'>
      <Input inputName='Task name' id='taskName' type='text' name='task name'/>
      <Input inputName='Deadline' id='deadline' type='date' name='task deadline date'/>
      <Input inputName='Time' id='timeCreate' type='time' name='Time of creation'/>
      <Input inputName='Task description:' id='taskDescrip' name='task descrip'/>
      <Button name='Create task' class='form-button'/>
    </form>
  )
}
