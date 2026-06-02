import { UserListItem } from "./UserListItem"
import { type User } from '../../../types/user';




interface Props {
    users: User[]
    renderActions?: (user:User)=> React.ReactNode
}


export const RelationshipList = ({users, renderActions}:Props) => {
    return (
        <ul className="flex flex-col gap-1">
            {users.map((user) => (
                <li key={user.id}>
                    {/* <UserListItem user={user} /> */}
                    <UserListItem user={user} >
                        {renderActions?.(user)}
                    </UserListItem>
                   
                    
                </li>
            ))}

            {/* <li>
                <UserListItem name='juan' status="online"/>
            </li> */}
        </ul>
    )
}
