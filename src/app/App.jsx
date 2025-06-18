import { RouterProvider } from "react-router";
import "./App.css";
import router from "./routes/routes";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { AuthProvider } from "@/components/model/auth_context";
import config from "@/app/theme.js";

const system = createSystem(defaultConfig, config);

function App() {
  return (
    <>
      <ChakraProvider value={system}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
