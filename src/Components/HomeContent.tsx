"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/Styles/theme";
import TextField from "@mui/material/TextField";
import { HomeContentFunct } from "./types";

const HomeContent: HomeContentFunct = () => {
  const sx = {
    width: "100%",
    maxWidth: 500,
    mr: 2,
    borderColor: "#fff",
    mb: 3,
  };

  return (
    <Box
      sx={{
        pb: { xs: 3, md: 2 },
      }}
    >
      <Box
        sx={{
          mt: 5,
          mb: 3,
        }}
      >
        <Image src="/images/logo.png" alt="zealy logo" height={70} width={70} />
      </Box>
      <Typography
        variant="h6"
        style={{
          color: theme.palette.secondary.light,
          fontStyle: "italic",
        }}
      >
        Join our community of experts
      </Typography>
      <Typography
        variant="h3"
        mt={{ sm: 2 }}
        style={{ color: "#fff", maxWidth: 600, lineHeight: 1.3 }}
      >
        Are you ready to get Zealy? Get the best of Zealy today.
      </Typography>
      <Typography
        variant="body1"
        mt={{ sm: 2, md: 1 }}
        style={{ color: "#fff", maxWidth: 550, lineHeight: 1.7 }}
      >
        Get rewarded by performing that at Zealy. Zealy connects you with the
        best community. Getting you the best deal.
      </Typography>
      <Box mt={{ xs: 7, md: 5 }} mb={{ xs: 10, md: 7 }}>
        <Box
          sx={{
            borderRadius: { xs: 0, sm: 2 },
            p: 3,
            maxWidth: 500,
            background: "rgba(0,0,0, 0.1)",
            textAlign: "center",
          }}
        >
          <form>
            <TextField
              label="Name"
              sx={sx}
              color="secondary"
              required
              focused
            />
            <TextField
              focused
              label="Email"
              color="secondary"
              sx={sx}
              required
            />
            <Button
              type="submit"
              sx={{
                background: "#fff",
                color: theme.palette.primary.main,
                "&:hover": {
                  background: theme.palette.primary.dark,
                  color: "#fff",
                },
              }}
              variant="contained"
              size="large"
            >
              Join our wait list
            </Button>
          </form>
        </Box>
        <Box mt={3}>
          <Link
            href="#"
            style={{
              color: "#fff",
              marginRight: 30,
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            style={{
              color: "#fff",
              marginRight: 30,
              textDecoration: "none",
            }}
          >
            Case study
          </Link>
          <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Blogs
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent;
