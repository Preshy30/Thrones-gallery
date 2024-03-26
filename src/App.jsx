import ScrollSection from "./components/Scroll/ScrollSection";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="font-bold w-full text-5xl text-[#00df9a] pb-10 pt-10 flex gap-5 items-center">
        <img
          className="rounded-full w-40 h-40"
          src="/Images/GOT logo.jpg"
          alt=""
        />{" "}
        GALLERY
      </h1>
      <ScrollSection />
    </div>
  );
}

export default App;
