import Sidebar from "../components/Sidebar";
import About from "../components/about";
import CaseStudies from "@/components/caseStudies";

export default function Home() {
  return (
    <main className="main">
      <div>
        <Sidebar />
      </div>
      <div>
        <About />
        <CaseStudies />
      </div>
    </main>
  );
}
