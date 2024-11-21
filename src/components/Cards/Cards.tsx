import { useAppSelector } from '../../hooks/store';
import { deleteUserById } from '../../store/users/slice';

export const Cards = () => {
  const users = useAppSelector((state) => state.users);
  console.log(users);

  return (
    <div>
      <h1>Cards</h1>
      <ul>
        {users.map((user) => {
          return <p key={user.id}> {user.name}</p>;
        })}
      </ul>
    </div>
  );
};
