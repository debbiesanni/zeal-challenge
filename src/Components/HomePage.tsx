"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
import EmojiDialog from "./EmojiDialog";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
import HomeContent from "./HomeContent";
import { HomeFunct } from "./types";

const HomePage: HomeFunct = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState<Array<any>>([]);
  const [className, setClassName] = useState("");
  const [active, setActive] = useState(-1);
  const onMouseMove = (e) => {
    if (className) {
      let rect = e.currentTarget.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      setPosition({ x, y });
      setClassName("");
      setOpen(true);
    }
    setActive(-1);
  };

  const leaveComment = () => {
    setOpen(false);
    setClassName("body");
  };
  const changeCursor = () => {
    setClassName(className ? "" : "body");
  };

  return (
    <div style={{ position: "relative" }} className={className}>
      <Box sx={{ position: "absolute", top: -30, left: 10 }}>
        <IconButton onClick={() => changeCursor()}>
          {className ? (
            <SpeakerNotesOffIcon sx={{ fontSize: 45 }} htmlColor="#fff" />
          ) : (
            <Image
              src="https://i.imgur.com/sdnLPIU.png"
              alt="zealy icon"
              height={50}
              width={50}
            />
          )}
        </IconButton>
      </Box>
      <div onMouseDown={onMouseMove}>
        <Container>
          <Box
            sx={{ my: "auto", maxHeight: "100vh", height: "100%" }}
            className=""
          >
            <HomeContent />
          </Box>
        </Container>
      </div>
      {comment?.map(({ text, position, emoji }, index) => (
        <Typography
          sx={{ position: "absolute", top: position.y, left: position.x }}
        >
          <Typography
            onClick={() => setActive(index)}
            sx={{
              background: "#fff",
              height: 50,
              width: 50,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThreePOutlinedIcon />
          </Typography>
          {active === index && (
            <Box
              sx={{
                background: "#fff",
                maxWidth: 400,
                width: "100%",
                borderRadius: 2,
                p: 2,
                mt: 1,
              }}
            >
              <Typography>{emoji}</Typography>
              <Typography variant="body1">{text}</Typography>
            </Box>
          )}
        </Typography>
      ))}
      <EmojiDialog
        position={position}
        open={open}
        leaveComment={leaveComment}
        setComment={setComment}
        comment={comment}
      />
    </div>
  );
};

export default HomePage;
