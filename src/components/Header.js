import logo from '../../logo.jpg';
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <span className="nav-list">Home</span>
        <span className="nav-list">About us</span>
        <span className="nav-list">Contact Us</span>
        <span className="nav-list">Cart</span>
      </div>
    </div>
  );
};
export default Header;
