import { useState } from "react";
import emailjs from "@emailjs/browser"

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const initialForm: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const ContactForm = () => {
    const [form, setForm] = useState<FormData>(initialForm);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);

        // Basic client validation
        if (!form.name || !form.email || !form.message) {
            setStatus({ ok: false, text: "Please fill in name, email, and message." });
            return;
        }

        setSending(true);

        try {
            const serviceId = import.meta.env.EMAILJS_SERVICE_ID as string;
            const templateId = import.meta.env.EMAILJS_TEMPLATE_ID as string;
            const publicKey = import.meta.env.EMAILJS_PUBLIC_KEY as string;

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                { publicKey }
            );

            setStatus({ ok: true, text: "Message sent successfully!" });
            setForm(initialForm);
        } catch (error) {
            setStatus({ ok: false, text: "Failed to send message. Please try again." });
            console.error("EmailJS error:", error);
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <form
                className="custom-form contact-form"
                role="form"
                onSubmit={onSubmit}
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
                                required
                            />

                            <label>Subject</label>
                        </div>

                        {/*<div className="col-lg-3 col-md-6 col-6">*/}
                        {/*    <div className="form-check form-check-inline">*/}
                        {/*        <input*/}
                        {/*            name="website"*/}
                        {/*            type="checkbox"*/}
                        {/*            className="form-check-input"*/}
                        {/*            id="inlineCheckbox1"*/}
                        {/*            value="1"*/}
                        {/*        />*/}

                        {/*        <label className="form-check-label">*/}
                        {/*            <i className="bi-globe form-check-icon"></i>*/}
                        {/*            <span className="form-check-label-text">Websites</span>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-3 col-md-6 col-6">*/}
                        {/*    <div className="form-check form-check-inline">*/}
                        {/*        <input*/}
                        {/*            name="branding"*/}
                        {/*            type="checkbox"*/}
                        {/*            className="form-check-input"*/}
                        {/*            id="inlineCheckbox2"*/}
                        {/*            value="1"*/}
                        {/*        />*/}

                        {/*        <label className="form-check-label">*/}
                        {/*            <i className="bi-lightbulb form-check-icon"></i>*/}
                        {/*            <span className="form-check-label-text">APIs</span>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-3 col-md-6 col-6">*/}
                        {/*    <div className="form-check form-check-inline">*/}
                        {/*        <input*/}
                        {/*            name="ecommerce"*/}
                        {/*            type="checkbox"*/}
                        {/*            className="form-check-input"*/}
                        {/*            id="inlineCheckbox3"*/}
                        {/*            value="1"*/}
                        {/*        />*/}

                        {/*        <label className="form-check-label">*/}
                        {/*            <i className="bi-phone form-check-icon"></i>*/}
                        {/*            <span className="form-check-label-text">Ecommerce</span>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-3 col-md-6 col-6">*/}
                        {/*    <div className="form-check form-check-inline me-0">*/}
                        {/*        <input*/}
                        {/*            name="seo"*/}
                        {/*            type="checkbox"*/}
                        {/*            className="form-check-input"*/}
                        {/*            id="inlineCheckbox4"*/}
                        {/*            value="1"*/}
                        {/*        />*/}

                        {/*        <label className="form-check-label">*/}
                        {/*            <i className="bi-search form-check-icon"></i>*/}
                        {/*            <span className="form-check-label-text">Web Apps</span>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="col-lg-12 col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                placeholder="Tell me about the project"
                                value={form.message}
                                onChange={onChange}
                            ></textarea>

                            <label>Tell me about the project</label>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 ms-auto">
                        <button type="submit" className="form-control" disabled={sending} >
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </div>

                    {status && (
                        <p style={{ color: status.ok ? "green" : "crimson" }}>{status.text}</p>
                    )}
                </div>
            </form>
        </>
    );
};

export default ContactForm;