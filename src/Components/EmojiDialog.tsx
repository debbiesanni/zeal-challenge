"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Box from "@mui/material/Box";
import EmojiPicker from "emoji-picker-react";
import Close from "@mui/icons-material/Close";
import { ModalFunct } from "./types";

const EmojiDialog: ModalFunct = ({
  open,
  position,
  leaveComment,
  setComment,
  comment,
}) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState<string>("");

  return (
    open && (
      <Card
        elevation={0}
        sx={{
          maxWidth: 400,
          width: "100%",
          position: "absolute",
          top: position.y,
          left: position.x,
        }}
      >
        <Box sx={{ padding: 0, m: "0px !important" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src="/images/logo.png" sizes="small" alt="zealy" />
                <Typography component="span" variant="h5" color="#333">
                  ealy
                </Typography>
              </Box>
              <IconButton onClick={() => leaveComment()}>
                <Close htmlColor="red" />
              </IconButton>
            </Box>
            {emoji && (
              <Typography mt={1} px={2}>
                {emoji}
              </Typography>
            )}
            <TextField
              id="reply"
              fullWidth
              variant="standard"
              onChange={(e) => setText(e.target.value)}
              sx={{ px: 2 }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              mt={1}
              px={2}
            >
              <IconButton onClick={() => setShowEmoji(true)}>
                <EmojiEmotionsIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  comment.push({ emoji, text, position });
                  setComment([...comment]);
                  setText("");
                  setEmoji("");
                  leaveComment();
                }}
              >
                <SendOutlined />
              </IconButton>
            </Box>
          </Box>
          {showEmoji && (
            <EmojiPicker
              style={{ width: "100%" }}
              open={showEmoji}
              onEmojiClick={(e) => {
                setEmoji(`${emoji} ${e.emoji}`);
              }}
            />
          )}
        </Box>
      </Card>
    )
  );
};
export default EmojiDialog;
