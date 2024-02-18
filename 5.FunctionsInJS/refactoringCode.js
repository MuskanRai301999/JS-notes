/*Problem statement
For the given code, refactor and create all the functions with ES6 Arrow functions*/

function main() {
  let yearData = {};
  var createPerYearData = (year, total) => {
    yearData[year] = total;
  };

  var printReport = () => {
    console.log("Print Report");
  };

  var calculateTotalTillDate = (perYearBalance) => {
    let total = 0;
    for (let i = 0; i < perYearBalance.length; i++) {
      total += perYearBalance[i];
    }
    return total;
  };

  var adjustTotalOfYear = (year, adjustmentFactor) => {
    yearData[year] *= adjustmentFactor;
  };
  //Do not modify the code after this
  return {
    createPerYearData,
    printReport,
    calculateTotalTillDate,
    adjustTotalOfYear,
  };
}
