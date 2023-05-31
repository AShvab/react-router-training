import { Suspense } from "react";
import { Container, Header, Link, Logo } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";

const { Outlet } = require("react-router-dom");

const SharedLayout = () => {
  return (
    <Container>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            background: '#360404',
            color: '#fff',
          },
        }}
      />
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

  export default SharedLayout;