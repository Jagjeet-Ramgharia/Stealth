import React from "react";
import Button from "../Button/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  componentDidCatch(error, info) {
    // Update state so the next render will show the fallback UI.
    this.setState({ hasError: true, error: error, info: info });
    // You can also log the error to an error reporting service
    console.log("----------->", error);
    console.log("----------->", info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error_boundary_container">
          <div
            style={{ fontSize: "2.5rem", fontWeight: "bolder", color: "white" }}
          >
            Our application is feeling a little down!
          </div>
          <span style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>
            Please try again in a few moments or reload the page.
          </span>
          <Button
            text={"Reload"}
            showIcon={false}
            onclick={() => window.location.reload()}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
