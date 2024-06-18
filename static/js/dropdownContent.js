$(document).ready(function () {
  $("td:not(:empty)").css('background-color', '#e1e1e1'); /*For nonempty td*/
});

/* bcg_1 vaccine*/
function bcg_1() {
  $.post('/api/update_vaccine_status', { vaccine: 'bcg_1', status: 1 });
}
function bcg_0() {
  $.post('/api/update_vaccine_status', { vaccine: 'bcg_1', status: 0 });
}

/* hep_b_1 vaccine*/
function hep_b_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_b_1', status: 1 });
}
function hep_b_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_b_1', status: 0 });
}

/* opv_1 vaccine*/
function opv_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_1', status: 1 });
}
function opv_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_1', status: 0 });
}

/* hep_b_2 vaccine*/
function hep_b_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_b_2', status: 1 });
}
function hep_b_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_b_2', status: 0 });
}

/* opv_2 vaccine*/
function opv_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_2', status: 1 });
}
function opv_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_2', status: 0 });
}

/* dpt_1 vaccine*/
function dpt_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_1', status: 1 });
}
function dpt_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_1', status: 0 });
}

/* ipv_1 vaccine*/
function ipv_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'ipv_1', status: 1 });
}
function ipv_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'ipv_1', status: 0 });
}

/* pneumococcal_1 vaccine*/
function pneumococcal_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'pneumococcal_1', status: 1 });
}
function pneumococcal_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'pneumococcal_1', status: 0 });
}

/* rotavirus_1 vaccine*/
function rotavirus_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'rotavirus_1', status: 1 });
}
function rotavirus_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'rotavirus_1', status: 0 });
}

/* opv_3 vaccine*/
function opv_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_3', status: 1 });
}
function opv_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_3', status: 0 });
}

/* dpt_2 vaccine*/
function dpt_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_2', status: 1 });
}
function dpt_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_2', status: 0 });
}

/* ipv_2 vaccine*/
function ipv_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'ipv_2', status: 1 });
}
function ipv_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'ipv_2', status: 0 });
}

/* pneumococcal_2 vaccine*/
function pneumococcal_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'pneumococcal_2', status: 1 });
}
function pneumococcal_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'pneumococcal_2', status: 0 });
}

/* opv_4 vaccine*/
function opv_41() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_4', status: 1 });
}
function opv_40() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_4', status: 0 });
}

/* dpt_3 vaccine*/
function dpt_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_3', status: 1 });
}
function dpt_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_3', status: 0 });
}

/* ipv_3 vaccine*/
function ipv_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'ipv_3', status: 1 });
}
function ipv_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'ipv_3', status: 0 });
}

/* pneumococcal_3 vaccine*/
function pneumococcal_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'pneumococcal_3', status: 1 });
}
function pneumococcal_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'pneumococcal_3', status: 0 });
}

/* hib_1 vaccine*/
function hib_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'hib_1', status: 1 });
}
function hib_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'hib_1', status: 0 });
}

/* rotavirus_2 vaccine*/
function rotavirus_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'rotavirus_2', status: 1 });
}
function rotavirus_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'rotavirus_2', status: 0 });
}

/* opv_5 vaccine*/
function opv_51() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_5', status: 1 });
}
function opv_50() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_5', status: 0 });
}

/* hep_b_3 vaccine*/
function hep_b_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_b_3', status: 1 });
}
function hep_b_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_b_3', status: 0 });
}

/* hib_2 vaccine*/
function hib_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'hib_2', status: 1 });
}
function hib_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'hib_2', status: 0 });
}

/* hib_3 vaccine*/
function hib_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'hib_3', status: 1 });
}
function hib_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'hib_3', status: 0 });
}

/* measles_1 vaccine*/
function measles_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'measles_1', status: 1 });
}
function measles_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'measles_1', status: 0 });
}

/* hep_a_1 vaccine*/
function hep_a_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_a_1', status: 1 });
}
function hep_a_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_a_1', status: 0 });
}

/* chickenpox_1 vaccine*/
function chickenpox_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'chickenpox_1', status: 1 });
}
function chickenpox_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'chickenpox_1', status: 0 });
}

/* hep_a_2 vaccine*/
function hep_a_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_a_2', status: 1 });
}
function hep_a_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_a_2', status: 0 });
}

/* mmr_1 vaccine*/
function mmr_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'mmr_1', status: 1 });
}
function mmr_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'mmr_1', status: 0 });
}

/* hep_a_3 vaccine*/
function hep_a_31() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_a_3', status: 1 });
}
function hep_a_30() {
  $.post('/api/update_vaccine_status', { vaccine: 'hep_a_3', status: 0 });
}

/* dpt_booster_dose_1 vaccine*/
function dpt_booster_dose_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_booster_dose_1', status: 1 });
}
function dpt_booster_dose_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_booster_dose_1', status: 0 });
}

/* opv_booster_dose_1 vaccine*/
function opv_booster_dose_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_booster_dose_1', status: 1 });
}
function opv_booster_dose_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_booster_dose_1', status: 0 });
}

/* typhoid_1 vaccine*/
function typhoid_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'typhoid_1', status: 1 });
}
function typhoid_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'typhoid_1', status: 0 });
}

/* dpt_booster_dose_2 vaccine*/
function dpt_booster_dose_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_booster_dose_2', status: 1 });
}
function dpt_booster_dose_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'dpt_booster_dose_2', status: 0 });
}

/* opv_booster_dose_2 vaccine*/
function opv_booster_dose_21() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_booster_dose_2', status: 1 });
}
function opv_booster_dose_20() {
  $.post('/api/update_vaccine_status', { vaccine: 'opv_booster_dose_2', status: 0 });
}

/* td_vac_1 vaccine*/
function td_vac_11() {
  $.post('/api/update_vaccine_status', { vaccine: 'td_vac_1', status: 1 });
}
function td_vac_10() {
  $.post('/api/update_vaccine_status', { vaccine: 'td_vac_1', status: 0 });
}
