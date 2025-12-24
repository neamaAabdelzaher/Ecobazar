import MenuNav from "../../components/MenuNav";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <>
      <div className="container px-3 md:px-0 xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <Navbar />
      </div>
      <MenuNav isContainer={true} />
      <Hero />
    </>
  );
};

export default Home;
