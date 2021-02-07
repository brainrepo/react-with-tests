import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import App from "../App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import {I18nContextProvider} from "../contexts/i18nContext"

let renderResult = null;
let history = null;

beforeEach(() => {
  history = createMemoryHistory();
  renderResult = render(
    <I18nContextProvider>
      <Router history={history}>
        <App />
      </Router>
    </I18nContextProvider>
  );
});

afterEach(cleanup);

describe("<App/>", () => {
  it("can match the snapshot", () => {
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
  it("can go to configuration area", async () => {
    const { getByText } = screen;
    const el = getByText(/Configurations/);
    fireEvent.click(el);
    await waitFor(() => getByText("Configuration area"));
    expect(getByText("Configuration area")).toBeVisible();
  });
});
