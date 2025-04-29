import { Card, Typography } from "@mui/material";
import { useGetTypesQuery } from "../api/api";

const MainComponent = () => {
  const { data } = useGetTypesQuery();
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", gap: "2rem", p: "4rem" }}
      variant="outlined"
    >
      <Typography textAlign={"center"} fontSize={"2rem"}>
        ✍️ Start your code from here
      </Typography>
      <Typography textAlign={"center"} fontSize={"1.5rem"}>
        🔥 Good luck — you’re going to do great!
      </Typography>{" "}
      <Typography textAlign={"center"} fontSize={"1.25rem"}>
        🧠 Stuck somewhere? Don’t worry — just ask! We’re here to help! 🙌
      </Typography>
    </Card>
  );
};

export default MainComponent;
