import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(
    () =>
      // window.innerWidth > 600 &&
      window.addEventListener("scroll", () =>
        setShowButton(window.pageYOffset > 300)
      ),
    []
  );

  return (
    showButton && (
      <button
        className="fixed z-10 p-3 bg-primary-400 rounded-full shadow-md bottom-10 right-10 animate-bounce"
        onClick={scrollToTop}
        type="button"
      >
        <BsArrowUpShort color="black" fontSize={32} />
      </button>
    )
  );
}
