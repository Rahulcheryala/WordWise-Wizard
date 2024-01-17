import React, { useState } from "react";
import "./Textarea.css";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const changedTo = (event) => {
    Counter(event.target.value);
    setText(event.target.value);
    // displays the text you have entered (REMEMBER IT !!!)
  };

  const convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const trimAllSpaces = () => {
    const trimmedString = text.replace(/\s+/g, " ");
    setText(trimmedString);
    Counter(trimmedString);
  };

  const clearText = () => {
    const newText = "";
    setText(newText);
    Counter(newText);
  };

  const copyText = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlertMessage("Copied to Clipboard", "primary");
  };

  const Counter = (text) => {
    if (text.trim() === "") {
      setWordCount(0);
    }
    let charCount = text.length;
    setCharCount(charCount);

    let wordsArray = text.split(/\s+[a-zA-Z]/g);
    const wordCount = wordsArray.filter((word) => word.trim() !== "").length;
    setWordCount(wordCount);

    const sentencesArray = text.split(/[.!?]\s+[A-Z]/g);
    const sentenceCount = sentencesArray.filter(
      (sentence) => sentence.trim() !== ""
    ).length;
    setSentenceCount(sentenceCount);

    const paragraphsArray = text.split(/\n|\n\n|\r\n\r\n/g);
    const paragraphsCount = paragraphsArray.filter(
      (paragraph) => paragraph.trim() !== ""
    ).length;
    setParagraphCount(paragraphsCount);
  };
  return (
    <>
      <div className="container mt-3 px-0 d-flex w-100">
        <div className="mt-5 w-75 mx-auto">
          <h1
            // className={`m-0 h-auto text-${
            //   props.mode === "dark" ? "dark" : "white"
            // }`}
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Enter the text to analyze
          </h1>
          <div className="container p-0 mt-4">
            {/* <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label> */}
            <textarea
              className="form-control border "
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="Start typing, or copy and paste your document here..."
              value={text}
              onChange={changedTo}
            ></textarea>
          </div>
          <div className="container d-flex mt-3 p-0">
            <button className="btn btn-primary" onClick={convertToUppercase}>
              To UPPER CASE
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={convertToLowercase}
            >
              To LOWER CASE
            </button>
            <button className="btn btn-primary ms-2" onClick={trimAllSpaces}>
              Trim ALL SPACES
            </button>
            <button className="btn btn-primary ms-2" onClick={clearText}>
              Clear Text
            </button>
            <button className="btn btn-primary ms-2" onClick={copyText}>
              Copy to Clip Board
            </button>
          </div>
        </div>
        <div className="container mt-5 ps-4 w-25 p-0">
          <h3 className={`text-${props.mode === "dark" ? "white" : "black"}`}>
            Your text Summary
          </h3>
          <p
            className={`text-${props.mode === "dark" ? "white" : "black"} mb-5`}
          >
            <b>{wordCount}</b> words, <b>{charCount}</b> characters
          </p>
          <div className="container w-100 p-0">
            <h2
              className={`text-${
                props.mode === "dark" ? "white" : "black"
              } mb-3`}
            >
              Details
            </h2>
            <table className="table table-light border border-dark w-100 ">
              <tbody>
                <tr>
                  <th scope="row">Words</th>
                  <td>
                    <b>{wordCount}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Characters</th>
                  <td>
                    <b>{charCount}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sentences</th>
                  <td>
                    <b>{sentenceCount}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Paragraphs</th>
                  <td>
                    <b>{paragraphCount}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Reading Time</th>
                  <td>
                    <b>{Math.round(0.008 * wordCount * 60)} sec</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Speaking Time</th>
                  <td>
                    <b>{Math.round(0.009 * wordCount * 60)} sec</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
