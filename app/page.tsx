
import Hero from "./components/Hero";
import Features from "./components/Features";
import Itemcard from "./components/Itemcard";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";


export default function Home() {
  return (
     <div>
      <Hero></Hero>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Features></Features>
        <Itemcard></Itemcard>
        <Testimonials></Testimonials>
        <Banner></Banner>
      </div>
    </div>
  );
}
