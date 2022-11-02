import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "😝": "Squinting Face with Tongue"
};

let emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    // console.log(meaning);
    setMeaning(meaning);
    if (meaning === undefined) {
      meaning = `"we don't have this emoji in our dictionary"`;
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <div>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "40px", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
