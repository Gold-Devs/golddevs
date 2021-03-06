function calculate() {
  var fromDate = document.getElementById('fromDate').value;
  var toDate = document.getElementById('toDate').value;

  try {
    document.getElementById('result').innerHTML = '';

    var result = getDateDifference(new Date(fromDate), new Date(toDate));

    if (result && !isNaN(result.years)) {
      document.getElementById('result').innerHTML =
        result.years + ' year' + (result.years == 1 ? ' ' : 's ') +
        result.months + ' month' + (result.months == 1 ? ' ' : 's ') + 'and ' +
        result.days + ' day' + (result.days == 1 ? '' : 's');
    }
  } catch (e) {
    console.error(e);
  }
}

function getDateDifference(startDate, endDate) {
  if (startDate > endDate) {
    console.error('Start date must be before end date');
    return null;
  }
  var startYear = startDate.getFullYear();
  var startMonth = startDate.getMonth();
  var startDay = startDate.getDate();

  var endYear = endDate.getFullYear();
  var endMonth = endDate.getMonth();
  var endDay = endDate.getDate();

  // We calculate February based on end year as it might be a leep year which might influence the number of days.
  var february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28;
  var daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay;
  var years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0);

  var months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;

  // (12 + ...) % 12 makes sure index is always between 0 and 11
  var days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay;

  return {
    years: years,
    months: months,
    days: days
  };
}

{/* 

<p><input type="text" name="fromDate" id="fromDate" placeholder="yyyy-mm-dd" value="1999-02-28" /></p>
<p><input type="text" name="toDate" id="toDate" placeholder="yyyy-mm-dd" value="2000-03-01" /></p>
<p><input type="button" name="calculate" value="Calculate" onclick="javascript:calculate();" /></p>
<p />
<p id="result"></p>

 */}
