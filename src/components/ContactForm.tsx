import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser"
import ShowAlert from "./Notifications/showAlert.tsx";
import DotsSpinner from "./Spinners/DotsSpinner.tsx";

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
    name: string;
    subject: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        subject: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_subject: formData.subject,
                    from_email: formData.email,
                    from_message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', subject: '', email: '', message: '' });
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setStatus('error');
        }
    };

    return (
        <>
            <form
                className="custom-form contact-form"
                role="form"
                onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-floating">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label>Name</label>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-floating">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                pattern="[^ @]*@[^ @]*"
                                className="form-control"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label>Email address</label>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-6 col-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />

                            <label>Subject</label>
                        </div>
                    </div>

                    <div className="col-lg-12 col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                placeholder="Tell me about the project"
                                value={formData.message}
                                rows={5}
                                onChange={handleChange}
                            ></textarea>

                            <label>Tell me about the project</label>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 ms-auto">
                        <button type="submit" className="form-control" disabled={status === 'sending'} >
                            {status === 'sending' ? <DotsSpinner /> : 'Send Message'}
                        </button>
                    </div>

                    {status === 'success' && (
                        <ShowAlert
                            icon="success"
                            title="Success!"
                            message="Message sent successfully.!"
                        />
                    )}
                    {status === 'error' && (
                        <ShowAlert
                            icon="error"
                            title="Error!"
                            message="There was an error sending your message. Please try again later."
                        />
                    )}
                </div>
            </form>
        </>
    );
};

export default ContactForm;