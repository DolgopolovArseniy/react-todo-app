import { Navigate, useParams } from "react-router";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const { username } = useParams();

  if (!currentUser) return <Navigate to="/login" />;

  if (currentUser.username !== username)
    return <Navigate to={`/${currentUser.username}/list`} />;

  return children;
}

export default ProtectedRoute;
