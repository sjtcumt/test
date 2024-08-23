import { Hero, Skills, Projects, Subscribe, Footer } from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className=" relative">
    <Nav />
    <section className=" xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Skills />
    </section>
    <section className="padding">
      <Projects />
    </section>
    {/* <section className=" padding">
      <Subscribe />
    </section> */}
    <section className=" bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
