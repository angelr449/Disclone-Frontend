import { UserListItem } from "./UserListItem"

// interface Props {
    
// }


export const RelationshipList = () => {
    return (
        <ul className="flex flex-col gap-1">
            {/* {users.map((user) => (
                <li key={user.id}>
                    <UserListItem user={user} />
                </li>
            ))} */}

            <li>
                <UserListItem name='juan' status="online"/>
            </li>
        </ul>
    )
}
