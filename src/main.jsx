import React from "react";
import "./assets/style.css";
import "./assets/home.css";
import "./assets/service-home.css";
import "./assets/animation.css";
import "./assets/dashboard.css";
import "./assets/tea.css";
import "./assets/meal.css";
import "./assets/beverage.css";
import "./assets/waiter.css";
import "./assets/report.css";
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectPage from "./utils/ProtectPage.jsx";
import AddTea from "./pages/AddTea.jsx";
import ViewTeas from "./pages/ViewTeas.jsx";
import AddMeal from "./pages/AddMeal.jsx";
import ViewMeals from "./pages/ViewMeals.jsx";
import AddBeverage from "./pages/AddBeverage.jsx";
import ViewBeverages from "./pages/ViewBeverages.jsx";
import AddWaiter from "./pages/AddWaiter.jsx";
import ViewWaiters from "./pages/ViewWaiters.jsx";
import HomeDashboard from "./pages/HomeDashboard.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import WaiterHome from "./pages/waiter/Home.jsx";
import Service from "./pages/waiter/Service.jsx";
import Beverages from "./pages/waiter/Beverages.jsx";
import Smoothies from "./pages/waiter/Smoothies.jsx";
import Meal from "./pages/waiter/Meal.jsx";
import Order from "./pages/waiter/Order.jsx";
import ViewOrders from "./pages/waiter/ViewOrders.jsx";
import WaiterOrders from "./pages/waiter/WaiterOrders.jsx";
import ApproveBill from "./pages/waiter/ApproveBill.jsx";
import ReOrder from "./pages/waiter/ReOrder.jsx";
import EditOrder from "./pages/waiter/EditOrder.jsx";
import ProtectDashboards from "./utils/ProtectDashboards.jsx";
import UpdateUser from "./pages/waiter/UpdateUser.jsx";
import EditUser from "./pages/EditUser.jsx";
import GeneralReport from "./pages/GeneralReport.jsx";
import WaitersOrders from "./pages/WaitersOrders.jsx";
import WaiterReport from "./pages/WaiterReport.jsx";
import UnpaidReport from "./pages/UnpaidReport.jsx";
import ApprovePayment from "./pages/ApprovePayment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    element: <ProtectDashboards />,
    children: [
      {
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/home",
            element: <HomeDashboard />,
          },
          {
            path: "/dashboard/add-tea",
            element: <AddTea />,
          },
          {
            path: "/dashboard/view-teas",
            element: <ViewTeas />,
          },
          {
            path: "/dashboard/add-meal",
            element: <AddMeal />,
          },
          {
            path: "/dashboard/view-meals",
            element: <ViewMeals />,
          },
          {
            path: "/dashboard/add-beverage",
            element: <AddBeverage />,
          },
          {
            path: "/dashboard/view-beverages",
            element: <ViewBeverages />,
          },
          {
            path: "/dashboard/add-waiter",
            element: <AddWaiter />,
          },
          {
            path: "/dashboard/view-waiters",
            element: <ViewWaiters />,
          },
          {
            path: "/dashboard/update-profile",
            element: <EditUser />,
          },
          {
            path: "/dashboard/general-report",
            element: <GeneralReport />,
          },
          {
            path: "/dashboard/waiters-orders",
            element: <WaitersOrders />,
          },
          {
            path: "/dashboard/waiter/:waiterId/orders",
            element: <WaiterReport />,
          },
          {
            path: "/dashboard/unpaid-reports",
            element: <UnpaidReport />,
          },
          {
            path: "/dashboard/approve/:orderId/bill",
            element: <ApprovePayment />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectPage />,
    children: [
      {
        element: <Service />,
        children: [
          {
            path: "/service/home",
            element: <WaiterHome />,
          },
          {
            path: "/service/beverages",
            element: <Beverages />,
          },
          {
            path: "/service/smoothies",
            element: <Smoothies />,
          },
          {
            path: "/service/meals",
            element: <Meal />,
          },
          {
            path: "/service/service",
            element: <Order />,
          },
          {
            path: "/service/orders",
            element: <ViewOrders />,
          },
          {
            path: "/service/my-services",
            element: <WaiterOrders />,
          },
          {
            path: "/service/approve/:orderId/bill",
            element: <ApproveBill />,
          },
          {
            path: "/service/:orderId/reorder",
            element: <ReOrder />,
          },
          {
            path: "/service/:orderId/edit-order",
            element: <EditOrder />,
          },
          {
            path: "/service/update-profile",
            element: <UpdateUser />,
          },
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
