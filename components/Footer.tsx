import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="hidden sm:block bg-black pt-16 pb-16 text-center text-white text-sm">
      <a href="#home" className="bg-white text-black px-4 py-2 font-bold mt-60px inline-block hover:bg-gray-300 transition-colors duration-200">
        <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
        To the top
      </a>
      {/* <p className="mt-3 text-sm text-gray-400">&copy; {new Date().getFullYear()} Lance Ma. All rights reserved.</p> */}
    </footer>
  );
}
