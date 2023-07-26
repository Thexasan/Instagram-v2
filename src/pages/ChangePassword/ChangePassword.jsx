import React from "react";
import meta from "../../assets/meta.svg";
import prof from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="w-[100%] sm:py-8 lg:py-0 overflow-hidden">
      <div className="container m-[0_auto]">
        <div className="lg:w-[100%] sm:w-[90%] lg:ml-[16%]">
          <div className="lg:p-[40px] sm:p-2">
            <div className="lg:flex   lg:border  lg:mr-[250px]">
              <div className="lg:w-[25%] lg:border-r flex flex-col justify-between">
                <div>
                <Link to={"/editProfile"}>
                  <p className="p-4 text-[16px] cursor-pointer hover:bg-[#f1f1f1]  ">
                    Edit prifile
                  </p>
                    </Link>
                    <Link to={"/changePassword"}>
                  <p className="p-4 text-[16px] cursor-pointer hover:bg-[#f1f1f1] border-l-[3px] border-[#000]">
                    Change password
                  </p>
                  </Link>
                </div>

                <div className="lg:p-10 sm:py-8">
                  <img src={meta} alt="" />
                  <p className="text-[#0095F6] text-[20px] py-1">
                    Accounts center
                  </p>
                  <p className="text-[#818181]">
                    Control settings for connected experiences on Instagram, the
                    Facebook app, and Messenger, including sharing stories and
                    posts, and logging in.
                  </p>
                </div>
              </div>

              <div className=" py-[30px] lg:pl-[100px]">
                <div className="flex  items-center lg:gap-[60px] sm:gap-4 py-2 lg:pl-[50px]">
                  <img
                    src={prof}
                    alt=""
                    className="w-[60px] h-[60px] rounded-[100px]"
                  />
                  <div>
                    <p className="text-[20px]">thexasan_</p>
                  </div>
                </div>

                <div className="flex  lg:justify-end  sm:justify-center items-center lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600] text-right">Previous <br /> password</p>
                  <div>
                    <input
                      type="text"
                      className=" border py-[5px] px-2 lg:w-[500px] sm:w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex  lg:justify-end  sm:justify-center  items-center lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600] text-right">New password</p>
                  <div>
                    <input
                      type="text"
                      className=" border py-[5px] px-2 lg:w-[500px] sm:w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex  lg:justify-end  sm:justify-center  items-center lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600] text-right">Confirm new <br /> password</p>
                  <div>
                    <input
                      type="text"
                      className=" border py-[5px] px-2 lg:w-[500px] sm:w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex  justify-end items-start lg:gap-[60px] pb-2 pt-8">
                  <p className="text-[18px] font-[600]"></p>
                  <div className="w-[500px] ">
                    <button className="text-[#fff] bg-[#0095F6] py-[5px] px-6 rounded-[5px] mb-8">
                    Change password
                    </button>
                    <p className="text-[#0095F6]">
                    You forgot your password?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
