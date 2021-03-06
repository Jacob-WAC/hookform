import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        console.log("Welcome", newUser);
    };

    return (
        <div>
            <form className="form-control" onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        className="form-control "
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        className="form-control "
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <input
                    className="btn btn-primary m-3"
                    type="submit"
                    value="Create User"
                />
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;
