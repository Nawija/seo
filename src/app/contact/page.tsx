import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section
            className="py-16 px-4 text-foreground-primary"
            id="contact"
        >
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
