import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import { lazy } from "react";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const FileManager = lazy(() => import("./Pages/FileManager/FileManager"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FileManager />,
    },
  ]);
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
