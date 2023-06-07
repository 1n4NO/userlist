import { useSelector, useDispatch } from 'react-redux';
import { UserCard } from '../../app/components/UserCard';

export function Userlist(props) {
    const { list } = props;
  return (
    <div>
        <h1>LIST</h1>
        {list.map(user => (
            <UserCard key={user.id} data={user}/>
        ))}
    </div>
  );
}
