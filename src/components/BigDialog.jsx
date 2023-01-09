import React from "react";

import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { Avatar } from "@mui/material";
import { MdOutlineFileDownload } from "react-icons/md";
import { saveAs } from "file-saver";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BigDialog = ({ isOpen, setOpen, post }) => {
  //   const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(post);

  const downloadImage = () => {
    saveAs(post?.largeImageURL, "image.jpg"); // Put your image url here.
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} className="bg-slate-200">
          <Toolbar className="flex  justify-between">
            <div className="flex gap-x-2 md:gap-x-5  items-center">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <IoMdClose />
              </IconButton>
              <Avatar alt="Remy Sharp" src={post?.userImageURL} />
              <p>{post?.user}</p>
            </div>

            <button
              className="h-5 w-5 md:h-7 md:w-7 animate-bounce"
              onClick={downloadImage}
            >
              <MdOutlineFileDownload className="w-full h-full" />
            </button>
          </Toolbar>
        </AppBar>
        <img
          src={post?.largeImageURL}
          alt=""
          className="h-full w-full object-cover"
        />
      </Dialog>
    </div>
  );
};

export default BigDialog;
