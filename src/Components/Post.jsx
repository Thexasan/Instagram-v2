import React, { useState } from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ModalPost from "./ModalPost";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import msgg from "../assets/mess.svg";
import share from "../assets/share.svg";
import { Avatar, Checkbox, IconButton, Stack } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { getToken } from "../utils/axiosRequest";
import { useDispatch } from "react-redux";
import { showIdUser } from "../reducers/modal";
import { Link } from "react-router-dom";

export default function Post({
  id,
  imgg,
  desc,
  title,
  likes,
  comments,
  toggleLike,
  likedBy,
  addComment,
  deleteComment,
  users,
  userId,
  date,
}) {
  const data2 = new Date(date).getTime();
  const data1 = new Date().getTime();
  const min = Math.floor((data1 - data2) / 1000 / 60);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  function handleClick(id, commentId) {
    setComment("");
    addComment(id, commentId);
  }

  return (
    <div className="lg:w-[60%] sm:w-[90%] m-auto">
      <div className="flex items-center justify-between ">
        <Link to={`/user/${userId}`}>
          <div className="flex items-center gap-2 ">
            <Avatar>
              <div>
                {users?.map((user) =>
                  user.id === userId ? (
                    <div>
                      <img
                        src={`${import.meta.env.VITE_APP_FILES_URL}${
                          user.avatar
                        }`}
                        alt=""
                      />
                    </div>
                  ) : null
                )}
              </div>
            </Avatar>
            <p className="flex items-center">
              {users?.find((user) => user.id === userId)?.name}

              <span className="text-[gray] m-2 flex items-center gap-1">
                <FiberManualRecordRoundedIcon
                  sx={{ fontSize: "6px", color: "gray" }}
                />
                {min < 60 ? (
                  <p>{min} minute ago</p>
                ) : min > 60 && min < 1440 ? (
                  <p>{Math.floor(min / 60)} hours ago</p>
                ) : (
                  <p>{Math.floor(min / 60 / 24)} day ago</p>
                )}
              </span>
            </p>
          </div>
        </Link>
        <ModalPost />
      </div>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {imgg?.length > 0
          ? imgg.map((el) => {
              return (
                <SwiperSlide>
                  <div>
                    {el.type === "video/mp4" ? (
                      <video
                        autoPlay
                        muted
                        className="w-[100%] py-3 h-[100%]"
                        controls
                        src={`${import.meta.env.VITE_APP_FILES_URL}${el.src}`}
                      ></video>
                    ) : (
                      <img
                        src={`${import.meta.env.VITE_APP_FILES_URL}${el.src}`}
                        alt=""
                        className="w-[100%] py-3 h-[100%]"
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Checkbox
            color="error"
            icon={<FavoriteBorder />}
            onClick={toggleLike}
            checked={likedBy?.includes(+getToken()?.sub)}
            checkedIcon={<Favorite />}
          />
          <img src={msgg} alt="" />
          <img src={share} alt="" />
          {/* <ModeCommentOutlinedIcon sx={{ fontSize: "30px" }} /> */}
          {/* <SendIcon sx={{ fontSize: "30px" }} /> */}
        </div>
        <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />
      </div>

      <div>
        <div className="font-[600] flex items-center gap-2 py-2">
          <img
            // src={`${import.meta.env.VITE_APP_FILES_URL}${imgg[0].src}`}
            alt=""
            className="w-[25px] h-[25px] rounded-[50px] bord"
          />
          <p>{likes} likes</p>
        </div>

        <p>
          <span className="font-[600]">
            {users?.find((user) => user.id === userId)?.name}
          </span>{" "}
          <span>{title}</span>
        </p>
        <p>{desc}</p>
        <div className="  overflow-auto  element  ">
          {comments?.length > 0
            ? comments.map((elem) => {
                return (
                  <div>
                    <p
                      className="p-1 "
                      key={elem.userId}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection:"row-reverse",
                        justifyContent: "space-between",
                        gap: 5,
                        m: 5,
                      }}
                    >
                      <div className="flex flex-row-reverse gap-2 items-center">
                        {elem.userId == +getToken().sub ? (
                          <div>
                            <button
                              onClick={() => deleteComment(id, elem.commentId)}
                              className="text-[red]"
                            >
                              <DeleteOutlineIcon sx={{ fontSize: "20px" }} />
                            </button>
                          </div>
                        ) : null}

                        {elem.comment}
                      </div>
                      <Link to={`/user/${users?.find((user) => user.id === elem.userId)?.id}`}>
                      <div className="flex flex-row-reverse items-center gap-2">
                        <p>
                          {users?.find((user) => user.id === elem.userId)?.name}
                        </p>
                        <Avatar>
                          <div>
                            {users?.map((user) =>
                              user.id == elem.userId ? (
                                <div>
                                  <img
                                    src={`${
                                      import.meta.env.VITE_APP_FILES_URL
                                    }${user.avatar}`}
                                    alt=""
                                  />
                                </div>
                              ) : null
                            )}
                          </div>
                        </Avatar>
                      </div>
                      </Link>
                    </p>
                  </div>
                );
              })
            : null}
        </div>

        <p className="text-[#7d7d7d] py-1 viev"> {comments?.length} comments</p>
        <div className="flex">
          <Input
            placeholder="Add a comment...."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-[100%]"
          />
          <Button variant="text" onClick={() => handleClick(id, comment)}>
            Post
          </Button>
        </div>
        <hr className="my-6 bg-[#a7a7a7] h-[2px]" />
      </div>
    </div>
  );
}
