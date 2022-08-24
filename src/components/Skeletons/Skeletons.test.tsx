import { describe, it } from "vitest";
import SkeletonsView from './SkeletonsView';
import { render } from "@testing-library/react";

describe("Testing the SkeletonsView component", () => {
    it("Render SkeletonsView", () => {
      render(<SkeletonsView flag={1} width={1100} height={200} />);
    });
});