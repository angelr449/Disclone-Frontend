import { Link, Outlet, useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";
import { usePresence } from "../pages/friends/hooks/usePresence";

export const DashboardLayout = () => {
  const location = useLocation();
  usePresence();

  return (
    <div className="h-screen bg-[#313338] text-white">
      {/* Topbar */}
      <div className="flex items-center h-12 px-4 border-b border-[#1e1f22] bg-[#2b2d31]">
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

        <Tabs
          value={location.pathname}
          className="ml-4"
        >
          <TabsList className="bg-transparent gap-2">

            <TabsTrigger
              value="/"
              asChild
              className="text-white data-[state=active]:bg-[#434552] data-[state=active]:text-white rounded-sm"
            >
              <Link to="/">
                Online
              </Link>
            </TabsTrigger>

            <TabsTrigger
              value="/friends"
              asChild
              className="text-white data-[state=active]:bg-[#434552] data-[state=active]:text-white rounded-sm"
            >
              <Link to="/friends">
                All
              </Link>
            </TabsTrigger>

            <TabsTrigger
              value="/friends/pending"
              asChild
              className="text-white data-[state=active]:bg-[#434552] data-[state=active]:text-white rounded-sm"
            >
              <Link to="/friends/pending">
                Pending
              </Link>
            </TabsTrigger>

            <TabsTrigger
              value="/friends/add"
              asChild
              className="text-white bg-green-600 hover:bg-green-700 rounded-sm data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              <Link to="/friends/add">
                Add Friend
              </Link>
            </TabsTrigger>

          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};