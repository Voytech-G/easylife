import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact Us - EasyLife",
  description:
    "Get in touch with EasyLife for inquiries, support, or feedback. We're here to help you simplify your life with our innovative solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 120px)" }}>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
