import { NextPage } from "next";
import { NavBar } from "component";
import { ContactForm } from "component/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
        <NavBar />
        <ContactForm />
    </>
  );
};

export default ContactPage;
