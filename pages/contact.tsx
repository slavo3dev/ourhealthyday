import { NextPage } from "next";
import { NavBar } from "component/Layout";
import { ContactForm } from "component/Layout/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <main>
        <NavBar />
        <ContactForm />
      </main>
    </>
  );
};

export default ContactPage;
