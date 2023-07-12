import { useState } from "react";
import blueCheck from "../../assets/icons/blue-check.svg";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="hidden md:block">
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={isToggled}
            onChange={() => setIsToggled(!isToggled)}
          />
          <div className={`block h-[22px] w-10 rounded-[22px] transition-all duration-300 ease-in-out ${isToggled ? "bg-customBlue" : "bg-customLightGray"}`}></div>
          <div
            className={`absolute left-[2px] top-[2px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white transition-all duration-300 ease-in-out ${
              isToggled ? "translate-x-full bg-blue-500" : ""
            }`}
          >
            {isToggled && <img src={blueCheck} className="h-3 w-3" />}
          </div>
        </div>
      </label>
    </div>
  );
}

export default Toggle;

