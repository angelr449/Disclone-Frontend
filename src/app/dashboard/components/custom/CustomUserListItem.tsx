import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar"
import { Button } from "../../../../components/ui/button"

interface Props {
    name: string;
    avatar?: string;
    status: string;

}

export const CustomUserListItem = ({ name, avatar, status }: Props) => {
    return (
        <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3  py-2 h-auto hover:bg-gray-700 hover:text-white"
        >
            <Avatar>
                <AvatarImage src={avatar} />

                <AvatarFallback>
                    {name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start">
                <span>{name}</span>
                <span className="text-xs   text-gray-200">
                    {status}
                </span>
            </div>
        </Button>
    )
}
