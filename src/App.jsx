import {
  Navbar,
  Header,
  Hero,
  About_Me,
  ClientCounts,
  Projects,
  Services,
  Method,
  Pricing,
  CTA,
  Footer,
  Blog,
  Contact,
  Ethics,
  Terms,
  Privacy
} from "./container/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="pt-20 lg:pt-24">
                <Header />
              </div>
              <Hero />
              <About_Me />
              <ClientCounts />
              <Projects />
              <Services />
              <Method />
              <Pricing />
              <CTA />
              <Footer />
            </div>
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
