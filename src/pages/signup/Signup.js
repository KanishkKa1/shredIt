import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [passsword, setPasssword] = useState("");
    const { signup, isPending, error } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, passsword, displayName);
    };
    return (
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
            <h2>Sign up</h2>
            <label>
                <span>Display Name:</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => setPasssword(e.target.value)}
                    value={passsword}
                />
            </label>
            {!isPending && <button className="btn">Sign Up</button>}
            {isPending && (
                <button className="btn" disabled>
                    loading
                </button>
            )}
            {error && <p>{error}</p>}
        </form>
    );
}
