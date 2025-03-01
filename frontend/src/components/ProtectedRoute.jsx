import { useEffect , useState } from "react";
import { auth } from "../firebase";
// import Login from "./Login";

import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
    let Navigate = useNavigate();
    const [user, setUser] = useState(null);
    console.log(" route testing");
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);
    if (user === null) {
        return <div>Loading...</div>;  
    }
    return user ? element : <Navigate to="/login" />;  
};

export default ProtectedRoute;








