import React from "react";

const MapsContent: React.FC = () => {
  return (
    <div className=" fixed top-36 right-16 w-80 h-80 z-60">
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=INDIA&amp;t=k&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="absolute inset-3 w-full h-full"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default MapsContent;
