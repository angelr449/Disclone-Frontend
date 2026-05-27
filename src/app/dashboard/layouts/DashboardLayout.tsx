import { Outlet } from "react-router"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Users } from "lucide-react"

export const DashboardLayout = () => {
  return (
    <div className="h-screen bg-[#313338] text-white">

      {/* Topbar */}
      <div className="flex items-center h-12 px-4 border-b border-[#1e1f22] bg-[#2b2d31] ">

        {/* Friends Icon */}
        <div className="flex items-center gap-2 pr-4">
          <Users size={20} />
          <span className="font-semibold text-sm">
            Friends
          </span>
        </div>

        <Separator
          orientation="vertical"
          className="h-6 bg-[#4e5058]"
        />

        {/* Navigation */}
        <Tabs defaultValue="online" className="ml-4">

          <TabsList className="bg-transparent gap-2">

            <TabsTrigger
              value="online"
              className="text-white data-[state=active]:bg-[#434552] data-[state=active]:text-white rounded-sm"
            >
              Online
            </TabsTrigger>

            <TabsTrigger
              value="all"
              className="text-white data-[state=active]:bg-[#434552] data-[state=active]:text-white rounded-sm"
            >
              All
            </TabsTrigger>

            <TabsTrigger
              value="pending"
              className="text-white data-[state=active]:bg-[#434552] data-[state=active]:text-white rounded-sm"
            >
              Pending
            </TabsTrigger>

            <TabsTrigger
              value="add-friend"
              className=" text-white bg-green-600 hover:bg-green-700  rounded-sm data-[state=active]:bg-green-700 data-[state=active]:text-white"
            >
              Add Friend
            </TabsTrigger>

          </TabsList>

        </Tabs>
      </div>

      {/* Content */}
      <div className="p-4">
        <Outlet />
      </div>

    </div>
  )
}