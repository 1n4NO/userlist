import { useDispatch } from 'react-redux'
import {
    deleteUser
} from '../../features/userlist/userlistSlice'
import { DeleteBg, DeleteCover, ComfirmDelete } from './styles'

export function UserDelete(props){
	const dispatch = useDispatch()
	const { data } = props
	const deleteClicked = () => {
		console.log("User will be deleted:", data.name);
		dispatch(deleteUser(data.id))
	}
	return (
		<DeleteBg onClick={() => deleteClicked()}>
			<ComfirmDelete>Confirm Delete</ComfirmDelete>
			<DeleteCover>
				<p>Delete User</p>
			</DeleteCover>
		</DeleteBg>
	)
}
