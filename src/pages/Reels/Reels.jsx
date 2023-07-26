import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import msgg from "../../assets/mess.svg";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import share from "../../assets/share.svg";
import ModalPost from "../../Components/ModalPost";

import img3 from "../../assets/uspekh.jpg";

export default function Reels() {
  return (
    <div className="w-[100%]">
      <div className="container m-[0_auto] ">
        <div className=" lg:ml-[16%] flex flex-col gap-6 justify-center items-center py-[20px]">
          <div className="lg:w-[35%] sm:w-[100%] flex items-end relative">
            <div className="relative">
              <video
                loop
                muted
                autoPlay
                controls
                src={`https://cdn.mix.com.tj/download/video/9/30/621357eea16b6.mp4`}
                className="h-[650px] rounded-[10px]"
              ></video>
              {/* <img src={img3} alt="" className="h-[650px] rounded-[10px]" /> */}
              <div className=" absolute bottom-10 left-6">
                <div className="flex items-center gap-2 text-[#fff]">
                  <img
                    src={img3}
                    alt=""
                    className="rounded-[50%] w-[40px] h-[40px]"
                  />
                  <p className="font-[600]">Zakon uspekha</p>
                  <div className="bg-[#ffffff] h-[1vh] w-[1vh] rounded-[50px]"></div>
                  <p className="font-[600]">Follow</p>
                </div>
                <p className="text-[#fff] py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis nesciunt doloremque!{" "}
                </p>
              </div>
            </div>
            <div className="px-4 sm:absolute lg:relative sm:right-0 sm:bottom-[100px] lg:sm:text-[#000] sm:text-[#fff]">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <FavoriteBorderIcon />
                  <p>68.3K</p>
                </div>
                <div className="text-center">
                  <img src={msgg} alt="" className="w-[50%] m-auto bg" />
                  <p>176</p>
                </div>

                <img src={share} alt="" className="w-[70%] m-auto bg" />

                <BookmarkBorderOutlinedIcon
                  sx={{ fontSize: "30px", margin: "auto" }}
                />
                <ModalPost />
                <img
                  src={img3}
                  alt=""
                  className="w-[25px] rounded-[7px] m-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[35%] sm:w-[100%]  flex items-end relative">
            <div className="relative">
              <video
                muted
                controls
                src={`https://cdn.mix.com.tj/download/video/9/30/621357eea16b6.mp4`}
                className="h-[650px] rounded-[10px]"
              ></video>
              {/* <img src={img2} alt="" className="h-[650px] rounded-[10px]" /> */}
              <div className=" absolute bottom-10 left-6">
                <div className="flex items-center gap-2 text-[#fff]">
                  <img
                    src={img3}
                    alt=""
                    className="rounded-[50%] w-[40px] h-[40px]"
                  />
                  <p className="font-[600]">Zakon uspekha</p>
                  <div className="bg-[#ffffff] h-[1vh] w-[1vh] rounded-[50px]"></div>
                  <p className="font-[600]">Follow</p>
                </div>
                <p className="text-[#fff] py-4">
                  learn to speak faster in english asdAssdd{" "}
                </p>
              </div>
            </div>
            <div className="px-4 sm:absolute lg:relative sm:right-0 sm:bottom-[100px] lg:sm:text-[#000] sm:text-[#fff]">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <FavoriteBorderIcon />
                  <p>68.3K</p>
                </div>
                <div className="text-center">
                  <img src={msgg} alt="" className="w-[50%] m-auto bg" />
                  <p>176</p>
                </div>

                <img src={share} alt="" className="w-[70%] m-auto bg" />

                <BookmarkBorderOutlinedIcon
                  sx={{ fontSize: "30px", margin: "auto" }}
                />
                <ModalPost />
                <img
                  src={img3}
                  alt=""
                  className="w-[25px] rounded-[7px] m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
