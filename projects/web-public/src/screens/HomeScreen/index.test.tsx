import HomeScreen from "./index";
import { customRender } from "@alura/test-commons/react-test-library";

const render = customRender();

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
