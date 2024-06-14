function formatNumberWithCommas(amount: number) {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(amount);
}

export default formatNumberWithCommas;
