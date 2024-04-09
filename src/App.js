import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";

import "@aws-amplify/ui-react/styles.css";

function App({ signOut }) {
  return (
    <div className="App">
      <Button onClick={signOut}>Sign Out</Button>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default withAuthenticator(App);
