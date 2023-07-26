import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { openModalPost, closeModalPost } from "../reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mui/material";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        <ListItemButton
          sx={{ px: 10, textAlign: "center", color: "red" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Report" />
        </ListItemButton>

        <Divider sx={{ my: 0.5 }} />

        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Add to favorites" />
        </ListItemButton>

        <Divider sx={{ my: 0.5 }} />

        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Go to post " />
        </ListItemButton>

        <Divider sx={{ my: 0.5 }} />

        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Share to" />
        </ListItemButton>

        <Divider sx={{ my: 0.5 }} />

        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Copy link" />
        </ListItemButton>
        <Divider sx={{ my: 0.5 }} />
        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText  primary="Delete Post" />
        </ListItemButton>
        <Divider sx={{ my: 0.5 }} />


        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Embed" />
        </ListItemButton>
        <Divider sx={{ my: 0.5 }} />

        <ListItemButton
          sx={{ px: 10, textAlign: "center" }}
          autoFocus
          onClick={() => handleListItemClick()}
        >
          <ListItemText primary="Cancel" />
        </ListItemButton>
      </List>
    </Dialog>
  );
}

export default function ModalPost() {
  const [selectedValue, setSelectedValue] = React.useState(false);

  const modal2 = useSelector(({ modal }) => modal.modal2);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(openModalPost(true));
  };
  const handleClose = () => {
    dispatch(closeModalPost(false));
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div"></Typography>
      <Stack direction="row" spacing={1}>
        <IconButton 
          onClick={handleClickOpen}
          aria-label="delete"
          color="inherit"
        >
          <MoreHorizRoundedIcon />
        </IconButton>
      </Stack>
      <SimpleDialog
        selectedValue={selectedValue}
        open={modal2}
        onClose={handleClose}
      />
    </div>
  );
}
