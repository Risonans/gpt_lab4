import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Blog from "../components/Blog";
import Footer3 from "../components/Footer3";
import Footer1 from "../components/Footer1";
import Research from "../components/Research";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="sign_up_and_research">
        <Research />
      </section>
      <section className="blog">
        <Blog />
      </section>
      <section className="section Footer">
        <Footer1 />
      </section>
      <section className="section footer2">
        <Footer3/>
      </section>
    </>
  );
};

export default Home;
