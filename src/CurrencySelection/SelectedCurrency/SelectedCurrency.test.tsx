/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { shallow } from "enzyme";
import { SelectedCurrency } from "./SelectedCurrency";

describe("currencyComponent", () => {
  it("renders component with correct currency", () => {
    const onDeselect = jest.fn();
    const currency = "PLN" as any;
    const subject = shallow(<SelectedCurrency isoCurrency={currency} onDeselect={onDeselect} />);
    // TODO: As mentioned in the README.md, add a better way to select elements form tests
    expect(subject.find("div>div").at(0).text()).toEqual("PLN");
  });

  it("calls onDeselect function when clicked on x icon", () => {
    const onDeselect = jest.fn();
    const currency = {
      isoCurrency: "PLN" as any,
      selected: true,
    };
    const subject = shallow(<SelectedCurrency isoCurrency={currency.isoCurrency} onDeselect={onDeselect} />);

    subject.find("[data-role='deselect']").simulate("click");
    expect(onDeselect).toHaveBeenCalled();
  });
});
