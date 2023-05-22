import React from "react";

const ContactsContent: React.FC = () => {
  return (
    <div className=" fixed top-36 right-16 w-80 h-80 z-60">
      <iframe
        src="https://contacts.google.com/"
        className="w-full h-full"
        title="Google Contacts"
      />
    </div>
  );
};

export default ContactsContent;
