import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Button } from "../../../components/ui/button"

interface User {
    id: number
    name: string
    avatar?: string
    status: string
}

interface Props {
    user: User
}

export const UserListItem = ({ user }: Props) => {
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
        </Button>
    )
}
