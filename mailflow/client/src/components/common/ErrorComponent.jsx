

import { Typography, Box } from "@mui/material";
import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    useRouteError();
    

    return (
        <Box style={{ marginLeft: 250 }}>
            <Typography variant="h4">There was error loading this page</Typography>
        </Box>
    )
}

export default ErrorComponent;