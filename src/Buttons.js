import "./Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const api_url = 'https://api.quotable.io/random';

const copyQuote = (text) => {
  navigator.clipboard.writeText(text);
  console.log(text)
  alert("Copied quote.")
}

function Buttons({getQuote,quote}) {
  return (
    <div className="buttons">
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote}`} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faTwitter} size='lg'/>
      </a>
      <button id="copy-quote" onClick={()=>copyQuote(quote)}><FontAwesomeIcon icon={faCopy} /></button>
      <button id="new-quote" onClick={() => getQuote(api_url)}>New Quote</button>
    </div>
  );
}

export default Buttons;
