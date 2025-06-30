import { CgProfile } from "react-icons/cg";
import Input from "./Input";

const Header = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;

  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="bg-[#2d3748] h-[75vh] w-[30vw] shadow-xl shadow-black`">
      <div className="flex justify-between pr-10">
        <div className="text-[#d1d5db] pl-9">
          <h1 className=" text-3xl pt-9 mb-3 font-bold">Hey Steve</h1>
          <span className="text-base">
            {formattedDate}
            <span className="ml-4">{time}</span>
          </span>
        </div>
        <div className=" text-5xl text-[#d1d5db] pt-9">
          <CgProfile />
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Header;
