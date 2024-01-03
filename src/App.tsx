import { Stack, Button, Typography, Box } from "@mui/material";
import "./App.css";
import SvgMain from "./svgmain";
import image from "./assets/image-avatar.webp";
function App() {
  return (
    <Stack
      width="100%"
      height={"100vh"}
      bgcolor={"hsl(47, 88%, 63%)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        border={"1px solid black"}
        borderRadius={"10px"}
        sx={{ boxShadow: "8px 8px" }}
        padding={"0.2rem 0.6rem"}
        bgcolor={"white"}
        width={"22.6rem"}
        height={"auto"}
        justifyContent={"space-evenly"}
      >
        <Box >
        <SvgMain />
        </Box>
        <Button
          variant="contained"
          children="Learning"
          sx={{
            color: "black",
            fontWeight: "bold",
            mt:"1rem",
            width: "8rem",
            bgcolor: "hsl(47, 88%, 63%)",
          }}
        />
        <Typography sx={{mt:"1rem",fontWeight:"600",fontSize:"1.1rem" }}>Published 21 Dec 2023</Typography>
        <Typography sx={{mt:"1rem",fontWeight:"800",fontSize:"1.4rem", ":hover":{color:"hsl(47, 88%, 63%)", cursor:"pointer"}}}>HTML and CSS foundations</Typography>
        <Typography sx={{mt:"1rem",fontWeight:"500",fontSize:"0.95rem", color:"hsl(0, 0%, 50%)" }}>
          These language are the backbone of every website, defining structure,
          content, and presentation.
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap="10px" sx={{mt:"1rem"}}>
          <img src={image} height={30} width={30} alt="no img" /> <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Greg Hooper</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
