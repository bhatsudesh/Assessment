import "./styles.css";

export default function App() {
  const capitalize = (str) => {
    // toUpperCase
    str = str.toLowerCase();
    let words = str
      .split(" ")
      .map((w) => `${w.charAt(0).toUpperCase()}${w.substring(1)}`);
    return words.join(" ");
  };
  return (
    <div className="App">
      <h1>{capitalize("heLLo codeSandbox")}</h1>
      <div className="container">
        <div className="box">A</div>
        <div className="box">B</div>
        <div className="box">C</div>
        <div className="box">D</div>
      </div>
    </div>
  );
}
