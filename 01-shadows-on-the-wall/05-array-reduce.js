// What is the truth?

const array = [{ name: "a", count: 100 }, { name: "b", count: 503 }];
let acc = {};
for (const item in array) {
  acc[item.name] = (acc[item.name] ?? 0) + item.count;
}


array.reduce((acc, item) => ({
  ...acc,
  [item.name]: (acc[item.name] ?? 0) + item.count,
}));
