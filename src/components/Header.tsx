import { Link } from 'react-router-dom';

export default function Header(props: { name: string }) {
  return (
    <header>
      <Link to="/">
        <h1>{props.name}</h1>
      </Link>
      <p className="center-text">open to work</p>
      <div className="option">
        <Link to="/info">
          <p className="info">Info</p>
        </Link>
      </div>
    </header>
  );
}