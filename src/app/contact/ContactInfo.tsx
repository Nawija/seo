export default function ContactInfo() {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p>If you have any questions or need further information, feel free to contact us:</p>
            <div>
                <p>Email: <a href="mailto:info@seovileo.com" className="text-blue-500">info@seovileo.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+123 456 7890</a></p>
                <p>Address: 123 Main Street, City, Country</p>
            </div>
        </div>
    );
}
