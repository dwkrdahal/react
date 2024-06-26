import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if(uppercaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=~`[]{};,./<>?";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, uppercaseAllowed, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length,uppercaseAllowed, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}
          
          >Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 overflow-auto">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={99}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={uppercaseAllowed}
            id="caseInput"
            onChange={() => {
              setUppercaseAllowed((prev) => !prev)
            }}
             />
            <label htmlFor="caseInput">Uppercase</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
