import { useState } from "react";

interface ExpandableTextProps {
  maxCharacters?: number;
  children: string;
}

const ExpandableText = ({
  maxCharacters = 10,
  children,
}: ExpandableTextProps) => {
  const [isExpanded, setExpandedStatus] = useState(false);

  const shortVersion = `${children.substring(0, maxCharacters)}...`;

  return (
    <>
      <p>{isExpanded ? children : shortVersion}</p>
      <button onClick={() => setExpandedStatus(!isExpanded)}>
        Show {isExpanded ? "less" : "more"}
      </button>
    </>
  );
};

export default ExpandableText;
