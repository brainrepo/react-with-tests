import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nContextProvider } from "../../contexts/i18nContext";

describe("<Sidebar/>", () => {
  it("can be loaded", () => {
    render(
      <I18nContextProvider>
        <Router>
          <Sidebar />
        </Router>
      </I18nContextProvider>
    );
    const podcasts = screen.getByText("Podcasts");
    expect(podcasts).toBeVisible();
    const configurations = screen.getByText("Configurations");
    expect(configurations).toBeVisible();
  });
  it("can match the snapshot", () => {
    const fragment = render(
      <I18nContextProvider>
        <Router>
          <Sidebar />
        </Router>
      </I18nContextProvider>
    ).asFragment();
    expect(fragment).toMatchSnapshot();
  });
});
