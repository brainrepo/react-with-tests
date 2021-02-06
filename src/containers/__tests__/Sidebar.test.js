import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Sidebar/>", () => {
  it("can be loaded", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    const sidebar = screen.getByText("Fourviere");
    expect(sidebar).toBeVisible();
  });
  it("can match the snapshot", () => {
    const fragment = render(
      <Router>
        <Sidebar />
      </Router>
    ).asFragment();
    expect(fragment).toMatchSnapshot();
  });
});
