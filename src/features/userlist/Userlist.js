import { useSelector } from 'react-redux'
import { UserCard } from '../../app/components/UserCard'
import {
  userList
} from '../userlist/userlistSlice'

export function Userlist() {
  const list = useSelector(userList)
  return (
    <div>
        <h1>LIST</h1>
        {list.map(user => (
            <UserCard key={user.id} data={user}/>
        ))}
    </div>
  )
}
