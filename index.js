function superbowlWin(array) {
  let rval;
  if (array.find((rec) => rec.result === "W")) {
    rval = array.find((rec) => rec.result === "W").year;
  }
  return rval;
}
