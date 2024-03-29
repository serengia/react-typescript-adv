import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" />
      <Input id="age" label="Your age" />
      <hr />
      <Button el="button">Button</Button>
      <Button el="link">This is a Link</Button>
    </main>
  );
}

export default App;
