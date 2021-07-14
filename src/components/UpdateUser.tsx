import { UPDATE_USER } from "../graphql/mutations";
import { GET_USERS } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { User } from "../interfaces/User";

export const UpdateUser = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    const [ updateUser ] = useMutation(UPDATE_USER);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Error: {error.message}</h3>;

    return data.users.data.map((user: User) => {
        let name: any;
        let username: any;
        let email: any;
        return (
            <div key={user.id}>
                <form onSubmit={e => {
                    e.preventDefault();
                    updateUser({
                        variables: {
                            id: user.id,
                            input: {
                                name: name.value ? name.value : user.name,
                                username: username.value ? username.value : user.username,
                                email: email.value ? email.value : user.email
                            }
                        }
                    })
                }
                }>
                    <input  
                        ref={node => name = node}
                        placeholder={user.name}
                    />
                    <input 
                        ref={node => username = node}
                        placeholder={user.username}
                    />
                    <input 
                        ref={node => email = node}
                        placeholder={user.email}
                    />
                    <br />
                    <button>Update</button>
                </form>
            </div>
        )
    })


}
