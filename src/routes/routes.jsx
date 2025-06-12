import MainLayout from "@/components/layout/main_layout/main_layout";
import Customers from "@/pages/customers/customers";
import Dashboard from "@/pages/dashboard/dashboard_page";
import Login from "@/pages/login/login_page";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/routes/protect_route";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
