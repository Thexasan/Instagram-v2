import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import imgAdd from "../assets/imgAdd.png";

import { openModal, closeModal } from "../reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { multiFiles } from "../api/files";
import { axiosRequest, getToken } from "../utils/axiosRequest";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalAdd() {
  const modal = useSelector(({ modal }) => modal.modal1);
  const dispatch = useDispatch();
  const [files, setFiles] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const addPost = async () => {
    if (!files) return alert("Please select photo");
    let post = {
      title: title,
      description: description,
      date: Date.now(),
      likes: 0,
      likedBy: [],
      comments: [],
      media: [],
      userId: +getToken().sub,
    };

    let formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    const imgs = await multiFiles(formData);
    let media = [];
    imgs.img.forEach((elem) => {
      media.push({
        type: elem.mimetype,
        src: elem.path,
      });
    });

    post.media = media;

    try {
      const { data } = await axiosRequest.post(`posts`, post);
      dispatch(closeModal(false));
    } catch (err) {}
  };

  const handleClickOpen = () => {
    dispatch(openModal(true));
  };
  const handleClose = () => {
    dispatch(closeModal(false));
  };

  return (
    <div>
      <li
        onClick={handleClickOpen}
        className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]"
      >
        <AddBoxOutlinedIcon sx={{ fontSize: "30px" }} />
        Create
      </li>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          className=" text-center"
          onClose={handleClose}
        >
          Create new post
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="py-[20px] lg:px-[50px]  h-[55vh] flex justify-center items-center ">
            <div>
              <img src={imgAdd} alt="" className="w-[30%] m-auto " />
              <p className="text-center py-6 text-[22px]">
                Drag photos and videos here
              </p>
              <div className="text-center">
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    setFiles(e.target.files);
                  }}
                  className=" file:bg-[#0095F6] file:text-[#fff] file:border-none file:px-5 file:py-[5px] file:rounded-[5px]"
                />

                <div className="w-[80%] m-auto flex flex-col gap-2 pt-2">
                <TextField
                  placeholder="title"
                  sx={{ width: "100%"}}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border p-2 w-[100%]"
                  cols="35"
                  rows="3"
                  placeholder="Add description... "
                ></textarea>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={addPost}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
