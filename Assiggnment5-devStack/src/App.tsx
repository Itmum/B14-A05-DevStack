import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TechStacks from "./components/TechStacks";
import type { ITech } from "./types/tech";

const techFetch = async (): Promise<ITech[]> => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>LOADING.......</h2>}>
        <TechStacks techPromise={techPromise}></TechStacks>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
