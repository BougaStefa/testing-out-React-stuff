import './Author.css';

function Author({author}) {
  return (
    <div className="author">
      <p id="author">- {author}</p>
    </div>
  );
}

export default Author;
