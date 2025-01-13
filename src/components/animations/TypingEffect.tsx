import React, { useEffect, useState, useRef } from "react";

interface TypingEffectProps {
  children: React.ReactNode;
  speed?: number; // Speed of typing in milliseconds
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  children,
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const textToType = useRef<string>(""); // Store the extracted text
  const currentIndex = useRef<number>(0);
  const elements = useRef<React.ReactNode[]>([]); // Store elements to render

  // Function to extract text content from React elements while preserving structure
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") {
      return node;
    } else if (React.isValidElement(node) && node.props.children) {
      return React.Children.toArray(node.props.children)
        .map(extractText)
        .join("");
    }
    return "";
  };

  // Function to clone elements with the typing effect
  const cloneElementWithTyping = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.slice(0, currentIndex.current);
    } else if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        {},
        React.Children.map(node.props.children, cloneElementWithTyping)
      );
    }
    return node;
  };

  // Extract the text from children when the component mounts
  useEffect(() => {
    // Ensure the text to type is clean and without extra elements
    textToType.current = extractText(children);
  }, [children]);

  // Trigger the typing effect when the component is mounted
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex.current < textToType.current.length) {
        setDisplayedText(
          (prev) => prev + textToType.current[currentIndex.current]
        );
        currentIndex.current += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Cleanup the interval on unmount
    return () => clearInterval(typingInterval);
  }, [speed]);

  // Return the children with typing effect
  return <div>{cloneElementWithTyping(children)}</div>;
};

export default TypingEffect;
