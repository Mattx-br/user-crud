/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";
import Title from "./Title";
function addUser({ addUserClick }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    return (
        <div>
            <Title>Add User</Title>
            <div className="bg-slate-200 rounded-md p-6 flex flex-col space-y-2">
                <Input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="type the user name"
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="type the user email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="type the user password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Input
                    type="text"
                    name="type"
                    value={type}
                    placeholder="type the user type"
                    onChange={(event) => setType(event.target.value)}
                />
                <button
                    onClick={() => {
                        if (
                            !email.trim() ||
                            !password.trim() ||
                            !name.trim() ||
                            !type.trim()
                        ) {
                            return alert("type something");
                        }
                        addUserClick(email, password, name, type);
                        setEmail("");
                        setPassword("");
                        setName("");
                        setType("");
                    }}
                    className="bg-slate-700 text-white font-medium rounded-md p-3"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default addUser;
