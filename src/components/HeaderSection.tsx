import { useState, useRef, useEffect } from "react";
import { BsFillFileEarmarkTextFill, BsCloudCheck } from "react-icons/bs";
import "../styles.css";
import { Button } from "@material-tailwind/react";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineVideoCamera,
  AiFillCaretDown,
} from "react-icons/ai";
import { MdDriveFileMoveOutline, MdOutlineMessage } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//import TextEditor from "./TextEditor";

function HeaderSection() {
  const [active, setActive] = useState("");
  const handlestar = (star: string) => {
    setActive(star);
  };

  const renderStarContent = () => {
    switch (active) {
      case "star":
        return <AiFillStar size={30} className="text-blue-600 text-xl p-2  " />;
      default:
        return <AiOutlineStar size={30} className="text-black text-xl p-2  " />;
    }
  };

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // Ensure the correct type for the ref

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = inputValue ? "auto" : "100%";
    }
  }, [inputValue]);

  return (
    <div>
      <header className=" flex justify-between items-center p-3 pb-1 z-50">
        <BsFillFileEarmarkTextFill size={40} className="text-blue-500 " />
        <div className="flex-grow px-2 ">
          <div className="flex flex-rowfont-semibold text-gray-500 text-xl">
            <div>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Untitled Document"
              />
            </div>
            <button
              className={`flex text-xs items-center rounded-full hover:bg-gray-200  transition-colors duration-300  ${
                active === "calendar"
              }`}
              onClick={() => handlestar("star")}
            >
              {renderStarContent()}
            </button>
            <button className="flex text-xs items-center rounded-full hover:bg-gray-200  transition-colors duration-300">
              <MdDriveFileMoveOutline
                size={30}
                className="text-black text-xl p-2 "
              />
            </button>
            <button className="flex text-xs items-center rounded-full hover:bg-gray-200  transition-colors duration-300">
              <BsCloudCheck size={30} className="text-black text-xl p-2 " />
            </button>
          </div>
          <div className="flex items-center text-m space-x-1 -ml-1 h-8 text-gray-900">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Extensions</p>
            <p className="option">Help</p>
          </div>
        </div>
        <button className="flex text-xs items-center rounded-full hover:bg-gray-200  transition-colors duration-300 px-2">
          <RxCountdownTimer size={35} className="text-black text-xl p-2 " />
        </button>
        <button className=" flex text-xs items-center rounded-full hover:bg-gray-200  transition-colors duration-300 px-2">
          <MdOutlineMessage size={35} className="text-black text-xl p-2 " />
        </button>
        <button className=" flex text-xs items-center rounded-full hover:bg-gray-200  transition-colors duration-300 px-2">
          <AiOutlineVideoCamera size={35} className="text-black text-xl p-2 " />
          <AiFillCaretDown size={20} className="text-black text-xl p-1 " />
        </button>

        <Button className=" bg-sky-200 rounded-full hover:bg-blue-200 hover:shadow-lg py-1.5 px-6 text-slate-700 text-base font-medium">
          <LockOutlinedIcon
            sx={{ fontSize: 28 }}
            className="font-bold pr-2 pb-0.5"
          />
          Share
        </Button>
        <div className=" bg-white hover:bg-gray-400 rounded-full h-12 w-12 ml-2 transition-colors duration-300 ">
          <img
            className=" cursor-pointer rounded-full h-9 w-9 mt-1 ml-1 "
            src="https://wallpapers-clan.com/wp-content/uploads/2022/02/demon-slayer-tanjiro-pfp-2.jpg"
          />
        </div>
      </header>
    </div>
  );
}

export default HeaderSection;
