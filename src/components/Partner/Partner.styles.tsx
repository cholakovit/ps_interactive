// Styled Elements
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Partner = styled(Box)(({ theme }) => ({
    padding: "10px",
    marginBottom: "20px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.black,
    width: '60%'
}));


export const AvatarHolder = styled(Box)(({ theme }) => ({
    paddingRight: '10px'
}));

export const PartnerContent = styled(Box)(({ theme }) => ({
    width: '40%',
    overflow: 'hidden'
}));

export const PartnerName = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.white
}));

export const PartnerDistance = styled(Box)(({ theme }) => ({
    
}));