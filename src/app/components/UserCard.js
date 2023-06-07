import { UserDelete } from './UserDelete';
import { CardBg, UserName, UserEmail, UserPhone } from './styles';

export function UserCard(props) {
    const { data } = props;
    console.log(data)
  return (
    <CardBg>
        <UserName>{data.name}</UserName>
        <UserEmail>{data.email}</UserEmail>
        <UserPhone>{data.phone}</UserPhone>
        <UserDelete />
    </CardBg>
  );
}
