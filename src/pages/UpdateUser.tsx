import { UpdateUser } from "../components/UpdateUser";
import {Link} from 'react-router-dom';

function UpdateUserPage() {
  return (
      <>
        <p className="link text-center">
            <Link to="/users">Go back Users</Link>
        </p>
        <UpdateUser />
      </>
  );
}

export default UpdateUserPage;
