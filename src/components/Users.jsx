import { Pencil, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Users({
    users,
    deleteUserClick,
    editUserClick,
    isEditing,
}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(user) {
        const query = new URLSearchParams();
        query.set("email", user.email);
        query.set("password", user.password);
        query.set("name", user.name);
        query.set("type", user.type);
        navigate(`/user?${query.toString()}`);
    }

    return (
        <ul
            className={`space-y-2 bg-slate-200 p-6 rounded-md shadow ${
                !users.length && "hidden"
            }`}
        >
            {users.map((user) => (
                <li key={user.id} className="flex gap-2 display-full">
                    <h1
                        name="btn_title"
                        onClick={() => onSeeDetailsClick(user)}
                        className={`flex gap-2 bg-slate-700 w-full p-2 rounded-md text-white`}
                    >
                        {user.email}
                    </h1>
                    <Button onClick={() => editUserClick(user.id)}>
                        <Pencil />
                    </Button>
                    <Button onClick={() => deleteUserClick(user.id)}>
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Users;
