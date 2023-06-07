import { useState, useEffect } from 'react';
import './App.css';
import { Userlist } from './features/userlist/Userlist';
import { getList } from './services/list';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <div className="App-bg">
        <Userlist list={list}/>
      </div>
    </div>
  );
}

export default App;
