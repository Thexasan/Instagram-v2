import React, { useEffect, useState } from "react";
import nature1 from "../../assets/nature1.jpg"
import nature2 from "../../assets/nature2.jpg"
import ExploreGrid from "../../Components/Explore";
import { axiosRequest } from "../../utils/axiosRequest";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
export default function Explore() {

  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const { data } = await axiosRequest.get("posts");
      setPosts(data);
    } catch (err) {}
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="container m-[0_auto] flex">
        <div className="w-[100%] ml-[16%]">
            <div className="w-[80%] m-auto py-8">
              <div className=" grid-container">

                {posts.map((elem)=> {
                  return (
                    <div>
                    {elem.media[0].type === "video/mp4" ? (
                      <div className=" relative cursor-pointer imgg">
                        <video
                          className="w-[100%] h-[50vh]"
                          controls
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            elem.media[0].src
                          }`}
                        ></video>
                        <div className=" absolute top-[0%] left-[0%] z-[-1]  text-[#fff] flex justify-center items-center item">
                          <div className="flex gap-2">
                            <div className="flex gap-2">
                              <FavoriteIcon />
                              <p>{elem?.likedBy?.length}</p>
                            </div>
                            <div className="flex gap-2">
                              <ModeCommentIcon />
                              <p>{elem?.comments?.length}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ExploreGrid
                        imgg={`${import.meta.env.VITE_APP_FILES_URL}${
                          elem.media[0].src
                        }`}
                        likes={elem.likedBy?.length}
                        comments={elem.comments?.length}
                      ></ExploreGrid>
                    )}
                  </div>
                  )
                })}

              
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
