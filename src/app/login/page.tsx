import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center flex-col anim-opacity mt-6 lg:mt-12">
            <h1 className="text-5xl text-foreground-primary">Log in</h1>
            <LoginForm />
        </div>
    );
}
