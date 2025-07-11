
import img from './Vector 1.png'
const Nav = () => {

    return (
        <div>
            <div className="navbar text-black shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Blog</a></li>
    
    
      </ul>
    </div>
    <a className="ml-60 text-2xl">devlop.me</a>
  </div>
  <div className="navbar-end hidden lg:flex ml-72">
    <ul className="menu menu-horizontal px-1">
         <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Blog</a></li>
    
    </ul>
  </div>
  <div className="navbar-end rounded-full">
    <a className="btn bg-white text-black rounded-full"><span><img  className='' src={img} alt="" /></span> Start Project</a>
  </div>
</div>
        </div>
    );
};

export default Nav;