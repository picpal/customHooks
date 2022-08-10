import useSessionStorage from "./hooks/useSessionStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";

function App() {
  //useSessionStorage
  const [name, setName] = useSessionStorage("session_key", "1");
  useUpdateLogger(name);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
