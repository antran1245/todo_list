import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ToDo from './components/todo';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    const arr = localStorage.getItem('array');
    if(arr) {
      setList([...JSON.parse(arr)])
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, e.target.item.value])
    localStorage.setItem('array', JSON.stringify([...list, e.target.item.value]))
    e.target.reset()
  }

  const removeItem = (item) => {
    const arr = list.filter(element => element !== item)
    console.log(item)
    setList([...arr]);
    localStorage.setItem('array', JSON.stringify([...arr]))
  }
  return (
    <div className="App">
      <h1>To do</h1>
      <form onSubmit={handleSubmit}>
        <input name='item' type={'text'}/>
        <input type='submit' value="Add"/>
      </form>

      {list.map((item, i) => 
        <ToDo key={i} content={item} remove={removeItem}/>
      )}
    </div>
  );
}

export default App;
