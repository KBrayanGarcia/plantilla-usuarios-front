import { Suspense } from "react";
import Routing from "./router/Routing";
import ThemeProvider from "./theme/ThemeProvider";
import { CssBaseline } from "@mui/material";

function App() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Suspense fallback={<div>Loading...</div>}>
                <Routing />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
