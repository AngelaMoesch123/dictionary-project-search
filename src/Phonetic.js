import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic.audio);
  function listen(event) {
    event.preventDefault();
  }
  return (
    <div className="Phonetic mb-4">
      <ReactAudioPlayer
        className="mt-3 mb-2"
        src={props.phonetic.audio}
        onPlay={listen}
        controls
      />
      <br />
      <span className="Text">{props.phonetic.text}</span>
    </div>
  );
}
