import React from "react";

const Home = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;

  return (
    <div className="bg-[#0f172a] w-screen h-screen flex items-center justify-center">
      <div className="bg-[#2d3748] h-[75vh] w-[30vw] shadow-xl shadow-black">
        <h1 className="text-[#d1d5db] text-3xl p-9 font-bold">Hey Steve</h1>
        <span className="text-[#d1d5db]">{formattedDate}</span>
      </div>
    </div>
  );
};

export default Home;
