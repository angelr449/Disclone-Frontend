import { CustomUserListItem } from "./CustomUserListItem"



export const CustomRelationshipList = () => {
    return (
        <ul className="flex flex-col gap-1">
            {/* {users.map((user) => (
                <li key={user.id}>
                    <UserListItem user={user} />
                </li>
            ))} */}

            <li>
                <CustomUserListItem name='juan' status="online"/>
            </li>
        </ul>
    )
}
