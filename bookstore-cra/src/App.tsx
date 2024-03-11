import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Error } from "@/components/common/Error";
import { ThemeSwitcher } from "@/components/header/ThemeSwitcher";
import { BookStoreThemeProvider } from "@/context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "@/pages/Signup";
import { ResetPassword } from "@/pages/ResetPassword";
import { Login } from "@/pages/Login";
import { Books } from "@/pages/Books";
import { BookDetail } from "@/pages/BookDetail";
import { Cart } from "@/pages/Cart";
import { Order } from "@/pages/Order";
import { OrderList } from "@/pages/OrderList";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/book/:isbn",
    element: <BookDetail />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <ThemeSwitcher />
        <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
};
