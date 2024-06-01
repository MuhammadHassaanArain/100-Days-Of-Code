/*
Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

Explain & TIP: You can group multiple case statements together when they should execute the same block of code,
 which is handy for categorizing items into broader groups.
 */
// This function logs the season based on the month
function logSeason(month: number): void {
    switch (month) {
      case 12:
      case 1:
      case 2:
        console.log("Winter");
        break;
      case 3:
      case 4:
      case 5:
        console.log("Spring");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Summer");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Fall");
        break;
      default:
        console.log("Invalid month");
        break;
    }
  }
  
  logSeason(1); // Outputs: Winter
  logSeason(4); // Outputs: Spring
  logSeason(8); // Outputs: Summer
  logSeason(11); // Outputs: Fall
  logSeason(14); // Outputs: Invalid month
  // Multiple cases share the same code block to represent each season.