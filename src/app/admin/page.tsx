import NewsletterForm from "../../components/NewsletterForm";

export default function AdminPage() {
    return (
        <div className="max-w-screen-md mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Send Newsletter</h1>
            <NewsletterForm />
        </div>
    );
}
