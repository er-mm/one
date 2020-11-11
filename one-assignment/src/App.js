import React, {useState, useEffect} from 'react';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Blogs} from './components/Blogs';
import { Header} from './components/Header';
import { Blog} from './components/Blog';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/posts')
    .then(res => res.json())
    .then(data => setData(data));
},[]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" render={(props) => <Blogs {...props} data={data}/>} />
        <Route path={`/:id`} render={(props) => <Blog {...props} data={data}/>}>
        </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
