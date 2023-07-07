import { NextPage } from "next";

const HomePage: NextPage = () => {
    return (
           <>
             <main>
                <div>
                    <nav>
                        <ul>
                            <li>
                               <a>Learn</a>
                            </li>
                            <li>
                              <a>Blog</a>
                            </li>
                            <li>
                              <a>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <section>
                    <h1>About us</h1>
                </section>
             </main>
           </>
    )
}

export default HomePage;

