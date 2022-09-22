import {
  blueGrey,
  green,
  grey,
  indigo,
  pink,
  red,
  yellow,
} from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';
export const defaultTheme = createTheme({
  palette: {
    primary: { main: pink[500], contrastText: grey[50] },
    secondary: { main: pink[900] },
  },
});
export const snakeTheme = createTheme({
  palette: {
    primary: { main: green[500], contrastText: grey[50] },
    secondary: { main: green[900] },
  },
});
export const eagleTheme = createTheme({
  palette: {
    primary: { main: indigo[500], contrastText: grey[50] },
    secondary: { main: indigo[900] },
  },
});
export const badgerTheme = createTheme({
  palette: {
    primary: { main: yellow[500], contrastText: grey[50] },
    secondary: { main: yellow[900] },
  },
});
export const lionTheme = createTheme({
  palette: {
    primary: { main: red[500], contrastText: grey[50] },
    secondary: { main: red[900] },
  },
});
export const allTheme = createTheme({
  palette: {
    primary: { main: blueGrey[500], contrastText: grey[50] },
    secondary: { main: blueGrey[900] },
  },
});

export const allGameThemes = [
  allTheme,
  badgerTheme,
  eagleTheme,
  lionTheme,
  snakeTheme,
  defaultTheme,
];
