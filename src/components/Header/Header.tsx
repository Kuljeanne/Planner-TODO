import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../ThemeContext/ThemeContext';

export function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </div>
  );
}
