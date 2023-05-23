import React from "react";

const TasksContent: React.FC = () => {
  return (
    <div className=" fixed top-36 right-16 w-80 h-80 z-60">
      <iframe
        src="https://tasks.google.com/"
        className="w-full h-full"
        title="Google Tasks"
      />
    </div>
  );
};

export default TasksContent;
