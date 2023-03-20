import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import styles from "./Login.module.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [passsword, setPasssword] = useState("");
    const { login, error, isPending } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, passsword);
    };

    return (
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
            <h2>Login</h2>
            <label>
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
            {!isPending && <button className="btn">Login</button>}
            {isPending && (
                <button className="btn" disabled>
                    loading
                </button>
            )}
            {error && <p>{error}</p>}
        </form>
    );
}
