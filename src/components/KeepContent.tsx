import React from "react";

const KeepContent: React.FC = () => {
  return (
    <div className=" fixed top-36 right-16 w-80 h-80 z-60">
      <iframe
        src="https://keep.google.com/"
        className="w-full h-full"
        title="Google Keep"
      />
    </div>
  );
};

export default KeepContent;
