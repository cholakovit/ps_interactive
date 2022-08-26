
import SkeletonsView from './SkeletonsView';
import { render } from "@testing-library/react";

test("Testing the SkeletonsView component", () => {
  render(<SkeletonsView flag={1} width={1100} height={200} />);
});