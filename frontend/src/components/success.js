import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Success() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Thank you for your order!</h1>
      <Button className="btn-dark" onClick={() => navigate("/")}>Return to home</Button>
    </div>
  );
}
export default Success;
