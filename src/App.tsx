//Import all components
import HeaderSection from "./components/HeaderSection";
import Sidebar from "./components/Sidebar";
import TextEditor from "./components/TextEditor";
function App() {
  return (
    <>
      <Sidebar />
      <div className=" z-30">
        <HeaderSection />
      </div>

      <TextEditor />
    </>
  );
}

export default App;
