import { CreateUser } from "../components/CreateUser";
import {Link} from 'react-router-dom';

function CreateUserPage() {
  return (
    <>
      <p className="link text-center">
        <Link to="/users">Go back Users</Link>
      </p>
      <CreateUser />
    </>
  );
}

export default CreateUserPage;
