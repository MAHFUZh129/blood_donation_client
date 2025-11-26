
import Hero from "./components/Hero";
import Features from "./components/Features";
import Itemcard from "./components/Itemcard";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";


export default function Home() {
  return (
     <div>
      <Hero></Hero>
      <div className=" bg-gradient-to-br from-red-100 via-red-300 to-rose-400 px-10 py-10  ">
        <Features></Features>
        <Itemcard></Itemcard>
        <Testimonials></Testimonials>
        <Banner></Banner>
      </div>
    </div>
  );
}
