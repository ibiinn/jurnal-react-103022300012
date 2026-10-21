import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const n = 12;
  const jam = 9;
  const nama = "Bintang";
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="kantin">
          <style>

            
          </style>
          <div>
            <h1>Kantin {nama}</h1>
            <p>{"saldo awal kartu kantin : Rp. " + n * 1000}</p>
            <p>{jam < 12? "Selamat Pagi" : "Selamat Siang"}</p>
          </div>
          <button disabled type="button" className="btnBayar">
            bayar
          </button>
      </div>
    </>
  );
}

export default App;
