import React from "react";
import icon01 from "../assets/img/icon-04.png";
import icon02 from "../assets/img/icon-05.png";
import icon03 from "../assets/img/icon-06.png";
import icon04 from "../assets/img/icon-07.png";
function Helping() {
  const data = [
    { icon: icon01, number: "2,245,341", text: "Members" },
    { icon: icon02, number: "46,328", text: "Clubs" },
    { icon: icon03, number: "828,867", text: "Event Bookings" },
    { icon: icon04, number: "1,926,436", text: "Payments" },
  ];
  return (
    <div className="bg-[#F5F7FA]">
      <div className=" h-auto container mx-auto max-w-[1920] p-10 grid grid-cols-1 md:grid-cols-2 md:justify-between md:items-center">
        <div>
          <div className="text-[2.3rem] font-semibold text-[#4D4D4D]">
            Helping a local{" "}
          </div>
          <div className="text-[2.3rem] font-semibold text-[#4CAF4F]">
            business reinvent itself
          </div>
          <div className="text-[1.0rem] font-semibold text-[#4D4D4D] mb-10">
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className="container  mx-auto grid grid-cols-2 gap-4">
          {data.map((dataE) => (
            <div className="flex items-center gap-4">
              <img className="w-12 h-12" src={dataE.icon}></img>
              <div className="my-2 ">
                <div className="text-[1.8rem] text-[#4D4D4D]">
                  {dataE.number}
                </div>
                <div className="text-[1.5rem] text-[#4D4D4D]">{dataE.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Helping;
