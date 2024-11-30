import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function UserPage() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const password = searchParams.get("password");
    const name = searchParams.get("name");
    const type = searchParams.get("type");

    const navigate = useNavigate();

    function onBackIndex() {
        navigate(-1);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <button
                        onClick={() => onBackIndex()}
                        className="text-white bg-slate-400 absolute rounded-md p-2 left-0 mb-0"
                    >
                        <ArrowLeft />
                    </button>
                    <Title>User Details</Title>
                </div>
                <div className="bg-slate-400 p-4 rounded-md">
                    <p className=" text-white ">Name: {name}</p>
                    <p className="text-white">Email: {email}</p>
                    {/* <p className=" text-white ">Password: {password}</p> */}
                    <p className=" text-white ">type: {type}</p>
                </div>
            </div>
        </div>
    );
}
export default UserPage;
