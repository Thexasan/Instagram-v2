import React, { useEffect, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link, useParams } from "react-router-dom";
import { axiosRequest, getToken } from "../../utils/axiosRequest";
import ExploreGrid from "../../Components/Explore";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import cam from "../../assets/cam.jpg"

export default function UserProfile() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [cnt, setCnt] = useState(null)
  console.log(cnt);

  const userIdFromParam = useParams().userId;

  const getPosts = async () => {
    try {
      const { data } = await axiosRequest.get("posts");
      setPosts(data);
    } catch (err) {}
  };

  const getUsers = async () => {
    try {
      const { data } = await axiosRequest.get("users");
      setUsers(data);
    } catch (e) {}
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <div className="lg:ml-[16%] overflow-hidden sm:pt-6 lg:pt-0">
      <div className="container m-[0_auto]">
        <div className="lg:w-[75%] sm:w-[90%] m-auto">
          <div className=" border-b py-[40px] w-[100%] ">
            <div className="flex items-center justify-center lg:pr-[100px] sm:pr-0 sm:gap-4 lg:gap-[100px] ">
              {users.map((el) =>
                el.id == userIdFromParam ? (
                  <div>
                    <img
                      src={`${import.meta.env.VITE_APP_FILES_URL}${el.avatar}`}
                      alt=""
                      className=" lg:w-[160px] lg:h-[160px]  sm:w-[60px] sm:h-[60px] rounded-[50%]"
                    />
                  </div>
                ) : null
              )}

              <div>
                <div className="flex items-center gap-6">
                  <p className="text-[24px] sm:hidden lg:block">
                    {users?.find((user) => user.id == userIdFromParam)?.name}
                  </p>

                  {+getToken().sub == userIdFromParam ? (
                    <div>
                      <Link to={"/editProfile"} className="flex gap-4">
                        <button className="bg-[#eaeaea] px-4 py-1 rounded-[6px]  sm:hidden lg:block">
                          Edit profile
                        </button>
                      </Link>
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center sm:gap-4 lg:gap-8 py-4">
                  <p>
                    {posts.filter((el) => el.userId == userIdFromParam).length}
                    &nbsp; posts
                  </p>
                  <p>12 followers</p>
                  <p>223 following</p>
                </div>
                <p className="lg:block sm:hidden">
                  {users?.find((user) => user.id == userIdFromParam)?.username}
                </p>

                <p className="text-[gray] pt-2">
                  {users?.find((user) => user.id == userIdFromParam)?.desc}
                </p>
              </div>
            </div>
            <Link to={"/layout/editProfile"}>
              <button className="bg-[#eaeaea] w-[100%] mt-8 px-4 py-1 rounded-[6px]  lg:hidden">
                Edit profile
              </button>
            </Link>
          </div>

          <div className="flex gap-10 justify-center py-4 text-[13px]">
            <p className="flex items-center gap-1 ">
              <AppsIcon sx={{ fontSize: "16px" }} /> POSTS
            </p>
            <p className="flex items-center gap-1 ">
              <BookmarkBorderIcon sx={{ fontSize: "16px" }} /> SAVED
            </p>
            <p className="flex items-center gap-1 ">
              <AccountBoxIcon sx={{ fontSize: "16px" }} /> TAGGED
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2">
            {posts.map((el) =>
              el.userId == userIdFromParam ? (
                <div key={el.userId}>
                  <div>
                    {el.media[0].type == "video/mp4" ? (
                      <div className=" relative cursor-pointer imgg">
                        <video
                          className="w-[100%] h-[50vh]"
                          controls
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            el.media[0].src
                          }`}
                        ></video>
                        <div className=" absolute top-[0%] left-[0%] z-[-1]  text-[#fff] flex justify-center items-center item">
                          <div className="flex gap-2">
                            <div className="flex gap-2">
                              <FavoriteIcon />
                              <p>{el?.likedBy?.length}</p>
                            </div>
                            <div className="flex gap-2">
                              <ModeCommentIcon />
                              <p>{el?.comments?.length}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ExploreGrid
                        imgg={`${import.meta.env.VITE_APP_FILES_URL}${
                          el.media[0].src
                        }`}
                        likes={el?.likedBy?.length}
                        comments={el?.comments?.length}
                      
                      ></ExploreGrid>
                    )}
                  </div>
                </div>
              ) : null
                )}
          </div>

          

          {/* 
        <div className="text-center py-[50px]">
          <img src={cam} alt="" className="m-auto w-[80px]" />
          <p className="text-[30px] font-[800] py-2">Share Photos</p>
          <p>When you share photos, they will appear on your profile.</p>
          <p className="pt-6 font-[600] text-[#7593ff]">
            Share your first photo
          </p>
        </div> */}

          <div className="py-[40px]">
            <p className="text-center text-[13px] text-[#878787]">
              Meta &nbsp; About &nbsp; Blog &nbsp; Jobs &nbsp; Help &nbsp; API
              &nbsp; Privacy &nbsp; Terms &nbsp; Top Accounts &nbsp; Locations
              &nbsp; Instagram &nbsp; Lite &nbsp; Threads &nbsp; Contact
              Uploading & Non-Users &nbsp; Meta Verified
            </p>
            <div className="flex items-center gap-4  justify-center pt-4 text-[13px] text-[#878787]">
              <select name="" id="">
                <option value="">English</option>
                <option value="">Russia</option>
              </select>
              <p>© 2023 Instagram from Meta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
