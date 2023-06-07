import { useEffect } from 'react'
import './App.css'
import { Userlist } from './features/userlist/Userlist'
import { getList } from './services/list'
import { useDispatch } from 'react-redux'
import {
  addUser
} from './features/userlist/userlistSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          dispatch(addUser(items))
        }
      })
    return () => mounted = false
  })

  return (
    <div className="App">
      <div className="App-bg">
        <Userlist/>
      </div>
    </div>
  );
}

export default App
