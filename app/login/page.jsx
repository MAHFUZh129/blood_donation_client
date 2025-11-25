"use client"

import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import React, { useState } from 'react';
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";


const Page = () => {

      const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
              router.push("/"); // redirect after login
        } catch (err) {
            setError(err.message);
        }
    };

      const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded px-3 py-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full border rounded px-3 py-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Google Sign-in Button */}
                    <div className="mt-5">
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                        >
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>
                    </div>


                    <p className="text-center text-sm mt-4">
                        Don't have an account?{" "}
                        <a href="/register" className="text-red-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;