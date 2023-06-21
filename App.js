import './App.css';

let user = "Ayush bhandari"

function App() {
  return (
<>
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>

<div className="container">
  <h2>About {user}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore quo adipisci eos totam modi numquam provident ad dolor repellat.</p>
</div>


</>
  );
}

export default App;
