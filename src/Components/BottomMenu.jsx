import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import Switcher from "./Switcher/Switcher";
import { destroyToken } from "../utils/axiosRequest";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(-1),
    minWidth: 200,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function BottomMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" ">
      <div
        onClick={handleClick}
        className="flex items-center gap-4 py-[12px] mt-[80px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]"
      >
        <MenuRoundedIcon sx={{ fontSize: "30px" }} /> More
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to={"/editProfile"}>
          <MenuItem
            onClick={handleClose}
            sx={{
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
          >
            <SettingsOutlinedIcon />
            Setting
          </MenuItem>
        </Link>
        <MenuItem
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          onClick={handleClose}
          disableRipple
        >
          <AccessTimeIcon />
          Your activity
        </MenuItem>
        <MenuItem
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          onClick={handleClose}
          disableRipple
        >
          <BookmarkBorderOutlinedIcon />
          Saved
        </MenuItem>
        <MenuItem
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          onClick={handleClose}
          disableRipple
        >
          <Switcher />
          <p className="pl-2"> Switch appearance</p>
        </MenuItem>
        <MenuItem
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          onClick={handleClose}
          disableRipple
        >
          <ReportGmailerrorredOutlinedIcon />
          Report a problem
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
          onClick={handleClose}
          disableRipple
        >
          Switch accounts
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingRight: "200px",
          }}
          onClick={() => {
            destroyToken();
          }}
          disableRipple
        >
          Log out
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
