import KartuMenu from "./assets/components/KartuMenu.jsx";
import Panel from "./assets/components/PanelHarga.jsx";
import labelHarga from "./assets/components/LabelHarga.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <panel judul="Menu hari ini">
      <KartuMenu
        nama="Bakso"
        harga={10000 + n * 100}
        kategori="Makanan"
      ></KartuMenu>
    </panel>
  );
}

export default App;
