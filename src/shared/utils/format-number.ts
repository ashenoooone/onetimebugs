const format = new Intl.NumberFormat("en-US", {
  style: "decimal",
  useGrouping: true,
});

export const formatNumber = (number: number) => {
  return format.format(number).replace(",", " ");
};
