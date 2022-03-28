import "./styles.css";

export default function App() {
  const capitalize = (str) => {
    str = str.toLowerCase();
    let words = str
      .split(" ")
      .map((w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    return words.join(" ");
  };
  return (
    <div className="App">
      <h1>{capitalize("heLLo codeSandbox")}</h1>
      <div className="box">A</div>
      <div className="box">B</div>
    </div>
  );
}
