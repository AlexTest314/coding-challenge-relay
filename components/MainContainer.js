// @flow strict
import { memo } from "react";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

type Props = {
  children: React$Node
};

const MainContainer = ({ children }: Props): React$Node => {
  const router = useRouter();
  const handleCancel = () => router.push({ pathname: "/" });
  const handleCreateProduct = () => router.push({ pathname: "/create" });
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Button onClick={handleCancel}>Home</Button>
          <Button onClick={handleCreateProduct}>Create product</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth='xl'>{children}</Container>
    </>
  );
};

export default memo<Props>(MainContainer);
