import React from "react";

import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { Avatar } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BigDialog = ({isOpen,setOpen,post}) => {
//   const [open, setOpen] = React.useState(false);

 

  const handleClose = () => {
    setOpen(false);
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
          <Toolbar className="flex gap-x-5">
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
          </Toolbar>
        </AppBar>
      <img src={post?.largeImageURL} alt="" className="h-full w-full" />
      </Dialog>
    </div>
  );
};

export default BigDialog;
