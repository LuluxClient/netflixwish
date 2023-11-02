import { Link } from "react-router-dom";

const OtherComponent = ({ title }) => {
  return <p>Bonjour, la recherche est {title}</p>;
};

const CustomNav = ({title}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Oui, {title}</Link>
        </li>
        <li>
          <Link to="/">Oui</Link>
        </li>
        <li>
          <Link to="/">Oui</Link>
        </li>
        <li>
          <Link to="/">Oui</Link>
        </li>
        <li>
          <Link to="/">Oui</Link>
        </li>
        <li>
          <Link to="/">Oui</Link>
        </li>
      </ul>
    </nav>
  );
};
export default CustomNav;
