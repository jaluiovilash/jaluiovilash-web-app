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
          color: "#FF3422",
          backgroundColor: "#fff"
        },
        color: "#fff",
        fontFamily: "Roboto, sans-serif",
        fontSize: isMobile ? "14px" : "16px",
        padding: isMobile ? "9px 40px" : "10px 50px",
        borderRadius: "40px",
        textTransform: "none"
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonUsage;
