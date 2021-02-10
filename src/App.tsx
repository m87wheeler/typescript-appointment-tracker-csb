import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalReset } from "./styles/Global";
import { StatusProvider } from "./context/StatusContext";
import { AppointmentProvider } from "./context/AppointmentContext/AppointmentContext";
import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";

import EntriesPage from "./pages/EntriesPage/EntriesPage";
import EntryPage from "./pages/EntryPage/EntryPage";

export default function App() {
  return (
    <>
      <GlobalReset />
      <StatusProvider>
        <AppointmentProvider>
          <Theme>
            <Router>
              <Layout>
                <Switch>
                  <Route exact path="/" component={EntriesPage} />
                  <Route exact path="/:sa" component={EntryPage} />
                </Switch>
              </Layout>
            </Router>
          </Theme>
        </AppointmentProvider>
      </StatusProvider>
    </>
  );
}
