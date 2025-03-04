import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="container flex flex-col my-12">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Contact Us
      </p>
      <ContactForm />
    </main>
  );
}
