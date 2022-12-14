// Styled Elements
import {
  MaterialUISwitch,
  PsFormControlLabel,
  PsAppBar,
} from "./Header.styles";

// MUI Elements
import { Container } from "@mui/material";

// Context for the Theme
import { ColorModeContext } from "../../helper/Context";

// Hooks
import { useContext } from "react";

// Types
import { colorModeProps } from "../../store/types";

const HeaderView = () => {
  const colorMode: colorModeProps = useContext(ColorModeContext);

  return (
    <PsAppBar>
      <Container>
        <PsFormControlLabel
          label=""
          onClick={colorMode.toggleColorMode}
          control={<MaterialUISwitch defaultChecked />}
          data-testid="button"
        />
      </Container>
    </PsAppBar>
  );
};

export default HeaderView;
