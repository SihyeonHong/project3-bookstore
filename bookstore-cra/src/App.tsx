import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Error } from "./components/common/Error";
import { ThemeSwitcher } from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { ResetPassword } from "./pages/ResetPassword";
import { Login } from "./pages/Login";
import { Books } from "./pages/Books";
import { BookDetail } from "./pages/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <Error />
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: "/book/:isbn",
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

export const App = () => {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
};
