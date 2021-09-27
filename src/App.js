import "./styles.css";
import { object, string, number, assert } from "superstruct";

export default function App() {
  const User = object({
    id: number(),
    name: string()
  });

  //Defining struct
  const data = {
    id: 42,
    name: "Jane Smith"
    // email: 'jane@example.com', it will throw error
  };

  assert(data, User);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
