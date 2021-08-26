const bins = {
  waste: 10,
  recycling: 15,
  compost: 20,
};

const trash = "recycling";

const smartGarbage = function (trash, bins) {
  if (trash === "waste") {
    bins.waste++;
  } else if (trash === "recycling") {
    bins.recycling++;
  } else if (trash == "compost") {
    bins.compost++;
  }
  return bins;
};
console.log(
  smartGarbage("recycling", { waste: 10, recycling: 15, compost: 20 })
);
