/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, mount } from "enzyme";
import { CurrencySelection } from "./CurrencySelection";
import { IsoCurrency } from "./Currency/Currency";

const currencies = [
  IsoCurrency.CZK,
  IsoCurrency.DKK,
  IsoCurrency.EUR,
  IsoCurrency.GBP,
  IsoCurrency.GEL,
  IsoCurrency.PLN,
  IsoCurrency.RUB,
  IsoCurrency.SEK,
  IsoCurrency.USD,
];

describe("CurrencySelection", () => {
  it("renders selected component", () => {
  const subject = render(<CurrencySelection currencies={currencies} />);
    expect(subject).toMatchSnapshot();
  });

  it("updates state when currencies are selected/deselect", () => {
  const subject = mount(<CurrencySelection currencies={currencies} />);
  subject.find("div > div").at(3).simulate("click");
  const selectedCurrencies = (subject.state() as any).currencies.filter((c: any) => c.selected);
    expect(selectedCurrencies).toHaveLength(1);
  });
});
