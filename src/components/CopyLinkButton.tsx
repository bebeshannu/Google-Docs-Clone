import { useState } from "react";
import { BiPaperclip } from "react-icons/bi";

interface CopyLinkButtonProps {
  link: string;
}

function CopyLinkButton({ link }: CopyLinkButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div>
      {isCopied ? (
        <p>Link copied!</p>
      ) : (
        <button className="flex flex-row" onClick={handleCopyLink}>
          <BiPaperclip className="mt-1 mr-2" />
          Copy Link
        </button>
      )}
    </div>
  );
}

export default CopyLinkButton;
