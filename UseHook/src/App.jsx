import { Suspense } from "react";
import "./App.css";
import UseHook from "./Components/UseHook";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              color: "red",
              fontSize: "20px",
            }}
          >
            ⏳ Loading GitHub profile....
          </div>
        }
      >
        <UseHook />
      </Suspense>
    </>
  );
}

export default App;
