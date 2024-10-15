import {
  Navbar,
  Header,
  Hero,
  About_Me,
  Projects,
  Services,
  Method,
  Pricing,
  CTA,
  Footer
} from "./container/index";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <Header />
      </div>
      <Hero />
      <About_Me />
      <Projects />
      <Services />
      <Method />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
