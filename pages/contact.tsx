import { NextPage } from "next";
import { NavBar } from "component";
import { ContactForm } from "component/Contact";
import { Layout } from "component/Layout";


const ContactPage: NextPage = () => {
  return (
    <Layout>
        <NavBar />
        <ContactForm />
    </Layout>
  );
};

export default ContactPage;
