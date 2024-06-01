import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: (
               <>
                  <h1 className="py-24 text-4xl text-gray-800 font-bold text-center">
                     Hello World
                  </h1>
               </>
            ),
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
