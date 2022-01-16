import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/Theme'

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <Header></Header>
    </ThemeProvider>
    </div>
  );
}

export default App;
