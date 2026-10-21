import { useState } from "react";


function Panel(children, judul) {
  return (
    <>
     <div classname="panel">
       {judul && <h2>{judul}</h2>}{children}
     </div>
    </>
  );
}

export default App;
