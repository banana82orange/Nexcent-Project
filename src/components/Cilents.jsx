import React from "react";
import clientImgLogo_1 from "../assets/img/clients/client-01.png";
import clientImgLogo_2 from "../assets/img/clients/client-02.png";
import clientImgLogo_3 from "../assets/img/clients/client-03.png";
import clientImgLogo_4 from "../assets/img/clients/client-04.png";
import clientImgLogo_5 from "../assets/img/clients/client-05.png";
import clientImgLogo_6 from "../assets/img/clients/client-06.png";
import clientImgLogo_7 from "../assets/img/clients/client-07.png";

function Cilents() {
  const clientLogos = [
    { img: clientImgLogo_1 },
    { img: clientImgLogo_2 },
    { img: clientImgLogo_3 },
    { img: clientImgLogo_4 },
    { img: clientImgLogo_5 },
    { img: clientImgLogo_6 },
    { img: clientImgLogo_7 },
  ];
  return (
    <div className="container md-auto max-w-[1920] py-10 text-center items-center justify-center mx-auto">
      <div className="text-[2.3rem] font-semibold text-[#4D4D4D]">
        Our Cilents
      </div>
      <div className="text-[1.5rem] font-semibold text-[#4D4D4D]">
        we have been working with some Fortune 500+ cilent
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0px,200px))] gap-y-5 justify-center justify-items-center my-10">
        {clientLogos.map((item) => (
          <div className="flex flex-row w-full items-center justify-center ">
            <img src={item.img}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cilents;
