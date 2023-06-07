import { UserDelete } from './UserDelete'
import { CardBg, UserName, UserDetails } from './styles'

export function UserCard(props) {
    const { data } = props
  return (
    <CardBg>
        <UserName>{data.name}</UserName>
        <UserDetails>{data.email}</UserDetails>
        <UserDetails>{data.phone}</UserDetails>
        <UserDelete data={data}/>
    </CardBg>
  )
}
