import { UserListItem } from "./UserListItem"


interface User{
    id: number
    name: string;
    avatar?: string;
    status: string;
}

interface Props {
    users: User[]
}


export const RelationshipList = ({users}:Props) => {
    return (
        <ul className="flex flex-col gap-1">
            {users.map((user) => (
                <li key={user.id}>
                    <UserListItem user={user} />
                </li>
            ))}

            {/* <li>
                <UserListItem name='juan' status="online"/>
            </li> */}
        </ul>
    )
}
