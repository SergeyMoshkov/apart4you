import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import "../index.css";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from "@mui/material/styles";
import Button from "@mui/material/Button";

// const useSyles = makeStyles({});
function Home() {
  const [btnColor, setBtnColor] = useState("error");
  // const classes = useSyles();
  return (
    <div align="center">
      <div className="divContent">
        <Typography variant="h3">This is title</Typography>
        <Typography variant="body1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Button
          onClick={() => setBtnColor("success")}
          color={btnColor}
          variant="contained"
          size="medium"
        >
          GO
        </Button>
       
      </div>
    </div>
  );
}

export default Home;
