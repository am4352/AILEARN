
import { useState } from "react";
import { auth, googleProvider, setUpRecaptcha } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [user, setUser] = useState(null);

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            console.log("Google user:", result.user);
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    // Handle Phone Number Authentication
    const sendOTP = async () => {
        try {
            const confirmation = await setUpRecaptcha(phone);
            setConfirmationResult(confirmation);
            alert("OTP sent!");
        } catch (error) {
            console.error("Phone Auth Error:", error.message);
        }
    };

    // Verify OTP
    const verifyOTP = async () => {
        try {
            const result = await confirmationResult.confirm(otp);
            setUser(result.user);
            console.log("Phone user:", result.user);
        } catch (error) {
            console.error("OTP Verification Error:", error.message);
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {user ? (
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold">Welcome, {user.displayName || "User"}</h3>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
                        Logout
                    </button>
                </div>
            ) : (
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    {/* Google Sign-In */}
                    <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                        Sign in with Google
                    </button>

                    {/* Phone Number Authentication */}
                    <input
                        type="text"
                        placeholder="+91XXXXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border p-2 mb-2 w-full"
                    />
                        <button onClick={sendOTP} className="bg-green-500 text-white px-4 py-2 rounded">
                            
                        Send OTP
                    </button>

                    {confirmationResult && (
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="border p-2 mb-2 w-full"
                            />
                            <button onClick={verifyOTP} className="bg-purple-500 text-white px-4 py-2 rounded">
                                Verify OTP
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div id="recaptcha-container"></div>
        </div>
    );
};

export default Login;
