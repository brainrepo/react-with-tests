import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <h1>Fourviere</h1>
      <ul>
        <li>
            <Link to="/" alt="">Podcasts</Link>
        </li>
        <li>
            <Link to="/configurations" alt="">Configurations</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
