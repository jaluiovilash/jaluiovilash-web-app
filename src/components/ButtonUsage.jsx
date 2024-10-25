import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function ButtonUsage({ title }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FF3422",
        "&:hover": {
          color: "#000",
          backgroundColor: "#fff"
        },
        color: "#fff",
        fontFamily: "Roboto, sans-serif",
        fontSize: isMobile ? "16px" : "18px",
        padding: isMobile ? "10px 30px" : "16px 50px",
        borderRadius: "40px",
        textTransform: "none"
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonUsage;
