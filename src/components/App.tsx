import { Actions } from "./actions/actions";
import { Info } from "./info/Info";
import { Keyboard } from "./keyboard/Keyboard";

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
