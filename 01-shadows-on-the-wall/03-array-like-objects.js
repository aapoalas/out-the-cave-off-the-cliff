// Is it the real world that you are looking at?

const a = { length: 0 };
a["0"] = 3;
a["1"] = 3;
a.length = 2;



const b = [];
b["0"] = 3;
b["1"] = 3;
a.length = 2;
