import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../../assets/img2.jpg";

import "../../App.css";
import { Link } from "react-router-dom";
import Post from "../../Components/Post";
import SliderHistory from "../../Components/SSlider/SliderHistry";
import { axiosRequest, getToken } from "../../utils/axiosRequest";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const toggleLike = async (id) => {
    let post = posts.find((p) => p.id === id);
    if (post.likedBy.includes(+getToken().sub)) {
      post.likes--;
      post.likedBy = post.likedBy.filter((elem) => elem !== +getToken().sub);
    } else {
      post.likes++;
      post.likedBy = [...post.likedBy, +getToken().sub];
    }

    try {
      const { data } = await axiosRequest.patch(`posts/${id}`, post);
      getPosts();
    } catch (e) {}
  };

  const getPosts = async () => {
    try {
      const { data } = await axiosRequest.get("posts");

      setPosts(data);
    } catch (err) {}
  };

  const addComment = async (id, comment) => {
    const post = posts.find((p) => p.id === id);
    post.comments = [
      ...post.comments,
      {
        userId: +getToken().sub,
        comment: comment,
        commentId: new Date().getTime(),
      },
    ];
    try {
      const { data } = await axiosRequest.patch(`posts/${id}`, post);
      getPosts();
    } catch (e) {}
  };

  const deleteComment = async (id, commentId) => {
    const post = posts.find((p) => p.id === id);
    post.comments = post.comments.filter((el) => el.commentId != commentId);
    try {
      const { data } = await axiosRequest.patch(`posts/${id}`, post);
      getPosts();
    } catch (e) {}
  };

  const getUsers = async () => {
    try {
      const { data } = await axiosRequest.get("users");
      setUsers(data);
    } catch (e) {}
  };

  useEffect(() => {
    AOS.init();
    getPosts();
    getUsers();
  }, []);

  return (
    <div className=" lg:ml-[20%] sm:ml-0 dark:bg-[#000]  overflow-hidden">
      <div className="container m-[0_auto] gap-10 flex ">
        <div className="lg:w-[60%] sm:w-[100%] ">
          <div className="flex gap-[5px] lg:w-[90%] ls:w-[80%] sm:w-[180%] lm:w-[150%] md:w-[100%] py-[50px] justify-between m-auto">
            <SliderHistory  />
          </div>
          <div className="w-[100%] m-auto">
            {posts.length > 0 ? (
              posts.map((elem) => {
                return (
                  <Post
                    date={elem.date}
                    userId={elem.userId}
                    id={elem.id}
                    imgg={elem.media}
                    title={elem.title}
                    desc={elem.description}
                    key={elem.id}
                    likes={elem.likes}
                    likedBy={elem.likedBy}
                    comments={elem.comments}
                    toggleLike={() => toggleLike(elem.id)}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    users={users}
                  />
                );
              })
            ) : null}
          </div>
        </div>

        <div className="w-[35%] pr-[100px] pt-[50px] sm:hidden lg:block">
          <div className="px-[30px]">
            <Link to={"profile"}>
              <div className="flex justify-between items-center  w-[100%] pb-4">
                <div className="flex gap-3 items-center">
                  {users.map((el) =>
                    el.id == +getToken().sub ? (
                      <div>
                          <img
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            el.avatar
                          }`}
                          alt=""
                          className="w-[45px] h-[45px] rounded-[50px]"
                        />

                      </div>
                    ) : null
                  )}
                  <div>
                    <p>
                      {users?.find((user) => user.id === +getToken().sub)?.name}
                    </p>
                    <p className=" text-[gray]">
                      {
                        users?.find((user) => user.id === +getToken().sub)
                          ?.username
                      }
                    </p>
                  </div>
                </div>

                <p className="font-[600] text-[#4187ff] text-[12px]">Switch</p>
              </div>
            </Link>

            <div className="flex justify-between py-2">
              <p className="text-[#8a8282] font-[600]">Suggested for you</p>
              <p className=" text-[12px] font-[600]">See all</p>
            </div>

            {users.length>0 ? (
          users.map((el) =>{
            return (
              <Link to={`/user/${el.id}`}>
            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
              <div >
              <img  className="w-[40px] h-[40px] rounded-[50px]" src={`${import.meta.env.VITE_APP_FILES_URL}${el.avatar}`} alt="" />
            </div>
                <div>
                <p className="font-[700]">{el.name}</p>
                <p>{el.username}</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Follow</p>
            </div>
            </Link>
            )
          }
          ) 

        ):null}



        
            <p className="text-[12px] text-[#b7b7b7] pt-8">
              About. Help. Press. API. Jobs. Privacy. Terms
            </p>
            <p className="text-[12px] text-[#b7b7b7] pb-6">
              Locations. Language. English. Meta. Verified
            </p>
            <p className="text-[12px] text-[#b7b7b7]">
              © 2023 INSTAGRAM FROM META
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
