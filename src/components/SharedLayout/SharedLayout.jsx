import { Container, Header, Link, Logo } from "./SharedLayout.styled";

const { Outlet } = require("react-router-dom");

const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <Logo>
            <span role="img" aria-label="computer icon">
              💻
            </span>{" "}
            GoMerch Store
          </Logo>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
    );
  };

  export default SharedLayout;