import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Nothing from "./pages/Nothing/Nothing";

import Explore from "./pages/Explore/Explore";
import Messages from "./pages/Messages/Messages";
import EditProfile from "./pages/EditProfile/EditProfile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Reels from "./pages/Reels/Reels";
import AuthCheck from "./utils/AuthCheck";
import ProtectRoute from "./utils/ProtectedRoute";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/LogIn/Login";
import User from "./pages/User/UserProfile";
import UserProfile from "./pages/User/UserProfile";
import { Suspense } from "react";
import LoaderPage from "./Components/LoaderPage/LoaderPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthCheck>
        <Login />
      </AuthCheck>
    ),
  },
  {
    path: "/signUp",
    element: (
      <AuthCheck>
        <SignUp />
      </AuthCheck>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Layout />
      </ProtectRoute>
    ),
    children: [
      {
        index: true,

        element: (
          <Suspense fallback={<LoaderPage />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "profile",

        element: (
          <Suspense fallback={<LoaderPage />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "user/:userId",

        element: (
          <Suspense fallback={<LoaderPage />}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "explore",
        element: (
          <Suspense fallback={<LoaderPage />}>
            <Explore />
          </Suspense>
        ),
      },
      {
        path: "messages",
        element: (
          <Suspense fallback={<LoaderPage />}>
            <Messages />
          </Suspense>
        ),
      },
      {
        path: "reels",
        element: (
          <Suspense fallback={<LoaderPage />}>
            <Reels />
          </Suspense>
        ),
      },
      {
        path: "editProfile",
        element: (
          <Suspense fallback={<LoaderPage />}>
            <EditProfile />
          </Suspense>
        ),
      },
      {
        path: "changePassword",
        element: (
          <Suspense fallback={<LoaderPage />}>
            <ChangePassword />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoaderPage />}>
            <Nothing />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
