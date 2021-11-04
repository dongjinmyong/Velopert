import React from 'react';
import Button from './component/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='button'>
        <Button size='small'></Button>
        <Button></Button>
        <Button size='large' onClick={() => console.log('클릭됐다!')}></Button>
      </div>
      <div className='button'>
        <Button size='small' color='pink'></Button>
        <Button color='pink'></Button>
        <Button size='large' color='pink'></Button>
      </div>
      <div className='button'>
        <Button size='small' color='gray'></Button>
        <Button color='gray' ></Button>
        <Button size='large' color='gray' ></Button>
      </div>
      <div className='button'>
        <Button size='small' color='gray' outline></Button>
        <Button color='gray' outline></Button>
        <Button size='large' color='gray' outline></Button>
      </div>
      <div className='button'>
        <Button size='small' color='pink' fullWidth></Button>
        <Button fullWidth></Button>
        <Button size='large' color='gray' fullWidth></Button>
      </div>
    </div>
  );
}

export default App;
