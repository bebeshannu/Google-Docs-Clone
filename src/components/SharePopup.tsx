import React from "react";
import CopyLinkBUtton from "../components/CopyLinkButton";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
interface SharePopupProps {
  onClose: () => void;
}

const SharePopup: React.FC<SharePopupProps> = ({ onClose }) => {
  const handleDoneClick = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-1/3 min-w-[33.333333%] max-w-[33.333333%]">
        <div className="p-4">
          <div className="flex mb-5">
            <div>
              <p className="text-2xl font-semibold">Share Document</p>
            </div>
            <div className="flex ml-auto gap-4">
              <div>
                <AiOutlineQuestionCircle className="m-1" size={19} />
              </div>
              <div>
                <FiSettings className="m-1" size={19} />
              </div>
            </div>
          </div>
          <input
            type="text"
            className=" bg-transparent border-2 p-2 w-full border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Add people and groups"
          />
          <p className="mb-4 mt-4 text-base font-medium">People with access</p>
          <div className="flex -m-4 p-4 hover:bg-gray-200">
            <div>
              <img
                src="https://wallpapers-clan.com/wp-content/uploads/2022/02/demon-slayer-tanjiro-pfp-2.jpg"
                className="inline-block relative object-cover object-center rounded-full w-8 h-8"
                alt="Profile"
              />
            </div>
            <div className="ml-3">
              <p className="text-m font-semibold">Shaina Jyothica (You)</p>
              <p className="text-xs ml-1 -mt-0.5 text-gray-950 font-normal">
                jyothicashaina27@gmail.com
              </p>
            </div>
            <div className="ml-auto mr-4 font-normal">
              <p>Owner</p>
            </div>
          </div>
          <p className="mb-4 mt-6 text-base font-medium">General access</p>
          <div className=" flex flex-row -m-4 hover:bg-gray-200 ">
            <div className="flex p-2 mt-2 ml-2 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300">
                <MdLockOutline size={20} />
              </div>
              <div className="ml-3">
                <div className="flex flex-row">
                  <p className="text-sm font-semibold">Restricted</p>
                  <AiFillCaretDown className="m-1" size={13} />
                </div>
                <p className="text-xs font-normal">
                  Only people with access can open with the link
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div>
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] rounded-full flex items-center gap-2 normal-case"
                type="button"
              >
                <CopyLinkBUtton link="https://google-docs-clone-nine-mu.vercel.app/" />
              </button>
            </div>
            <div className="ml-auto">
              <button
                onClick={handleDoneClick}
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full flex items-center gap-2 normal-case"
                type="button"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
