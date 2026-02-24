import "./App.css";
import Header from "./component/Header";
import Box from "@mui/material/Box";
import PublicRoutes from "./routes/PublicRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer";
import { GlobalCssStyles } from "./style/GlobalCSS";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const user = JSON?.parse(localStorage.getItem("user"));
  return (
    <div>
      <BrowserRouter>
      <LanguageProvider>
        {/* <ThemeProvider theme={theme}> */}
        <GlobalCssStyles />
        <Header />
        <Box
          sx={{
            position: "relative",
            top: "1%",
          }}
        >
          <PublicRoutes user={user} />
        </Box>
        {/* <Home /> */}
        {/* <Box sx={{minHeight:"190vh", overflowY:'auto'}}>

      </Box> */}
        <Footer />
        {/* </ThemeProvider> */}
      </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
