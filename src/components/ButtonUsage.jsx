import Button from "@mui/material/Button";

function ButtonUsage({ title }) {
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
        fontSize: "14px",
        padding: "15px 40px",
        borderRadius: "40px"
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonUsage;
