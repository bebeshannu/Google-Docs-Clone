//HEADERSECTION

//Importing all necessary components,icons,files
import { useState } from "react";
import { BsFillFileEarmarkTextFill, BsCloudCheck } from "react-icons/bs";
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
import "../styles.css";

//Tried to implement wysiwyg editor but wasn't compatible so went ahead with Quill

function HeaderSection() {
  //To setState for Star aka Bookmark Icon on click
  const [active, setActive] = useState("");
  const handlestar = (star: string) => {
    setActive(star);
  };

  //If clicked swap star aka Bookmark icon with filled blue one
  const renderStarContent = () => {
    switch (active) {
      case "star":
        return <AiFillStar size={32} className="text-blue-600 text-xl p-2  " />;
      default:
        return <AiOutlineStar size={32} className="text-black text-xl p-2  " />;
    }
  };
  return (
    <div>
      <header className=" flex headerr justify-between items-center p-3 pb-1 z-50">
        {/*Docs Icon */}
        <BsFillFileEarmarkTextFill size={40} className="text-blue-500 " />
        {/*Document Name */}
        <div className="flex-grow px-2 ">
          <div className="flex flex-row  text-xl">
            <input
              type="text"
              placeholder="Untitled document"
              className="textinput" //Defined in styles.css
            />
            {/*Star aka Bookmark */}

            <button
              className={`iconstyle  ${active === "calendar"}`}
              onClick={() => handlestar("star")}
            >
              {renderStarContent()} {/*Render the star icon based on state */}
            </button>
            {/*MOve Button */}
            <button className="iconstyle">
              <MdDriveFileMoveOutline
                size={32}
                className="text-black text-xl p-2 "
              />
            </button>
            {/*See Document Status Button */}
            <button className="iconstyle">
              <BsCloudCheck size={32} className="text-black text-xl p-2 " />
            </button>
          </div>
          {/*Tool Bar */}
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
        <div className="flex flex-row space-x-3">
          {/*See Last Edit Button*/}
          <button className="iconstyle ">
            <RxCountdownTimer size={35} className="text-black text-xl p-2 " />
          </button>
          {/*See Comments Button */}
          <button className=" iconstyle ">
            <MdOutlineMessage size={35} className="text-black text-xl p-2 " />
          </button>
          {/*Call or Present Button */}
          <button className=" iconstyle ">
            <AiOutlineVideoCamera
              size={35}
              className="text-black text-xl p-2 "
            />
            <AiFillCaretDown size={20} className="text-black text-xl p-1 " />
          </button>
        </div>

        <div className="flex flex-row space-x-2">
          <div className="pl-2">
            {/*Share Button */}
            <Button className=" bg-sky-200 rounded-full hover:bg-blue-200 hover:shadow-lg py-1.5 px-6 text-slate-700 text-base font-medium">
              <LockOutlinedIcon
                sx={{ fontSize: 28 }}
                className="font-bold pr-3 pb-0.5"
              />
              Share
            </Button>
          </div>
          {/*Profile Icon */}
          <div className="iconstyle ">
            <img
              className=" cursor-pointer rounded-full h-9 w-9 mt-1 ml-1 "
              src="https://wallpapers-clan.com/wp-content/uploads/2022/02/demon-slayer-tanjiro-pfp-2.jpg"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderSection;
