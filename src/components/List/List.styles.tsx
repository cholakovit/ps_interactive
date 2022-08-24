// Styled Elements
import { styled } from "@mui/material/styles";

// MUI Elements
import { Container, Box } from "@mui/material";

export const PartnersContainer = styled(Container)(({ theme }) => ({
  marginTop: "100px",
}));

export const PartnersHolder = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "100px"
}));