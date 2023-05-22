//Import all components
import HeaderSection from "./components/HeaderSection";
import Sidebar from "./components/Sidebar";
import TextEditor from "./components/TextEditor";
function App() {
  return (
    <>
      <div className=" z-50">
        <HeaderSection />
      </div>
      <Sidebar />
      <TextEditor />
    </>
  );
}

export default App;
