import { useState, useEffect } from 'react';
import './App.css';
import { Userlist } from './features/userlist/Userlist';
import { getList } from './services/list';
import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
  userList
} from './features/userlist/userlistSlice';

function App() {
  const list = useSelector(userList);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          dispatch(addUser(items))
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
