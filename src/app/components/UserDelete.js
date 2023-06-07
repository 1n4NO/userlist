import { DeleteBg, DeleteCover, ComfirmDelete } from './styles';

export function UserDelete(){
  return (
    <DeleteBg>
        <ComfirmDelete>Confirm Delete</ComfirmDelete>
        <DeleteCover>
            <p>Delete User</p>
        </DeleteCover>
   </DeleteBg>
  );
}
