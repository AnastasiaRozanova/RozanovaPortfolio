import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Switch, Route } from 'react-router-dom';

import { Sidebar } from './pages/Sidebar/Sidebar';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { SkillsPage } from './pages/SkillsPage/SkillsPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { Portfolio } from './pages/Portfolio/Portfolio';

const App = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/skills" render={() => <SkillsPage />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/contacts" render={() => <ContactPage />} />
      </Switch>
    </div>
  );
};

export default App;
