function VaccineUpdate() {
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
      var formattedVaccineDates = [];

      vaccineDates.forEach(date => {
        var arrayVaccineDate = date.split("/");
        var vaccineDate = new Date(arrayVaccineDate[2], arrayVaccineDate[1] - 1, arrayVaccineDate[0]);
        formattedVaccineDates.push(vaccineDate);
      });

      if (today >= formattedVaccineDates[0]) {
        $('td.firstdate').css('background-color', '#ff7676');
        $('td.seconddate').css('background-color', '#ffd27f');

        /*bcg_1 Vaccine*/
        $('.table > tbody > tr > .bcg_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .bcg_1_child').show(120);
          return false;
        });

        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child').hide(120);
        });
        $('.bcg_1_given').click(function () {
          $('.table > tbody > tr > .bcg_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .bcg_1_child').hide(120);
          return false;
        });
        $('.bcg_1_notgiven').click(function () {
          $('.table > tbody > tr > .bcg_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .bcg_1_child').hide(120);
          return false;
        });

        /*hep_b_1 Vaccine*/
        $('.table > tbody > tr > .hep_b_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hep_b_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hep_b_1_child').hide(120);
        });
        $('.hep_b_1_given').click(function () {
          $('.table > tbody > tr > .hep_b_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hep_b_1_child').hide(120);

          return false;
        });
        $('.hep_b_1_notgiven').click(function () {
          $('.table > tbody > tr > .hep_b_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hep_b_1_child').hide(120);
          return false;
        });

        /*opv_1 Vaccine*/
        $('.table > tbody > tr > .opv_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_1_child').hide(120);
        });
        $('.opv_1_given').click(function () {
          $('.table > tbody > tr > .opv_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_1_child').hide(120);

          return false;
        });
        $('.opv_1_notgiven').click(function () {
          $('.table > tbody > tr > .opv_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[1]) {
        $('td.seconddate').css('background-color', '#ff7676');
        $('td.thirddate').css('background-color', '#ffd27f');

        /*hep_b_2 Vaccine*/
        $('.table > tbody > tr > .hep_b_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hep_b_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hep_b_2_child').hide(120);
        });
        $('.hep_b_2_given').click(function () {
          $('.table > tbody > tr > .hep_b_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hep_b_2_child').hide(120);

          return false;
        });
        $('.hep_b_2_notgiven').click(function () {
          $('.table > tbody > tr > .hep_b_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hep_b_2_child').hide(120);
          return false;
        });

        /*opv_2 Vaccine*/
        $('.table > tbody > tr > .opv_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_2_child').hide(120);
        });
        $('.opv_2_given').click(function () {
          $('.table > tbody > tr > .opv_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_2_child').hide(120);

          return false;
        });
        $('.opv_2_notgiven').click(function () {
          $('.table > tbody > tr > .opv_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_2_child').hide(120);
          return false;
        });

        /*dpt_1 Vaccine*/
        $('.table > tbody > tr > .dpt_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .dpt_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .dpt_1_child').hide(120);
        });
        $('.dpt_1_given').click(function () {
          $('.table > tbody > tr > .dpt_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .dpt_1_child').hide(120);

          return false;
        });
        $('.dpt_1_notgiven').click(function () {
          $('.table > tbody > tr > .dpt_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .dpt_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[2]) {
        $('td.thirddate').css('background-color', '#ff7676');
        $('td.fourthdate').css('background-color', '#ffd27f');

        /*ipv_1 Vaccine*/
        $('.table > tbody > tr > .ipv_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .ipv_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .ipv_1_child').hide(120);
        });
        $('.ipv_1_given').click(function () {
          $('.table > tbody > tr > .ipv_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .ipv_1_child').hide(120);

          return false;
        });
        $('.ipv_1_notgiven').click(function () {
          $('.table > tbody > tr > .ipv_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .ipv_1_child').hide(120);
          return false;
        });

        /*pneumococcal_1 Vaccine*/
        $('.table > tbody > tr > .pneumococcal_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .pneumococcal_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .pneumococcal_1_child').hide(120);
        });
        $('.pneumococcal_1_given').click(function () {
          $('.table > tbody > tr > .pneumococcal_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .pneumococcal_1_child').hide(120);

          return false;
        });
        $('.pneumococcal_1_notgiven').click(function () {
          $('.table > tbody > tr > .pneumococcal_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .pneumococcal_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[3]) {
        $('td.fourthdate').css('background-color', '#ff7676');
        $('td.fifthdate').css('background-color', '#ffd27f');

        /*rotavirus_1 Vaccine*/
        $('.table > tbody > tr > .rotavirus_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .rotavirus_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .rotavirus_1_child').hide(120);
        });
        $('.rotavirus_1_given').click(function () {
          $('.table > tbody > tr > .rotavirus_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .rotavirus_1_child').hide(120);

          return false;
        });
        $('.rotavirus_1_notgiven').click(function () {
          $('.table > tbody > tr > .rotavirus_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .rotavirus_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[4]) {
        $('td.fifthdate').css('background-color', '#ff7676');
        $('td.sixthdate').css('background-color', '#ffd27f');

        /*opv_3 Vaccine*/
        $('.table > tbody > tr > .opv_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_3_child').hide(120);
        });
        $('.opv_3_given').click(function () {
          $('.table > tbody > tr > .opv_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_3_child').hide(120);

          return false;
        });
        $('.opv_3_notgiven').click(function () {
          $('.table > tbody > tr > .opv_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_3_child').hide(120);
          return false;
        });

        /*dpt_2 Vaccine*/
        $('.table > tbody > tr > .dpt_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .dpt_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .dpt_2_child').hide(120);
        });
        $('.dpt_2_given').click(function () {
          $('.table > tbody > tr > .dpt_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .dpt_2_child').hide(120);

          return false;
        });
        $('.dpt_2_notgiven').click(function () {
          $('.table > tbody > tr > .dpt_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .dpt_2_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[5]) {
        $('td.sixthdate').css('background-color', '#ff7676');
        $('td.seventhdate').css('background-color', '#ffd27f');

        /*ipv_2 Vaccine*/
        $('.table > tbody > tr > .ipv_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .ipv_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .ipv_2_child').hide(120);
        });
        $('.ipv_2_given').click(function () {
          $('.table > tbody > tr > .ipv_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .ipv_2_child').hide(120);

          return false;
        });
        $('.ipv_2_notgiven').click(function () {
          $('.table > tbody > tr > .ipv_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .ipv_2_child').hide(120);
          return false;
        });

        /*pneumococcal_2 Vaccine*/
        $('.table > tbody > tr > .pneumococcal_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .pneumococcal_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .pneumococcal_2_child').hide(120);
        });
        $('.pneumococcal_2_given').click(function () {
          $('.table > tbody > tr > .pneumococcal_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .pneumococcal_2_child').hide(120);

          return false;
        });
        $('.pneumococcal_2_notgiven').click(function () {
          $('.table > tbody > tr > .pneumococcal_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .pneumococcal_2_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[6]) {
        $('td.seventhdate').css('background-color', '#ff7676');
        $('td.eighthdate').css('background-color', '#ffd27f');

        /*opv_4 Vaccine*/
        $('.table > tbody > tr > .opv_4_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_4_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_4_child').hide(120);
        });
        $('.opv_4_given').click(function () {
          $('.table > tbody > tr > .opv_4_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_4_child').hide(120);

          return false;
        });
        $('.opv_4_notgiven').click(function () {
          $('.table > tbody > tr > .opv_4_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_4_child').hide(120);
          return false;
        });

        /*dpt_3 Vaccine*/
        $('.table > tbody > tr > .dpt_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .dpt_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .dpt_3_child').hide(120);
        });
        $('.dpt_3_given').click(function () {
          $('.table > tbody > tr > .dpt_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .dpt_3_child').hide(120);

          return false;
        });
        $('.dpt_3_notgiven').click(function () {
          $('.table > tbody > tr > .dpt_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .dpt_3_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[7]) {
        $('td.eighthdate').css('background-color', '#ff7676');
        $('td.ninethdate').css('background-color', '#ffd27f');

        /*ipv_3 Vaccine*/
        $('.table > tbody > tr > .ipv_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .ipv_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .ipv_3_child').hide(120);
        });
        $('.ipv_3_given').click(function () {
          $('.table > tbody > tr > .ipv_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .ipv_3_child').hide(120);

          return false;
        });
        $('.ipv_3_notgiven').click(function () {
          $('.table > tbody > tr > .ipv_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .ipv_3_child').hide(120);
          return false;
        });

        /*pneumococcal_3 Vaccine*/
        $('.table > tbody > tr > .pneumococcal_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .pneumococcal_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .pneumococcal_3_child').hide(120);
        });
        $('.pneumococcal_3_given').click(function () {
          $('.table > tbody > tr > .pneumococcal_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .pneumococcal_3_child').hide(120);

          return false;
        });
        $('.pneumococcal_3_notgiven').click(function () {
          $('.table > tbody > tr > .pneumococcal_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .pneumococcal_3_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[8]) {
        $('td.ninethdate').css('background-color', '#ff7676');
        $('td.tenthdate').css('background-color', '#ffd27f');

        /*hib_1 Vaccine*/
        $('.table > tbody > tr > .hib_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hib_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hib_1_child').hide(120);
        });
        $('.hib_1_given').click(function () {
          $('.table > tbody > tr > .hib_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hib_1_child').hide(120);

          return false;
        });
        $('.hib_1_notgiven').click(function () {
          $('.table > tbody > tr > .hib_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hib_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[9]) {
        $('td.tenthdate').css('background-color', '#ff7676');
        $('td.eleventhdate').css('background-color', '#ffd27f');

        /*rotavirus_2 Vaccine*/
        $('.table > tbody > tr > .rotavirus_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .rotavirus_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .rotavirus_2_child').hide(120);
        });
        $('.rotavirus_2_given').click(function () {
          $('.table > tbody > tr > .rotavirus_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .rotavirus_2_child').hide(120);

          return false;
        });
        $('.rotavirus_2_notgiven').click(function () {
          $('.table > tbody > tr > .rotavirus_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .rotavirus_2_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[10]) {
        $('td.eleventhdate').css('background-color', '#ff7676');
        $('td.twelfthdate').css('background-color', '#ffd27f');

        /*opv_5 Vaccine*/
        $('.table > tbody > tr > .opv_5_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_5_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_5_child').hide(120);
        });
        $('.opv_5_given').click(function () {
          $('.table > tbody > tr > .opv_5_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_5_child').hide(120);

          return false;
        });
        $('.opv_5_notgiven').click(function () {
          $('.table > tbody > tr > .opv_5_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_5_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[11]) {
        $('td.twelfthdate').css('background-color', '#ff7676');
        $('td.thirteenthdate').css('background-color', '#ffd27f');

        /*hep_b_3 Vaccine*/
        $('.table > tbody > tr > .hep_b_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hep_b_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hep_b_3_child').hide(120);
        });
        $('.hep_b_3_given').click(function () {
          $('.table > tbody > tr > .hep_b_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hep_b_3_child').hide(120);

          return false;
        });
        $('.hep_b_3_notgiven').click(function () {
          $('.table > tbody > tr > .hep_b_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hep_b_3_child').hide(120);
          return false;
        });

        /*hib_2 Vaccine*/
        $('.table > tbody > tr > .hib_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hib_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hib_2_child').hide(120);
        });
        $('.hib_2_given').click(function () {
          $('.table > tbody > tr > .hib_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hib_2_child').hide(120);

          return false;
        });
        $('.hib_2_notgiven').click(function () {
          $('.table > tbody > tr > .hib_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hib_2_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[12]) {
        $('td.thirteenthdate').css('background-color', '#ff7676');
        $('td.fourteenthdate').css('background-color', '#ffd27f');

        /*hib_3 Vaccine*/
        $('.table > tbody > tr > .hib_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hib_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hib_3_child').hide(120);
        });
        $('.hib_3_given').click(function () {
          $('.table > tbody > tr > .hib_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hib_3_child').hide(120);

          return false;
        });
        $('.hib_3_notgiven').click(function () {
          $('.table > tbody > tr > .hib_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hib_3_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[13]) {
        $('td.fourteenthdate').css('background-color', '#ff7676');
        $('td.fifteenthdate').css('background-color', '#ffd27f');

        /* measles_1 Vaccine*/
        $('.table > tbody > tr > .measles_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .measles_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .measles_1_child').hide(120);
        });
        $('.measles_1_given').click(function () {
          $('.table > tbody > tr > .measles_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .measles_1_child').hide(120);

          return false;
        });
        $('.measles_1_notgiven').click(function () {
          $('.table > tbody > tr > .measles_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .measles_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[14]) {
        $('td.fifteenthdate').css('background-color', '#ff7676');
        $('td.sixteenthdate').css('background-color', '#ffd27f');

        /*hep_a_1 Vaccine*/
        $('.table > tbody > tr > .hep_a_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hep_a_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hep_a_1_child').hide(120);
        });
        $('.hep_a_1_given').click(function () {
          $('.table > tbody > tr > .hep_a_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hep_a_1_child').hide(120);

          return false;
        });
        $('.hep_a_1_notgiven').click(function () {
          $('.table > tbody > tr > .hep_a_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hep_a_1_child').hide(120);
          return false;
        });

        /* chickenpox_1 Vaccine*/
        $('.table > tbody > tr > .chickenpox_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .chickenpox_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .chickenpox_1_child').hide(120);
        });
        $('.chickenpox_1_given').click(function () {
          $('.table > tbody > tr > .chickenpox_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .chickenpox_1_child').hide(120);

          return false;
        });
        $('.chickenpox_1_notgiven').click(function () {
          $('.table > tbody > tr > .chickenpox_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .chickenpox_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[15]) {
        $('td.sixteenthdate').css('background-color', '#ff7676');
        $('td.seventeenthdate').css('background-color', '#ffd27f');

        /*hep_a_2 Vaccine*/
        $('.table > tbody > tr > .hep_a_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hep_a_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hep_a_2_child').hide(120);
        });
        $('.hep_a_2_given').click(function () {
          $('.table > tbody > tr > .hep_a_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hep_a_2_child').hide(120);

          return false;
        });
        $('.hep_a_2_notgiven').click(function () {
          $('.table > tbody > tr > .hep_a_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hep_a_2_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[16]) {
        $('td.seventeenthdate').css('background-color', '#ff7676');
        $('td.eighteenthdate').css('background-color', '#ffd27f');

        /*mmr_1 Vaccine*/
        $('.table > tbody > tr > .mmr_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .mmr_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .mmr_1_child').hide(120);
        });
        $('.mmr_1_given').click(function () {
          $('.table > tbody > tr > .mmr_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .mmr_1_child').hide(120);

          return false;
        });
        $('.mmr_1_notgiven').click(function () {
          $('.table > tbody > tr > .mmr_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .mmr_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[17]) {
        $('td.eighteenthdate').css('background-color', '#ff7676');
        $('td.nineteenthdate').css('background-color', '#ffd27f');

        /*hep_a_3 Vaccine*/
        $('.table > tbody > tr > .hep_a_3_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .hep_a_3_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .hep_a_3_child').hide(120);
        });
        $('.hep_a_3_given').click(function () {
          $('.table > tbody > tr > .hep_a_3_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .hep_a_3_child').hide(120);

          return false;
        });
        $('.hep_a_3_notgiven').click(function () {
          $('.table > tbody > tr > .hep_a_3_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .hep_a_3_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[18]) {
        $('td.nineteenthdate').css('background-color', '#ff7676');
        $('td.twentiethdate').css('background-color', '#ffd27f');

        /*dpt_booster_dose_1 Vaccine*/
        $('.table > tbody > tr > .dpt_booster_dose_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_1_child').hide(120);
        });
        $('.dpt_booster_dose_1_given').click(function () {
          $('.table > tbody > tr > .dpt_booster_dose_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_1_child').hide(120);

          return false;
        });
        $('.dpt_booster_dose_1_notgiven').click(function () {
          $('.table > tbody > tr > .dpt_booster_dose_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[19]) {
        $('td.twentiethdate').css('background-color', '#ff7676');
        $('td.twentyfirstdate').css('background-color', '#ffd27f');

        /*opv_booster_dose_1 Vaccine*/
        $('.table > tbody > tr > .opv_booster_dose_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_booster_dose_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_booster_dose_1_child').hide(120);
        });
        $('.opv_booster_dose_1_given').click(function () {
          $('.table > tbody > tr > .opv_booster_dose_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_booster_dose_1_child').hide(120);

          return false;
        });
        $('.opv_booster_dose_1_notgiven').click(function () {
          $('.table > tbody > tr > .opv_booster_dose_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_booster_dose_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[20]) {
        $('td.twentyfirstdate').css('background-color', '#ff7676');
        $('td.twentyseconddate').css('background-color', '#ffd27f');

        /*typhoid_1 Vaccine*/
        $('.table > tbody > tr > .typhoid_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .typhoid_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .typhoid_1_child').hide(120);
        });
        $('.typhoid_1_given').click(function () {
          $('.table > tbody > tr > .typhoid_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .typhoid_1_child').hide(120);

          return false;
        });
        $('.typhoid_1_notgiven').click(function () {
          $('.table > tbody > tr > .typhoid_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .typhoid_1_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[21]) {
        $('td.twentyseconddate').css('background-color', '#ff7676');
        $('td.twentythirddate').css('background-color', '#ffd27f');

        /*dpt_booster_dose_2 Vaccine*/
        $('.table > tbody > tr > .dpt_booster_dose_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_2_child').hide(120);
        });
        $('.dpt_booster_dose_2_given').click(function () {
          $('.table > tbody > tr > .dpt_booster_dose_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_2_child').hide(120);

          return false;
        });
        $('.dpt_booster_dose_2_notgiven').click(function () {
          $('.table > tbody > tr > .dpt_booster_dose_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .dpt_booster_dose_2_child').hide(120);
          return false;
        });

        /*opv_booster_dose_2 Vaccine*/
        $('.table > tbody > tr > .opv_booster_dose_2_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child, .table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .opv_booster_dose_2_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .opv_booster_dose_2_child').hide(120);
        });
        $('.opv_booster_dose_2_given').click(function () {
          $('.table > tbody > tr > .opv_booster_dose_2_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .opv_booster_dose_2_child').hide(120);

          return false;
        });
        $('.opv_booster_dose_2_notgiven').click(function () {
          $('.table > tbody > tr > .opv_booster_dose_2_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .opv_booster_dose_2_child').hide(120);
          return false;
        });
      }

      if (today >= formattedVaccineDates[22]) {
        $('td.twentythirddate').css('background-color', '#ff7676');

        /*td_vac_1 Vaccine*/
        $('.table > tbody > tr > .td_vac_1_parent').click(function () {
          $('.table > tbody > tr > .dropdown .bcg_1_child, .table > tbody > tr > .dropdown .hep_b_1_child, .table > tbody > tr > .dropdown .hep_b_2_child, .table > tbody > tr > .dropdown .hep_b_3_child, .table > tbody > tr > .dropdown .opv_1_child, .table > tbody > tr > .dropdown .opv_2_child, .table > tbody > tr > .dropdown .opv_3_child, .table > tbody > tr > .dropdown .opv_4_child, .table > tbody > tr > .dropdown .opv_5_child, .table > tbody > tr > .dropdown .opv_booster_dose_1_child, .table > tbody > tr > .dropdown .opv_booster_dose_2_child, .table > tbody > tr > .dropdown .dpt_1_child, .table > tbody > tr > .dropdown .dpt_2_child, .table > tbody > tr > .dropdown .dpt_3_child, .table > tbody > tr > .dropdown .dpt_booster_dose_1_child, .table > tbody > tr > .dropdown .dpt_booster_dose_2_child, .table > tbody > tr > .dropdown .hep_a_1_child, .table > tbody > tr > .dropdown .hep_a_2_child, .table > tbody > tr > .dropdown .hep_a_3_child, .table > tbody > tr > .dropdown .ipv_1_child, .table > tbody > tr > .dropdown .ipv_2_child, .table > tbody > tr > .dropdown .ipv_3_child, .table > tbody > tr > .dropdown .pneumococcal_1_child, .table > tbody > tr > .dropdown .pneumococcal_2_child, .table > tbody > tr > .dropdown .pneumococcal_3_child, .table > tbody > tr > .dropdown .hib_1_child, .table > tbody > tr > .dropdown .hib_2_child, .table > tbody > tr > .dropdown .hib_3_child, .table > tbody > tr > .dropdown .rotavirus_1_child, .table > tbody > tr > .dropdown .rotavirus_2_child, .table > tbody > tr > .dropdown .measles_1_child, .table > tbody > tr > .dropdown .chickenpox_1_child, .table > tbody > tr > .dropdown .mmr_1_child, .table > tbody > tr > .dropdown .typhoid_1_child').hide(120);
          $('.table > tbody > tr > .dropdown .td_vac_1_child').show(120);
          return false;
        });
        $(document).click(function () {
          $('.table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
        });
        $('.td_vac_1_given').click(function () {
          $('.table > tbody > tr > .td_vac_1_parent').css('background-color', '#99e999');
          $('.table > tbody > tr > .dropdown .td_vac_1_child').hide(120);

          return false;
        });
        $('.td_vac_1_notgiven').click(function () {
          $('.table > tbody > tr > .td_vac_1_parent').css('background-color', '#ff7676');
          $('.table > tbody > tr > .dropdown .td_vac_1_child').hide(120);
          return false;
        });
      }
    });

    $.get('/api/get_vaccine_status', (vaccineStatus) => {
      for (let vaccine in vaccineStatus) {
        if (vaccineStatus[vaccine] == 0) {
          $('td.' + vaccine + '_parent').css('background-color', '#ff7676');
        }
        if (vaccineStatus[vaccine] == 1) {
          $('td.' + vaccine + '_parent').css('background-color', '#99e999');
        }
      }
    });
  }
}
