import { useState } from "react";
import Title from "./Title";
import { ArrowLeft } from "lucide-react";
import Button from "./Button";
import Input from "./Input";

function EditUser({ user, saveEditedUser, backCreate }) {
    // Estados locais para o título e descrição
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [password, setPassword] = useState(user?.password || "");
    const [type, setType] = useState(user?.type || "");

    // Função chamada ao salvar a edição
    function onSaveClick() {
        if (!name.trim() || !email.trim()) {
            return alert("Preencha todos os campos.");
        }
        saveEditedUser({ ...user, name, email, password, type });
        console.log(name, email, password, type);
    }

    return (
        <div>
            {/* Cabeçalho com o botão de voltar */}
            <div className="flex justify-center relative">
                <Button
                    className="text-white bg-slate-400 absolute rounded-md p-2 left-0"
                    onClick={backCreate}
                >
                    <ArrowLeft />
                </Button>
                <Title>Edit User</Title>
            </div>

            {/* Formulário de edição */}
            <div className="bg-slate-200 rounded-md p-6 flex flex-col space-y-2">
                <Input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="User name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="User email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="New user password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="text"
                    name="type"
                    value={type}
                    placeholder="New user Type"
                    onChange={(e) => setType(e.target.value)}
                />
                <Button onClick={onSaveClick}>Salvar</Button>
            </div>
        </div>
    );
}

export default EditUser;
