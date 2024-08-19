import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center flex-col anim-opacity mt-6 lg:mt-12">
            <h1 className="text-5xl text-white">Register</h1>
            <RegisterForm />
        </div>
    );
}
