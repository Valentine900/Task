import MainLayout from "@/components/layout/main_layout/main_layout";
import Customers from "@/pages/customers/customers";
import Dashboard from "@/pages/dashboard/dashboard_page";
import Login from "@/pages/login/login_page";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/routes/protect_route";

const ProtectedComponent = ({ component: Component, }) => (
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedComponent component={MainLayout} />,
    children: [
      {
        index: true,
        Component: Dashboard
      },
      {
        path: "customers",
        Component: Customers
      },
    ],
  },
  {
    path: "/login",
    Component: Login ,
  },
]);

export default router;

