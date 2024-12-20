import SearchAppBar from "@/component/navbar/navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MiniDrawer from "@/component/drawer/drawer";
import { Container } from "@mui/material";
// import Provider from "@/component/Provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <SearchAppBar />
        <Container sx={{ maxWidth:'1420px'  }} maxWidth={false}>
          {children}
          <ToastContainer />
        </Container>
      </body>
    </html>
  );
}
