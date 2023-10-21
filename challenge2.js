function checkSpeed(speed) {
    // Check if the speed is less than 70 mph.
    if (speed < 70) {
      console.log("Ok");
    }
    // Check if the speed is greater than or equal to 70 mph.
    else {
      // Calculate the number of dem points.
      const demPoints = Math.floor((speed - 70) / 5);
      // Print the number of dem points.
      console.log(`Points: ${demPoints}`);
      // Check if the number of dem points is greater than 12.
      if (demPoints > 12) {
        console.log("License suspended");
      }
    }
  }
  // Get the speed of the car from the user.
  const speed = parseInt(prompt("Enter the speed of the car: "));
  // Check the speed of the car.
  checkSpeed(speed);