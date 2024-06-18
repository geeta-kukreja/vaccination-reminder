function CalendarSchedule() {
  this.getVaccineDates = (vaccineDates) => {
    console.log(vaccineDates);
  }

  // Load all vaccine data.
  this.load = () => {
    $.get('/api/get_vaccine_dates', (vaccineDates) => {
      var date = new Date();
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }

      var todayDateString = dd + '/' + mm + '/' + yyyy;
      var arrayTodayDate = todayDateString.split("/");
      var today = new Date(arrayTodayDate[2], arrayTodayDate[1] - 1, arrayTodayDate[0]);

      vaccineDates.forEach((date, index) => {
        var arrayVaccineDate = date.split("/");
        var vaccineDate = new Date(arrayVaccineDate[2], arrayVaccineDate[1] - 1, arrayVaccineDate[0]);
        if (today >= vaccineDate) {
          $('.panel-collapse').not('#collapse'+ (index+1)).removeClass('in');
          $('#collapse' + (index+1)).addClass('in');
          $('#collapse'+ (index+1)+ ' .panel-body .panel-content .panel-content-div').css('background-color', '#ff7676');
          $('#collapse'+ (index+2)+ ' .panel-body .panel-content .panel-content-div').css('background-color', '#ffd27f');
        }
      });
    });

    $.get('/api/get_vaccine_status', (vaccineStatus) => {
      for (let vaccine in vaccineStatus) {
        if (vaccineStatus[vaccine] == 0) {
          $('.panel-body .panel-content .' + vaccine).css('background-color', '#ff7676');
        }
        if (vaccineStatus[vaccine] == 1) {
          $('.panel-body .panel-content .' + vaccine).css('background-color', '#99e999');
        }
      }
    });
  }
}
