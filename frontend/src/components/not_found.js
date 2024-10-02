import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button className="btn-dark" onClick={() => navigate("/")}>
        Return to home
      </Button>
    </div>
  );
}

export default NotFound;
