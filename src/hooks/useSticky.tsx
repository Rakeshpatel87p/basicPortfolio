import { useEffect, useState, useRef } from "react";

interface stickyReturnVal {
  isSticky: boolean;
  element: React.MutableRefObject<string>;
}

function useSticky(): stickyReturnVal {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", () => handleScroll());
    };
  }, [handleScroll]);

  return { isSticky, element };
}

export default useSticky;
