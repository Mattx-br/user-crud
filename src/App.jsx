import { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import { v4 } from "uuid";
import Title from "./components/Title";
import EditUser from "./components/EditUser";

function App() {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const [isEditing, setIsEditing] = useState(false);
    const [userForEdit, setUserforEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    function deleteUserClick(userId) {
        const newUsers = users.filter((user) => user.id !== userId);
        setUsers(newUsers);
    }

    function editUserClick(userId) {
        toggleEdit();
        const userToEdit = users.find((user) => user.id === userId);
        setUserforEdit(userToEdit); // Salva a tarefa no estado
    }

    function toggleEdit() {
        setIsEditing((prevState) => !prevState);
    }

    function saveEditedUser(updatedUser) {
        const newUsers = users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(newUsers);
        toggleEdit();
    }

    function addUserClick(email, password, name, type) {
        const same = users.filter((user) => user.email === email);

        if (same.length > 0) {
            alert("Email já cadastrado! Por favor, insira um novo email.");

            const newEmail = prompt("Digite um novo email:");

            if (newEmail) {
                return addUserClick(newEmail, password, name, type);
            } else {
                return;
            }
        }
        const newUser = {
            id: v4(),
            email,
            password,
            name,
            type,
        };

        setUsers([...users, newUser]);
    }

    function backCreate() {
        toggleEdit();

        setIsEditing(!isEditing);
    }

    function updateUser(updatedUser) {
        const newUser = users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(newUser);
        toggleEdit();
    }

    return (
        <div className="w-screen h-screen flex justify-center bg-slate-500 p-6">
            <div className="w-[500px] space-y-2">
                <Title>SPS</Title>

                {isEditing ? (
                    <EditUser
                        user={userForEdit}
                        updateUser={updateUser}
                        toggleEdit={toggleEdit}
                        saveEditedUser={saveEditedUser}
                        backCreate={backCreate}
                    />
                ) : (
                    <AddUser addUserClick={addUserClick} />
                )}
                <Users
                    users={users}
                    deleteUserClick={deleteUserClick}
                    editUserClick={editUserClick}
                />
            </div>
        </div>
    );
}

export default App;
