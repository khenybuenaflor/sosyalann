import React from "react";
import { Typography, Box } from "@mui/material";

const Logo = ({color}) => {
    return (
        <Box textAlign="center" mt={2} mb={2}>
            <Typography fontFamily='Salsa' fontSize='35px' fontWeight={500} color={color}>
                SOSYALAN
            </Typography>
        </Box>
    )
}

export default Logo;
