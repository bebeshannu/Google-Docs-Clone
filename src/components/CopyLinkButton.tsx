import { useState } from "react";

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
        <button onClick={handleCopyLink}>Copy Link</button>
      )}
    </div>
  );
}

export default CopyLinkButton;
