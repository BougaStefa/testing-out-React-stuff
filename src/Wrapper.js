import './Wrapper.css';
import QuoteText from "./QuoteText";
import Author from "./Author";
import Buttons from "./Buttons";
import { useState,useEffect } from 'react';


const api_url = 'https://api.quotable.io/random';

function Wrapper() {

  const [quote,setQuote] = useState(null);
  const [author,setAuthor] = useState(null);

  
    async function getQuote(url){
      const response = await fetch(url);
      var data = await response.json();
      setQuote(data.content)
      setAuthor(data.author)
  }
  useEffect(()=>{
    getQuote(api_url)
  },[]);

  return (
    <div id="quote-box">
      <QuoteText quote={quote}/>
      <Author author={author}/>
      <Buttons getQuote={getQuote} quote={quote}/>
    </div>
  );
}

export default Wrapper;
