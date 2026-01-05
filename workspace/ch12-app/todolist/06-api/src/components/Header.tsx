import { Link } from "react-router";

function Header() {
  return (
    <>
      <header>
        <h1>Todo List</h1>
        <nav>
          <div>
            <ul>
              <li><Link className="menu-dark" to="/">Home</Link></li>
              <li><Link className="menu" to="/about">About</Link></li>
              <li><Link className="menu" to="/todolist/todolist">TodoList</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;