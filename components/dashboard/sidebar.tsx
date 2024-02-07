import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdCreate,
} from "react-icons/md";
import { MenuLinks } from "./menuLinks";
import Image from "next/image";

export const Sidebar = () => {
  const menuItems = [
    {
      title: "Volunteers",
      list: [
        {
          title: "Approval",
          path: "/dashboard/approval",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
      ],
    },
    {
      title: "Events",
      list: [
        {
          title: "Create Events",
          path: "/dashboard/createEvents",
          icon: <MdCreate />,
        },
        {
          title: "Past Events",
          path: "/dashboard/pastEvents",
          icon: <MdWork />,
        },
        {
          title: "Upcoming Events",
          path: "/dashboard/upcomingEvents",
          icon: <MdAnalytics />,
        },
      ],
    },
  ];
  return (
    <div className="sticky top-7 border-rose-600 border s">
      <div className="bg-rose-300 opacity-30 absolute w-full h-full top-0 z-0">
        {" "}
      </div>
      <div className="ml-3 p-3 ">
        <div className="relative z-10">
          <div className="flex gap-5 justify-start items-center mt-3 mb-6 ">
            <Image
              src="/noavatar.png"
              alt="png"
              width={50}
              height={50}
              className="rounded-sm"
            />
            <div className="flex flex-col gap-1">
              <span className="font-bold">Username</span>
              <span className="text-sm text-center text-red-700 font-bold">
                Role
              </span>
            </div>
          </div>
          <ul>
            {menuItems.map((cat) => {
              return (
                <li key={cat.title}>
                  <span className="text-rose-600 font-bold">{cat.title}</span>
                  {cat.list.map((item) => (
                    <MenuLinks item={item} key={item.title} />
                  ))}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
