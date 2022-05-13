import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const getLocale = () => {
  return navigator.language || navigator.userLanguage;
};

getLocale();

ReactDOM.render(
  <IntlProvider
    locale={getLocale()}
    messages={getLocale() === "es" ? localeEsMessages : localeEnMessages}
  >
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
