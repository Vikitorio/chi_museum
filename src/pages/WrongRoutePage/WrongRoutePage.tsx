import { Box, Container, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
const WrongRoutePage = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Typography variant="h4">Page Not Exist</Typography>
        <ReportProblemIcon fontSize="large" />
      </Box>
    </Container>
  );
};

export default WrongRoutePage;
