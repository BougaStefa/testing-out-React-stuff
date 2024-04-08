import './QuoteText.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function QuoteText({quote}) {
  return (
    <div className="quote-text">
      <FontAwesomeIcon icon={faQuoteLeft} size='2x'/>
      <span id="text">{quote}</span>
    </div>
  );
}

export default QuoteText;
