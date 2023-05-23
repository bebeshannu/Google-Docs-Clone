import React from "react";

const CalendarContent: React.FC = () => {
  return (
    <div className=" fixed top-36 right-16 w-80 h-80 z-60">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=0893d25175abe899de816705a2d7e8d9e21fcf3017041973358bdc8b52439a71%40group.calendar.google.com&ctz=Asia%2FKolkata"
        className="w-full h-full"
      />
    </div>
  );
};

export default CalendarContent;
