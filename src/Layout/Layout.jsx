import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";
import logo from "../assets/logo.jpg";
import profile from "../assets/profile.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SideBar from "../Components/SideBar/SideBar";
import BottomMenus from "../Components/BottomMenu";
import SearchIcon from "@mui/icons-material/Search";

import share from "../assets/share.svg"
import home1 from "../assets/home1.svg"
import exp from "../assets/exp.svg"

import { openModal, closeModal } from "../reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import ModalAdd from "../Components/ModalAdd";



import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { axiosRequest, getToken } from "../utils/axiosRequest";

const Layout = () => {
  const [users, setUsers] = useState([]);
  const modal = useSelector(({ modal }) => modal.modal1);
  const dispatch = useDispatch();

  const getUsers = async () => {
    try {
      const { data } = await axiosRequest.get("users");
      setUsers(data);
    } catch (e) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleClickOpen = () => {
    dispatch(openModal(true));
  };
  const handleClose = () => {
    dispatch(closeModal(false));
  };

  return (
    <div>
      <div className="lg:hidden fixed top-0 z-10 py-[5px] px-4 bg-[#fff] w-[100%] flex  justify-between items-center border-b">
        <Link to={"/layout"}>
        <img src={logo} alt="" className="w-[130px] " />
        </Link>

        <div className="flex gap-4">
          <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
          <Link to={"messages"}>
          <img src={share} alt="" className="w-[30px]"/>
            {/* <SendIcon sx={{ fontSize: "30px" }} /> */}
          </Link>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 z-10 p-2 bg-[#fff] w-[100%] flex justify-between items-center border-t">
        <div className="flex  justify-around items-center gap-4 w-[100%]">
          <Link to={"/layout"}>
          <img src={home1} alt="" className="py-[3px]"/>
            {/* <HomeIcon sx={{ fontSize: "30px" }} /> */}
          </Link>
          <SearchIcon sx={{ fontSize: "30px" }} />

          <AddBoxOutlinedIcon
            onClick={handleClickOpen}
            sx={{ fontSize: "30px" }}
          />
          <Link to={"reels"}>
          <OndemandVideoIcon sx={{ fontSize: "30px" }} />
          </Link>

          <Link to={"profile"}>
                <img
                  src={profile}
                  alt=""
                  className="w-[25px] h-[25px] rounded-[50px]"
                />
            </Link>
        </div>
      </div>

      <div className="navbar  sm:pt-6 lg:pt-0">
        <div className="w-[16%] px-4 border-r h-[100vh] fixed left-0  bg-[#fff] z-10 sm:hidden lg:block">
          <Link to={"/"}>
            <div>
              <img src={logo} alt="" className="w-[110px] py-8" />
            </div>
          </Link>
          <ul className="">
            <Link to={"/"}>
              <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
                {/* <HomeIcon sx={{ fontSize: "30px" }} />  */}
                <img src={home1} alt="" className="py-[3px]"/> Home
              </li>
            </Link>
            <SideBar />
            <Link to={"explore"}>
              <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
                {/* <ExploreIcon sx={{ fontSize: "30px" }} /> */}
                <img src={exp} alt="" className="w-[15%]"/>
                Explore
              </li>
            </Link>
            <Link to={"reels"}>
            <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <OndemandVideoIcon sx={{ fontSize: "30px" }} />
              Reels
            </li>
            </Link>
            <Link to={"messages"}>
              <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
                {/* <SendIcon sx={{ fontSize: "30px" }} /> */}
                <img src={share} alt="" className="w-[15%]"/>
                Messages
              </li>
            </Link>
            <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
              Notifications
            </li>
            <ModalAdd />

            <Link to={"profile"}>
              <li className="flex items-center gap-4 py-[12px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              {users.map((el) =>
                    el.id == +getToken().sub ? (
                      <div>
                          <img
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            el.avatar
                          }`}
                          alt=""
                          className="w-[25px] h-[25px] rounded-[50px]"
                        />

                      </div>
                    ) : null
                  )}
                Profile
              </li>
            </Link>
          </ul>
          <BottomMenus />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
