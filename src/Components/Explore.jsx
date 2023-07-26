import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

export default function ExploreGrid({imgg, likes, comments,vid}) {
  return (
    <div className=" relative cursor-pointer imgg">
    <img src={imgg} alt="" className="w-[100%] h-[50vh]"/>
    <div className=" absolute top-[0%] left-[0%] z-[-1]  text-[#fff] flex justify-center items-center item">
      <div className="flex gap-2">
      <div className="flex gap-2">
      <FavoriteIcon/>
      <p>{likes}</p>
      </div>
      <div className="flex gap-2">
        <ModeCommentIcon/>
        <p>{comments}</p>
      </div>
      </div>
    </div>
    </div>
  )
}
