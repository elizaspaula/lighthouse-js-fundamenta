var countDown = 60;

while (countDown >= 0) {
  if (countDown === 50) {
    console.log("Orbiter transfers from ground to internal power.");
  } else if (countDown === 31) {
    console.log("Ground launch sequencer is go for auto sequence start.");
  } else {
    console.log("T-" + countDown + " seconds");
  }

  countDown--;
}
