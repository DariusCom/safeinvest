export const sortInvestments = (name, list) => {
  if (name === "name") {
    return list.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (name === "ticker") {
    return list.sort((a, b) => (a.ticker > b.ticker ? 1 : -1));
  } else if (name === "total gain") {
    return list.sort((a, b) => b.gain[0] - a.gain[0]);
  } else if (name === "shares") {
    return list.sort((a, b) => b.shares - a.shares);
  } else if (name === "price") {
    return list.sort((a, b) => b.price - a.price);
  } else if (name === "cost per share") {
    return list.sort((a, b) => b.cps - a.cps);
  } else if (name === "market value") {
    return list.sort((a, b) => b.value - a.value);
  } else if (name === "% of portfolio") {
    return list.sort((a, b) => b.percent - a.percent);
  }
};
