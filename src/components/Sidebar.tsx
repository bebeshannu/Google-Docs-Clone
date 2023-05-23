import React, { useState } from "react";
import { TiUser, TiPlus } from "react-icons/ti";
import { BsDashLg } from "react-icons/bs";
import { SiGooglekeep, SiGooglecalendar, SiGooglemaps } from "react-icons/si";
import { TaskAlt } from "@mui/icons-material";

import CalendarContent from "../components/CalendarContent";
import KeepContent from "../components/KeepContent";
import TasksContent from "../components/TasksContent";
import ContactsContent from "../components/ContactsContent";
import MapsContent from "../components/MapsContent";

const Sidebar: React.FC = () => {
  const [activeApp, setActiveApp] = useState("");

  const handleAppClick = (app: string) => {
    setActiveApp(app);
  };

  const renderAppContent = () => {
    switch (activeApp) {
      case "calendar":
        return <CalendarContent />;
      case "keep":
        return <KeepContent />;
      case "tasks":
        return <TasksContent />;
      case "contacts":
        return <ContactsContent />;
      case "maps":
        return <MapsContent />;
      case "addon":
        return null;
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white-200 h-30 w-13 z-50 fixed top-10 right-0">

      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16"></div>
        <div className="flex-grow ">
          <ul className="flex flex-col space-y-3 p-2 pt-8 ">
            <li>
              <button
                className={`flex text-xs  rounded-full hover:bg-gray-200  transition-colors duration-300  ${
                  activeApp === "calendar" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleAppClick("calendar")}
              >
                <SiGooglecalendar
                  size={40}
                  className="text-blue-400 text-xl p-2  "
                />
              </button>
            </li>
            <li>
              <button
                className={`flex items-center rounded-full hover:bg-gray-200  transition-colors duration-300  ${
                  activeApp === "keep" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleAppClick("keep")}
              >
                <SiGooglekeep
                  size={40}
                  className="text-yellow-300 text-xl  p-2"
                />
              </button>
            </li>
            <li>
              <button
                className={`flex items-center rounded-full hover:bg-gray-200  transition-colors duration-300  ${
                  activeApp === "tasks" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleAppClick("tasks")}
              >
                <TaskAlt
                  sx={{ fontSize: 40 }}
                  className="text-blue-500 text-sm  p-2 mr-0 "
                />
              </button>
            </li>
            <li>
              <button
                className={`flex items-center rounded-full hover:bg-gray-200  transition-colors duration-300 ${
                  activeApp === "contacts" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleAppClick("contacts")}
              >
                <TiUser size={40} className="text-blue-500 text-xl  p-2" />
              </button>
            </li>
            <li>
              <button
                className={`flex items-center rounded-full hover:bg-gray-200  transition-colors duration-300 ${
                  activeApp === "maps" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleAppClick("maps")}
              >
                <SiGooglemaps
                  size={40}
                  className="text-green-500 text-xl  p-2"
                />
              </button>
            </li>
            <BsDashLg size={40} className="  text-gray-300 ">
              {" "}
            </BsDashLg>
            <li>
              <button
                className={`flex items-center rounded-full hover:bg-gray-200 my-3 transition-colors duration-300  ${
                  activeApp === "addon" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleAppClick("addon")}
              >
                <TiPlus size={40} className="text-gray-500 text-l   p-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="">{renderAppContent()}</div>
    </nav>
  );
};

export default Sidebar;
