import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Button } from "../../../components/ui/button"
import { type User } from '../../../types/user';




interface Props {
    user: User
    children?: React.ReactNode
}

export const UserListItem = ({ user , children }: Props) => {
    return (
        <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3  py-2 h-auto hover:bg-gray-700 hover:text-white"
        >
            <Avatar>
                <AvatarImage src={user.avatar} />

                <AvatarFallback>
                    {user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start">
                <span>{user.name}</span>
                <span className="text-xs   text-gray-200">
                    {user.status}
                </span>
            </div>

            {children}
        </Button>
    )
}
