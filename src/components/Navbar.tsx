import { Link } from 'react-router';

const Navbar = (props: { active: string }) => {
  const { active } = props;
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              {['home', 'about', 'projects', 'articles', 'contact'].map(
                (item: string) => (
                  <li className={`nav-item ${active === item ? 'active' : ''}`}>
                    <Link to={item === 'home' ? `/` : `/${item}`}>
                      {item.toUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
