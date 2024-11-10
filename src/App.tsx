import { Suspense } from "react";
import Routing from "./router/Routing";
import ThemeProvider from "./theme/ThemeProvider";
import { CssBaseline } from "@mui/material";
import LoaderRoutesApp from "./components/loaders/LoaderRoutesApp";

function App() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Suspense fallback={<LoaderRoutesApp />}>
                <Routing />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
