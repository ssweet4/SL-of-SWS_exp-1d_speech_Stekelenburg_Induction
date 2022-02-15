/*********************************/
/***** Target-Detection Task *****/
/*********************************/
/*
The target-detection task is a more implicit measure
of learning. Participants hear shorter streams of
sounds, similar to those heard in the exposure/
training phase. On each trial, a specific sound serves as
the 'target'. Participants must press
the spacebar as quickly as possible whenever they
hear the target sound. RTs should be FASTER for
sounds that appear at the ends of 'words'.

Outputs the final procedure variable (TD_FINAL) as
well as a folder for audio preloading (return_td_sounds();)

Simply push TD_FINAL to your timeline in your html file,
and assign a variable to the preloading audio folder -
e.g., var td_sounds = return_td_sounds();

Stephen Van Hedger, June 2021
*/

///////////////////////////////////////////////
// Randomly Select Stimuli from Larger Lists //
///////////////////////////////////////////////

//Counterbalance A
var TD_TA_A = [
	{file: 'sounds/A/TD/TA_01_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [5,7,11,14], targRT: [3600,5400,9000,11700], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_02_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [6,8,10,15], targRT: [4500,6300,8100,12600], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_03_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,5,7,12], targRT: [900,3600,5400,9900], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_04_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [6,8,12,14], targRT: [4500,6300,9900,11700], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_05_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [4,6,8,15], targRT: [2700,4500,6300,12600], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_06_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,4,11,13], targRT: [900,2700,9000,10800], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_07_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,7,13,15], targRT: [900,5400,10800,12600], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_08_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,7,13,15], targRT: [1800,5400,10800,12600], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_09_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [7,9,11,15], targRT: [5400,7200,9000,12600], targSYL: 'TA', SYL_POS: 1},
	{file: 'sounds/A/TD/TA_10_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [7,10,13,15], targRT: [5400,8100,10800,12600], targSYL: 'TA', SYL_POS: 1}
];

var TD_FU_A = [
	{file: 'sounds/A/TD/FU_01_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [2,5,9,14], targRT: [1200,3900,7500,12000], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_02_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [7,11,13,15], targRT: [5700,9300,11100,12900], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_03_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [7,9,11,14], targRT: [5700,7500,9300,12000], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_04_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [3,6,9,14], targRT: [2100,4800,7500,12000], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_05_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [5,7,9,14], targRT: [3900,5700,7500,12000], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_06_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [2,5,8,13], targRT: [1200,3900,6600,11100], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_07_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [3,5,9,14], targRT: [2100,3900,7500,12000], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_08_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [6,8,12,15], targRT: [4800,6600,10200,12900], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_09_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [4,10,12,15], targRT: [3000,8400,10200,12900], targSYL: 'FU', SYL_POS: 2},
	{file: 'sounds/A/TD/FU_10_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [7,9,12,15], targRT: [5700,7500,10200,12900], targSYL: 'FU', SYL_POS: 2}
];

var TD_KO_A = [
	{file: 'sounds/A/TD/KO_01_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [4,6,11,13], targRT: [3300,5100,9600,11400], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_02_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,4,7,9], targRT: [1500,3300,6000,7800], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_03_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [5,8,12,15], targRT: [4200,6900,10500,13200], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_04_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [6,9,12,15], targRT: [5100,7800,10500,13200], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_05_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [4,6,12,14], targRT: [3300,5100,10500,12300], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_06_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [4,8,13,15], targRT: [3300,6900,11400,13200], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_07_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [4,8,10,13], targRT: [3300,6900,8700,11400], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_08_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,5,8,10], targRT: [2400,4200,6900,8700], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_09_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [4,6,10,15], targRT: [3300,5100,8700,13200], targSYL: 'KO', SYL_POS: 3},
	{file: 'sounds/A/TD/KO_10_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,5,11,14], targRT: [1500,4200,9600,12300], targSYL: 'KO', SYL_POS: 3}
];

var TD_RE_A = [
	{file: 'sounds/A/TD/RE_01_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,7,10,14], targRT: [2700,5400,8100,11700], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_02_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,4,6,14], targRT: [900,2700,4500,11700], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_03_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,7,12,15], targRT: [900,5400,9900,12600], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_04_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,4,7,13], targRT: [900,2700,5400,10800], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_05_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,4,10,15], targRT: [900,2700,8100,12600], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_06_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [5,8,10,13], targRT: [3600,6300,8100,10800], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_07_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,7,9,15], targRT: [2700,5400,7200,12600], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_08_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,8,12,14], targRT: [900,6300,9900,11700], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_09_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [6,11,13,15], targRT: [4500,9000,10800,12600], targSYL: 'RE', SYL_POS: 1},
	{file: 'sounds/A/TD/RE_10_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,4,6,15], targRT: [900,2700,4500,12600], targSYL: 'RE', SYL_POS: 1}
];

var TD_GE_A = [
	{file: 'sounds/A/TD/GE_01_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,5,11,14], targRT: [2100,3900,9300,12000], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_02_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,5,7,13], targRT: [2100,3900,5700,11100], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_03_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,9,11,13], targRT: [3000,7500,9300,11100], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_04_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [5,7,9,11], targRT: [3900,5700,7500,9300], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_05_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,6,8,12], targRT: [1200,4800,6600,10200], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_06_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,6,10,15], targRT: [2100,4800,8400,12900], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_07_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,5,12,15], targRT: [2100,3900,10200,12900], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_08_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,6,9,12], targRT: [3000,4800,7500,10200], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_09_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,7,10,15], targRT: [3000,5700,8400,12900], targSYL: 'GE', SYL_POS: 2},
	{file: 'sounds/A/TD/GE_10_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,8,12,14], targRT: [3000,6600,10200,12000], targSYL: 'GE', SYL_POS: 2}
];

var TD_ME_A = [
	{file: 'sounds/A/TD/ME_01_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,7,12,14], targRT: [1500,6000,10500,12300], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_02_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [4,6,13,15], targRT: [3300,5100,11400,13200], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_03_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [4,6,10,14], targRT: [3300,5100,8700,12300], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_04_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,5,10,12], targRT: [1500,4200,8700,10500], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_05_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,5,7,10], targRT: [1500,4200,6000,8700], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_06_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [3,6,12,14], targRT: [2400,5100,10500,12300], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_07_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [7,9,13,15], targRT: [6000,7800,11400,13200], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_08_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,9,12,14], targRT: [1500,7800,10500,12300], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_09_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [3,9,11,15], targRT: [2400,7800,9600,13200], targSYL: 'ME', SYL_POS: 3},
	{file: 'sounds/A/TD/ME_10_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,6,9,14], targRT: [1500,5100,7800,12300], targSYL: 'ME', SYL_POS: 3}
];

var TD_RU_A = [
	{file: 'sounds/A/TD/RU_01_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [4,8,11,14], targRT: [2700,6300,9000,11700], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_02_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,7,9,14], targRT: [900,5400,7200,11700], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_03_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [3,7,9,11], targRT: [1800,5400,7200,9000], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_04_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [4,7,10,13], targRT: [2700,5400,8100,10800], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_05_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [5,10,12,14], targRT: [3600,8100,9900,11700], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_06_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [7,9,12,14], targRT: [5400,7200,9900,11700], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_07_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [3,8,10,13], targRT: [1800,6300,8100,10800], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_08_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,5,8,12], targRT: [900,3600,6300,9900], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_09_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,5,9,11], targRT: [900,3600,7200,9000], targSYL: 'RU', SYL_POS: 1},
	{file: 'sounds/A/TD/RU_10_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,7,9,15], targRT: [900,5400,7200,12600], targSYL: 'RU', SYL_POS: 1}
];

var TD_PU_A = [
	{file: 'sounds/A/TD/PU_01_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [5,8,11,15], targRT: [3900,6600,9300,12900], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_02_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,7,9,13], targRT: [1200,5700,7500,11100], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_03_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [5,7,11,13], targRT: [3900,5700,9300,11100], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_04_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,7,9,11], targRT: [1200,5700,7500,9300], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_05_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [6,9,11,15], targRT: [4800,7500,9300,12900], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_06_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,9,12,15], targRT: [1200,7500,10200,12900], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_07_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,6,8,15], targRT: [1200,4800,6600,12900], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_08_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,7,9,12], targRT: [1200,5700,7500,10200], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_09_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,10,13,15], targRT: [2100,8400,11100,12900], targSYL: 'PU', SYL_POS: 2},
	{file: 'sounds/A/TD/PU_10_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,6,9,12], targRT: [2100,4800,7500,10200], targSYL: 'PU', SYL_POS: 2}
];

var TD_NI_A = [
	{file: 'sounds/A/TD/NI_01_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,10,12,15], targRT: [1500,8700,10500,13200], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_02_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [5,8,11,13], targRT: [4200,6900,9600,11400], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_03_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,9,11,14], targRT: [2400,7800,9600,12300], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_04_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,8,10,14], targRT: [2400,6900,8700,12300], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_05_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [6,8,13,15], targRT: [5100,6900,11400,13200], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_06_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,8,10,12], targRT: [1500,6900,8700,10500], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_07_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,8,12,15], targRT: [3300,6900,10500,13200], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_08_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,8,11,15], targRT: [3300,6900,9600,13200], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_09_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,5,7,12], targRT: [2400,4200,6000,10500], targSYL: 'NI', SYL_POS: 3},
	{file: 'sounds/A/TD/NI_10_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,8,11,14], targRT: [2400,6900,9600,12300], targSYL: 'NI', SYL_POS: 3}
];

var TD_FE_A = [
	{file: 'sounds/A/TD/FE_01_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,4,8,14], targRT: [900,2700,6300,11700], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_02_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,4,7,15], targRT: [900,2700,5400,12600], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_03_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,7,11,14], targRT: [1800,5400,9000,11700], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_04_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [4,9,12,15], targRT: [2700,7200,9900,12600], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_05_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [6,9,13,15], targRT: [4500,7200,10800,12600], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_06_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,5,7,13], targRT: [900,3600,5400,10800], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_07_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,8,11,15], targRT: [1800,6300,9000,12600], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_08_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,6,8,14], targRT: [1800,4500,6300,11700], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_09_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,4,6,9], targRT: [900,2700,4500,7200], targSYL: 'FE', SYL_POS: 1},
	{file: 'sounds/A/TD/FE_10_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,9,11,14], targRT: [900,7200,9000,11700], targSYL: 'FE', SYL_POS: 1}
];

var TD_TI_A = [
	{file: 'sounds/A/TD/TI_01_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,5,9,15], targRT: [1200,3900,7500,12900], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_02_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,10,13,15], targRT: [3000,8400,11100,12900], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_03_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,8,11,15], targRT: [1200,6600,9300,12900], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_04_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,7,11,13], targRT: [2100,5700,9300,11100], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_05_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,5,10,13], targRT: [1200,3900,8400,11100], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_06_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,9,13,15], targRT: [2100,7500,11100,12900], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_07_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,7,11,14], targRT: [1200,5700,9300,12000], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_08_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,6,10,13], targRT: [3000,4800,8400,11100], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_09_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,7,9,14], targRT: [3000,5700,7500,12000], targSYL: 'TI', SYL_POS: 2},
	{file: 'sounds/A/TD/TI_10_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,8,11,13], targRT: [3000,6600,9300,11100], targSYL: 'TI', SYL_POS: 2}
];

var TD_SU_A = [
	{file: 'sounds/A/TD/SU_01_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,6,8,10], targRT: [2400,5100,6900,8700], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_02_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,4,9,14], targRT: [1500,3300,7800,12300], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_03_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,6,10,13], targRT: [1500,5100,8700,11400], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_04_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [6,8,11,15], targRT: [5100,6900,9600,13200], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_05_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,5,9,13], targRT: [1500,4200,7800,11400], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_06_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [5,8,10,15], targRT: [4200,6900,8700,13200], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_07_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,7,12,14], targRT: [2400,6000,10500,12300], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_08_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [9,11,13,15], targRT: [7800,9600,11400,13200], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_09_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,4,9,11], targRT: [1500,3300,7800,9600], targSYL: 'SU', SYL_POS: 3},
	{file: 'sounds/A/TD/SU_10_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,5,12,14], targRT: [2400,4200,10500,12300], targSYL: 'SU', SYL_POS: 3}
];

//Counterbalance B
var TD_FU_B = [
	{file: 'sounds/B/TD/FU_01_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [5,8,12,15], targRT: [3600,6300,9900,12600], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_02_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [2,6,11,13], targRT: [900,4500,9000,10800], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_03_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [5,7,11,14], targRT: [3600,5400,9000,11700], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_04_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [2,8,10,15], targRT: [900,6300,8100,12600], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_05_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [6,9,12,15], targRT: [4500,7200,9900,12600], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_06_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [2,6,9,14], targRT: [900,4500,7200,11700], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_07_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [6,10,12,15], targRT: [4500,8100,9900,12600], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_08_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [3,6,9,11], targRT: [1800,4500,7200,9000], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_09_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [3,7,10,14], targRT: [1800,5400,8100,11700], targSYL: 'FU', SYL_POS: 1},
	{file: 'sounds/B/TD/FU_10_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [8,10,13,15], targRT: [6300,8100,10800,12600], targSYL: 'FU', SYL_POS: 1}
];

var TD_KO_B = [
	{file: 'sounds/B/TD/KO_01_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [4,9,12,14], targRT: [3000,7500,10200,12000], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_02_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,7,12,15], targRT: [1200,5700,10200,12900], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_03_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,4,9,11], targRT: [1200,3000,7500,9300], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_04_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,4,8,11], targRT: [1200,3000,6600,9300], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_05_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [5,7,10,15], targRT: [3900,5700,8400,12900], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_06_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,5,9,14], targRT: [2100,3900,7500,12000], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_07_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,5,7,14], targRT: [2100,3900,5700,12000], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_08_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,6,10,13], targRT: [2100,4800,8400,11100], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_09_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [5,9,12,14], targRT: [3900,7500,10200,12000], targSYL: 'KO', SYL_POS: 2},
	{file: 'sounds/B/TD/KO_10_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,5,9,11], targRT: [2100,3900,7500,9300], targSYL: 'KO', SYL_POS: 2}
];

var TD_TA_B = [
	{file: 'sounds/B/TD/TA_01_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,9,11,13], targRT: [2400,7800,9600,11400], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_02_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,4,11,13], targRT: [1500,3300,9600,11400], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_03_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,8,13,15], targRT: [1500,6900,11400,13200], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_04_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,5,8,11], targRT: [1500,4200,6900,9600], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_05_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,6,9,15], targRT: [1500,5100,7800,13200], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_06_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,5,7,12], targRT: [2400,4200,6000,10500], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_07_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,6,11,15], targRT: [1500,5100,9600,13200], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_08_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,6,8,12], targRT: [1500,5100,6900,10500], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_09_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [4,6,8,10], targRT: [3300,5100,6900,8700], targSYL: 'TA', SYL_POS: 3},
	{file: 'sounds/B/TD/TA_10_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [5,7,9,15], targRT: [4200,6000,7800,13200], targSYL: 'TA', SYL_POS: 3}
];

var TD_GE_B = [
	{file: 'sounds/B/TD/GE_01_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,6,8,10], targRT: [900,4500,6300,8100], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_02_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [5,10,12,15], targRT: [3600,8100,9900,12600], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_03_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,8,10,13], targRT: [2700,6300,8100,10800], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_04_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,6,11,14], targRT: [1800,4500,9000,11700], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_05_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [7,9,13,15], targRT: [5400,7200,10800,12600], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_06_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,7,10,15], targRT: [1800,5400,8100,12600], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_07_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,6,8,13], targRT: [900,4500,6300,10800], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_08_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [5,8,11,14], targRT: [3600,6300,9000,11700], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_09_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [5,8,12,14], targRT: [3600,6300,9900,11700], targSYL: 'GE', SYL_POS: 1},
	{file: 'sounds/B/TD/GE_10_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,7,11,15], targRT: [900,5400,9000,12600], targSYL: 'GE', SYL_POS: 1}
];

var TD_ME_B = [
	{file: 'sounds/B/TD/ME_01_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,8,10,13], targRT: [1200,6600,8400,11100], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_02_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [5,7,13,15], targRT: [3900,5700,11100,12900], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_03_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [3,6,8,11], targRT: [2100,4800,6600,9300], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_04_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,4,8,14], targRT: [1200,3000,6600,12000], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_05_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [4,11,13,15], targRT: [3000,9300,11100,12900], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_06_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [3,5,10,14], targRT: [2100,3900,8400,12000], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_07_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,7,9,11], targRT: [1200,5700,7500,9300], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_08_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,8,11,15], targRT: [1200,6600,9300,12900], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_09_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,11,13,15], targRT: [1200,9300,11100,12900], targSYL: 'ME', SYL_POS: 2},
	{file: 'sounds/B/TD/ME_10_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [5,7,9,13], targRT: [3900,5700,7500,11100], targSYL: 'ME', SYL_POS: 2}
];

var TD_RE_B = [
	{file: 'sounds/B/TD/RE_01_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,4,7,15], targRT: [1500,3300,6000,13200], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_02_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,7,11,13], targRT: [3300,6000,9600,11400], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_03_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [5,8,13,15], targRT: [4200,6900,11400,13200], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_04_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,7,9,14], targRT: [1500,6000,7800,12300], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_05_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,6,9,11], targRT: [3300,5100,7800,9600], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_06_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,6,9,13], targRT: [1500,5100,7800,11400], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_07_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [3,9,13,15], targRT: [2400,7800,11400,13200], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_08_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,4,9,15], targRT: [1500,3300,7800,13200], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_09_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [7,9,11,15], targRT: [6000,7800,9600,13200], targSYL: 'RE', SYL_POS: 3},
	{file: 'sounds/B/TD/RE_10_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [3,9,11,15], targRT: [2400,7800,9600,13200], targSYL: 'RE', SYL_POS: 3}
];

var TD_PU_B = [
	{file: 'sounds/B/TD/PU_01_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,5,7,13], targRT: [1800,3600,5400,10800], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_02_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,4,7,12], targRT: [900,2700,5400,9900], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_03_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [5,8,11,13], targRT: [3600,6300,9000,10800], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_04_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,8,12,15], targRT: [1800,6300,9900,12600], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_05_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [5,8,10,14], targRT: [3600,6300,8100,11700], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_06_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,6,8,14], targRT: [1800,4500,6300,11700], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_07_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,4,6,12], targRT: [900,2700,4500,9900], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_08_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [6,8,10,15], targRT: [4500,6300,8100,12600], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_09_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,5,9,12], targRT: [1800,3600,7200,9900], targSYL: 'PU', SYL_POS: 1},
	{file: 'sounds/B/TD/PU_10_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [4,7,11,14], targRT: [2700,5400,9000,11700], targSYL: 'PU', SYL_POS: 1}
];

var TD_NI_B = [
	{file: 'sounds/B/TD/NI_01_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,5,8,13], targRT: [1200,3900,6600,11100], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_02_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [5,7,11,13], targRT: [3900,5700,9300,11100], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_03_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [6,8,10,13], targRT: [4800,6600,8400,11100], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_04_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,10,12,15], targRT: [3000,8400,10200,12900], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_05_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,8,12,14], targRT: [3000,6600,10200,12000], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_06_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,5,8,15], targRT: [2100,3900,6600,12900], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_07_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,6,13,15], targRT: [3000,4800,11100,12900], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_08_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,7,11,13], targRT: [2100,5700,9300,11100], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_09_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,7,13,15], targRT: [2100,5700,11100,12900], targSYL: 'NI', SYL_POS: 2},
	{file: 'sounds/B/TD/NI_10_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,9,11,15], targRT: [1200,7500,9300,12900], targSYL: 'NI', SYL_POS: 2}
];

var TD_RU_B = [
	{file: 'sounds/B/TD/RU_01_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [4,7,9,11], targRT: [3300,6000,7800,9600], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_02_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,5,8,14], targRT: [1500,4200,6900,12300], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_03_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,4,6,9], targRT: [1500,3300,5100,7800], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_04_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [3,7,9,15], targRT: [2400,6000,7800,13200], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_05_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [3,6,13,15], targRT: [2400,5100,11400,13200], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_06_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [3,7,9,12], targRT: [2400,6000,7800,10500], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_07_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [4,6,12,14], targRT: [3300,5100,10500,12300], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_08_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [6,8,12,14], targRT: [5100,6900,10500,12300], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_09_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [6,9,13,15], targRT: [5100,7800,11400,13200], targSYL: 'RU', SYL_POS: 3},
	{file: 'sounds/B/TD/RU_10_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [5,10,13,15], targRT: [4200,8700,11400,13200], targSYL: 'RU', SYL_POS: 3}
];

var TD_TI_B = [
	{file: 'sounds/B/TD/TI_01_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,8,13,15], targRT: [1800,6300,10800,12600], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_02_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [6,8,11,14], targRT: [4500,6300,9000,11700], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_03_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,5,7,11], targRT: [900,3600,5400,9000], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_04_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,9,11,14], targRT: [900,7200,9000,11700], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_05_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,4,7,13], targRT: [900,2700,5400,10800], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_06_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,6,12,15], targRT: [1800,4500,9900,12600], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_07_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,7,11,15], targRT: [2700,5400,9000,12600], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_08_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,5,10,14], targRT: [900,3600,8100,11700], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_09_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,5,10,13], targRT: [1800,3600,8100,10800], targSYL: 'TI', SYL_POS: 1},
	{file: 'sounds/B/TD/TI_10_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,4,11,14], targRT: [900,2700,9000,11700], targSYL: 'TI', SYL_POS: 1}
];

var TD_SU_B = [
	{file: 'sounds/B/TD/SU_01_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,7,10,14], targRT: [1200,5700,8400,12000], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_02_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [5,7,9,11], targRT: [3900,5700,7500,9300], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_03_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,6,11,15], targRT: [2100,4800,9300,12900], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_04_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [4,9,11,15], targRT: [3000,7500,9300,12900], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_05_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [4,6,8,12], targRT: [3000,4800,6600,10200], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_06_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [5,10,12,14], targRT: [3900,8400,10200,12000], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_07_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,4,9,12], targRT: [1200,3000,7500,10200], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_08_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,5,10,12], targRT: [1200,3900,8400,10200], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_09_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,5,9,15], targRT: [2100,3900,7500,12900], targSYL: 'SU', SYL_POS: 2},
	{file: 'sounds/B/TD/SU_10_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [4,7,12,15], targRT: [3000,5700,10200,12900], targSYL: 'SU', SYL_POS: 2}
];

var TD_FE_B = [
	{file: 'sounds/B/TD/FE_01_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [5,9,12,15], targRT: [4200,7800,10500,13200], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_02_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,4,7,10], targRT: [1500,3300,6000,8700], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_03_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,5,8,10], targRT: [1500,4200,6900,8700], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_04_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,5,10,12], targRT: [2400,4200,8700,10500], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_05_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [4,9,11,13], targRT: [3300,7800,9600,11400], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_06_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,6,10,14], targRT: [2400,5100,8700,12300], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_07_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [4,8,11,14], targRT: [3300,6900,9600,12300], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_08_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,5,9,14], targRT: [1500,4200,7800,12300], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_09_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [4,6,10,13], targRT: [3300,5100,8700,11400], targSYL: 'FE', SYL_POS: 3},
	{file: 'sounds/B/TD/FE_10_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,9,12,15], targRT: [2400,7800,10500,13200], targSYL: 'FE', SYL_POS: 3}
];

//Counterbalance C
var TD_KO_C = [
	{file: 'sounds/C/TD/KO_01_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,8,10,15], targRT: [1800,6300,8100,12600], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_02_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,5,10,13], targRT: [1800,3600,8100,10800], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_03_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,7,12,14], targRT: [1800,5400,9900,11700], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_04_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,4,10,13], targRT: [900,2700,8100,10800], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_05_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [3,5,7,12], targRT: [1800,3600,5400,9900], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_06_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,8,10,14], targRT: [900,6300,8100,11700], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_07_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,7,11,15], targRT: [900,5400,9000,12600], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_08_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [7,9,12,15], targRT: [5400,7200,9900,12600], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_09_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [2,4,7,13], targRT: [900,2700,5400,10800], targSYL: 'KO', SYL_POS: 1},
	{file: 'sounds/C/TD/KO_10_TD.mp3', exemplar: 'sounds/syllables/ko_SWS.wav', targetLOC: [6,9,11,14], targRT: [4500,7200,9000,11700], targSYL: 'KO', SYL_POS: 1}
];

var TD_TA_C = [
	{file: 'sounds/C/TD/TA_01_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,5,12,14], targRT: [2100,3900,10200,12000], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_02_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [4,7,11,14], targRT: [3000,5700,9300,12000], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_03_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [7,10,12,14], targRT: [5700,8400,10200,12000], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_04_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,5,7,10], targRT: [1200,3900,5700,8400], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_05_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [4,8,11,14], targRT: [3000,6600,9300,12000], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_06_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,6,12,14], targRT: [2100,4800,10200,12000], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_07_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [2,5,8,13], targRT: [1200,3900,6600,11100], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_08_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,8,10,14], targRT: [2100,6600,8400,12000], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_09_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [3,7,11,13], targRT: [2100,5700,9300,11100], targSYL: 'TA', SYL_POS: 2},
	{file: 'sounds/C/TD/TA_10_TD.mp3', exemplar: 'sounds/syllables/ta_SWS.wav', targetLOC: [6,8,10,13], targRT: [4800,6600,8400,11100], targSYL: 'TA', SYL_POS: 2}
];

var TD_FU_C = [
	{file: 'sounds/C/TD/FU_01_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [4,7,11,13], targRT: [3300,6000,9600,11400], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_02_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [2,8,11,15], targRT: [1500,6900,9600,13200], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_03_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [4,7,10,14], targRT: [3300,6000,8700,12300], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_04_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [4,7,10,12], targRT: [3300,6000,8700,10500], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_05_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [6,8,11,15], targRT: [5100,6900,9600,13200], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_06_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [6,8,10,14], targRT: [5100,6900,8700,12300], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_07_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [3,5,8,11], targRT: [2400,4200,6900,9600], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_08_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [3,7,9,12], targRT: [2400,6000,7800,10500], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_09_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [5,8,12,15], targRT: [4200,6900,10500,13200], targSYL: 'FU', SYL_POS: 3},
	{file: 'sounds/C/TD/FU_10_TD.mp3', exemplar: 'sounds/syllables/fu_SWS.wav', targetLOC: [6,10,12,15], targRT: [5100,8700,10500,13200], targSYL: 'FU', SYL_POS: 3}
];

var TD_ME_C = [
	{file: 'sounds/C/TD/ME_01_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [5,10,13,15], targRT: [3600,8100,10800,12600], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_02_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [3,8,12,14], targRT: [1800,6300,9900,11700], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_03_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [4,6,9,14], targRT: [2700,4500,7200,11700], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_04_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [6,10,13,15], targRT: [4500,8100,10800,12600], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_05_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,6,8,11], targRT: [900,4500,6300,9000], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_06_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [3,6,8,11], targRT: [1800,4500,6300,9000], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_07_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,8,10,12], targRT: [900,6300,8100,9900], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_08_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [5,9,12,15], targRT: [3600,7200,9900,12600], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_09_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,4,11,13], targRT: [900,2700,9000,10800], targSYL: 'ME', SYL_POS: 1},
	{file: 'sounds/C/TD/ME_10_TD.mp3', exemplar: 'sounds/syllables/me_SWS.wav', targetLOC: [2,8,13,15], targRT: [900,6300,10800,12600], targSYL: 'ME', SYL_POS: 1}
];

var TD_RE_C = [
	{file: 'sounds/C/TD/RE_01_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [3,11,13,15], targRT: [2100,9300,11100,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_02_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,7,9,13], targRT: [3000,5700,7500,11100], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_03_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [3,6,11,15], targRT: [2100,4800,9300,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_04_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,7,13,15], targRT: [1200,5700,11100,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_05_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [3,6,12,15], targRT: [2100,4800,10200,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_06_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [3,6,8,15], targRT: [2100,4800,6600,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_07_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,5,7,12], targRT: [1200,3900,5700,10200], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_08_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [2,5,9,15], targRT: [1200,3900,7500,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_09_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,6,12,15], targRT: [3000,4800,10200,12900], targSYL: 'RE', SYL_POS: 2},
	{file: 'sounds/C/TD/RE_10_TD.mp3', exemplar: 'sounds/syllables/re_SWS.wav', targetLOC: [4,7,10,13], targRT: [3000,5700,8400,11100], targSYL: 'RE', SYL_POS: 2}
];

var TD_GE_C = [
	{file: 'sounds/C/TD/GE_01_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [5,10,12,14], targRT: [4200,8700,10500,12300], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_02_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,8,12,15], targRT: [2400,6900,10500,13200], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_03_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,10,12,14], targRT: [1500,8700,10500,12300], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_04_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,6,8,12], targRT: [1500,5100,6900,10500], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_05_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,4,8,15], targRT: [1500,3300,6900,13200], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_06_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [2,7,9,12], targRT: [1500,6000,7800,10500], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_07_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [3,5,11,14], targRT: [2400,4200,9600,12300], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_08_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,6,8,12], targRT: [3300,5100,6900,10500], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_09_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [4,6,8,14], targRT: [3300,5100,6900,12300], targSYL: 'GE', SYL_POS: 3},
	{file: 'sounds/C/TD/GE_10_TD.mp3', exemplar: 'sounds/syllables/ge_SWS.wav', targetLOC: [5,7,13,15], targRT: [4200,6000,11400,13200], targSYL: 'GE', SYL_POS: 3}
];

var TD_NI_C = [
	{file: 'sounds/C/TD/NI_01_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,6,11,13], targRT: [2700,4500,9000,10800], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_02_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,5,8,12], targRT: [900,3600,6300,9900], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_03_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [4,7,9,15], targRT: [2700,5400,7200,12600], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_04_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,4,12,14], targRT: [900,2700,9900,11700], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_05_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [3,5,11,13], targRT: [1800,3600,9000,10800], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_06_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,9,11,14], targRT: [900,7200,9000,11700], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_07_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [5,7,9,13], targRT: [3600,5400,7200,10800], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_08_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,4,10,15], targRT: [900,2700,8100,12600], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_09_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [5,7,10,14], targRT: [3600,5400,8100,11700], targSYL: 'NI', SYL_POS: 1},
	{file: 'sounds/C/TD/NI_10_TD.mp3', exemplar: 'sounds/syllables/ni_SWS.wav', targetLOC: [2,7,11,13], targRT: [900,5400,9000,10800], targSYL: 'NI', SYL_POS: 1}
];

var TD_RU_C = [
	{file: 'sounds/C/TD/RU_01_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,7,9,14], targRT: [1200,5700,7500,12000], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_02_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,4,6,10], targRT: [1200,3000,4800,8400], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_03_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,5,10,12], targRT: [1200,3900,8400,10200], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_04_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,6,10,14], targRT: [1200,4800,8400,12000], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_05_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,6,11,13], targRT: [1200,4800,9300,11100], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_06_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [6,9,11,13], targRT: [4800,7500,9300,11100], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_07_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,8,11,14], targRT: [1200,6600,9300,12000], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_08_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [2,5,7,13], targRT: [1200,3900,5700,11100], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_09_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [5,8,10,15], targRT: [3900,6600,8400,12900], targSYL: 'RU', SYL_POS: 2},
	{file: 'sounds/C/TD/RU_10_TD.mp3', exemplar: 'sounds/syllables/ru_SWS.wav', targetLOC: [4,7,12,14], targRT: [3000,5700,10200,12000], targSYL: 'RU', SYL_POS: 2}
];

var TD_PU_C = [
	{file: 'sounds/C/TD/PU_01_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [4,7,9,11], targRT: [3300,6000,7800,9600], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_02_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,5,8,15], targRT: [2400,4200,6900,13200], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_03_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [4,8,12,15], targRT: [3300,6900,10500,13200], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_04_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,7,9,15], targRT: [1500,6000,7800,13200], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_05_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,10,13,15], targRT: [1500,8700,11400,13200], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_06_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [3,5,10,12], targRT: [2400,4200,8700,10500], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_07_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,6,11,15], targRT: [1500,5100,9600,13200], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_08_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [4,8,10,12], targRT: [3300,6900,8700,10500], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_09_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [4,11,13,15], targRT: [3300,9600,11400,13200], targSYL: 'PU', SYL_POS: 3},
	{file: 'sounds/C/TD/PU_10_TD.mp3', exemplar: 'sounds/syllables/pu_SWS.wav', targetLOC: [2,4,6,9], targRT: [1500,3300,5100,7800], targSYL: 'PU', SYL_POS: 3}
];

var TD_SU_C = [
	{file: 'sounds/C/TD/SU_01_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,5,9,15], targRT: [1800,3600,7200,12600], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_02_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [2,7,10,14], targRT: [900,5400,8100,11700], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_03_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [7,9,11,13], targRT: [5400,7200,9000,10800], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_04_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [5,7,10,15], targRT: [3600,5400,8100,12600], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_05_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [3,6,8,13], targRT: [1800,4500,6300,10800], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_06_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [4,8,11,15], targRT: [2700,6300,9000,12600], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_07_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [4,9,11,13], targRT: [2700,7200,9000,10800], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_08_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [4,6,11,14], targRT: [2700,4500,9000,11700], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_09_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [7,10,13,15], targRT: [5400,8100,10800,12600], targSYL: 'SU', SYL_POS: 1},
	{file: 'sounds/C/TD/SU_10_TD.mp3', exemplar: 'sounds/syllables/su_SWS.wav', targetLOC: [5,8,10,12], targRT: [3600,6300,8100,9900], targSYL: 'SU', SYL_POS: 1}
];

var TD_FE_C = [
	{file: 'sounds/C/TD/FE_01_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,10,12,15], targRT: [2100,8400,10200,12900], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_02_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,5,7,11], targRT: [1200,3900,5700,9300], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_03_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [6,8,11,13], targRT: [4800,6600,9300,11100], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_04_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [2,7,12,15], targRT: [1200,5700,10200,12900], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_05_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,7,11,14], targRT: [2100,5700,9300,12000], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_06_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [3,5,7,13], targRT: [2100,3900,5700,11100], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_07_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [5,7,10,13], targRT: [3900,5700,8400,11100], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_08_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [5,8,11,15], targRT: [3900,6600,9300,12900], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_09_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [5,8,12,14], targRT: [3900,6600,10200,12000], targSYL: 'FE', SYL_POS: 2},
	{file: 'sounds/C/TD/FE_10_TD.mp3', exemplar: 'sounds/syllables/fe_SWS.wav', targetLOC: [6,8,10,12], targRT: [4800,6600,8400,10200], targSYL: 'FE', SYL_POS: 2}
];

var TD_TI_C = [
	{file: 'sounds/C/TD/TI_01_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,4,12,15], targRT: [1500,3300,10500,13200], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_02_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,7,12,15], targRT: [3300,6000,10500,13200], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_03_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,8,13,15], targRT: [2400,6900,11400,13200], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_04_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,5,8,12], targRT: [2400,4200,6900,10500], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_05_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [4,6,10,14], targRT: [3300,5100,8700,12300], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_06_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [3,5,9,14], targRT: [2400,4200,7800,12300], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_07_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,6,10,13], targRT: [1500,5100,8700,11400], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_08_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,8,10,13], targRT: [1500,6900,8700,11400], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_09_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,5,7,14], targRT: [1500,4200,6000,12300], targSYL: 'TI', SYL_POS: 3},
	{file: 'sounds/C/TD/TI_10_TD.mp3', exemplar: 'sounds/syllables/ti_SWS.wav', targetLOC: [2,5,11,13], targRT: [1500,4200,9600,11400], targSYL: 'TI', SYL_POS: 3}
];

//Dynamically select stimuli based on counterbalancing
if (counterbalance == 1){
	TD_TA = TD_TA_A;
	TD_FU = TD_FU_A;
	TD_KO = TD_KO_A;
	TD_RE = TD_RE_A;
	TD_GE = TD_GE_A;
	TD_ME = TD_ME_A;
	TD_RU = TD_RU_A;
	TD_PU = TD_PU_A;
	TD_NI = TD_NI_A;
	TD_FE = TD_FE_A;
	TD_TI = TD_TI_A;
	TD_SU = TD_SU_A;
} else if (counterbalance == 2){
	TD_TA = TD_TA_B;
	TD_FU = TD_FU_B;
	TD_KO = TD_KO_B;
	TD_RE = TD_RE_B;
	TD_GE = TD_GE_B;
	TD_ME = TD_ME_B;
	TD_RU = TD_RU_B;
	TD_PU = TD_PU_B;
	TD_NI = TD_NI_B;
	TD_FE = TD_FE_B;
	TD_TI = TD_TI_B;
	TD_SU = TD_SU_B;
} else {
	TD_TA = TD_TA_C;
	TD_FU = TD_FU_C;
	TD_KO = TD_KO_C;
	TD_RE = TD_RE_C;
	TD_GE = TD_GE_C;
	TD_ME = TD_ME_C;
	TD_RU = TD_RU_C;
	TD_PU = TD_PU_C;
	TD_NI = TD_NI_C;
	TD_FE = TD_FE_C;
	TD_TI = TD_TI_C;
	TD_SU = TD_SU_C;
}


//Now, let's randomly select three trials from each for the main target detection task
TD_TA = jsPsych.randomization.sampleWithoutReplacement(TD_TA, 3);
TD_FU = jsPsych.randomization.sampleWithoutReplacement(TD_FU, 3);
TD_KO = jsPsych.randomization.sampleWithoutReplacement(TD_KO, 3);
TD_RE = jsPsych.randomization.sampleWithoutReplacement(TD_RE, 3);
TD_GE = jsPsych.randomization.sampleWithoutReplacement(TD_GE, 3);
TD_ME = jsPsych.randomization.sampleWithoutReplacement(TD_ME, 3);
TD_RU = jsPsych.randomization.sampleWithoutReplacement(TD_RU, 3);
TD_PU = jsPsych.randomization.sampleWithoutReplacement(TD_PU, 3);
TD_NI = jsPsych.randomization.sampleWithoutReplacement(TD_NI, 3);
TD_FE = jsPsych.randomization.sampleWithoutReplacement(TD_FE, 3);
TD_TI = jsPsych.randomization.sampleWithoutReplacement(TD_TI, 3);
TD_SU = jsPsych.randomization.sampleWithoutReplacement(TD_SU, 3);

//Append all syllables to one variable, then randomize it
var TD_VAR = [...TD_TA, ...TD_FU, ...TD_KO, ...TD_RE, ...TD_GE, ...TD_ME, ...TD_RU, ...TD_PU, ...TD_NI, ...TD_FE, ...TD_TI, ...TD_SU];
TD_VAR_FINAL = jsPsych.randomization.shuffle(TD_VAR);

//Should you do something with preloading audio here? probably -- extract the TD strings here and then preload in the main script

var TD_AUD = [];

for(var i=0; i<TD_VAR.length; i++){
	TD_AUD.push(TD_VAR[i].file);
}


///////////////////////
// DEFINE THE TRIALS //
///////////////////////

//Introduction Screens

var td_counter = 1; //for counting the number of trials
var syllableRef; //updating the to-be-displayed syllable
var phoneticRef; //updating the to-be-displayed phonetic pronounciation


var rtCounter = 0; //used for updating RT array
var rtCurrent = []; //the actual RT array

var TD_Intro_01 = {
	type: 'html-button-response',
	stimulus: '<p>You will now listen to longer sound sequences.</p>'+
			  '<p>Each sound sequence will last about 16 seconds.</p>'+
			  '<p>On each trial, you will be given a <u>TARGET SOUND</u>. Your task is to listen very carefully for this sound.</p>'+
			  '<p>Every time you hear the <u>TARGET SOUND</u>, you will press the <b>SPACEBAR</b> as quickly and accurately as you can.</p>',
	choices: ['Continue'],
	post_trial_gap: 250
}

var TD_Intro_02 = {
	type: 'html-button-response',
	stimulus: '<p>It is very important that you make your responses as quickly and accurately as possible.</p>'+
			  '<p>To help you make your responses, you will be able to listen to the <u>TARGET SOUND</u> at the beginning of each trial.</p>'+
			  '<p>There will be 36 total trials.</p>'+
			  '<p><b>Note: This is meant to be a difficult task. We simply want you to try your best.</p>',
	choices: ['Continue'],
	post_trial_gap: 250,
	on_finish: function(){td_counter = 1;}
};

var currentExemplar; //for storing current exemplar to be played prior to the trial
var numPlays = 0; //to log the number of times the participant plays the noise-vocoded speech sample

function playExemplar() {
	var playE = currentExemplar;
	console.log(playE);
	var audio = document.getElementById('playerEXEMPLAR');
	document.getElementById('playerEXEMPLAR').src = playE;
	audio.play(); //this actually plays the file
	//Log the button press in an ongoing array for the trial
	numPlays += 1;
};

//Main Procedure Screens
var TD_setup = {
	type: 'html-button-response',
	data: {SYLLABLE: jsPsych.timelineVariable('targSYL'), EXEMPLAR: jsPsych.timelineVariable('exemplar'), TD_LOCS: jsPsych.timelineVariable('targRT'), TD_TYPE: jsPsych.timelineVariable('SYL_POS')},
	stimulus: function(){return '<p>Trial '+td_counter+' of 36</p>';},
	choices: ['Continue'],
	on_finish: function(data){
		syllableRef = data.SYLLABLE;
		td_counter += 1;
		currentExemplar = data.EXEMPLAR;
		numPlays = 0;
	}
};





var TD_trial_intro_01 = {
	type: 'html-keyboard-response',
	stimulus: '',
	data: {SYLLABLE: jsPsych.timelineVariable('targSYL'),  TD_LOCS: jsPsych.timelineVariable('targRT'), TD_TYPE: jsPsych.timelineVariable('SYL_POS')},
	choices: ['p'],
	prompt: "<p>Press P on the keyboard to listen to the <u>TARGET SOUND</u> for the current trial.</p>"
};

var TD_play_exemplar = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('exemplar'),
	trial_ends_after_audio: true,
	choices: jsPsych.NO_KEYS,
	on_finish: function(){
		numPlays += 1
	}
};

var loop_toggle;

var TD_replay_option = {
	type: 'html-keyboard-response',
	stimulus: '<p>To replay the <u>TARGET SOUND</u>, press P.</p> When you are ready to begin, press SPACEBAR.',
	choices: [' ', 'p'],
	post_trial_gap: 500,
	on_finish: function(data){
		loop_toggle = data.key_press;
	}
};

var TD_exemplar_loop = {
	timeline: [TD_play_exemplar, TD_replay_option],
	loop_function: function(data){
		if(loop_toggle == 80){ //80 is 'p'
			return true;
		}else {
			return false;
		}
		}
	};




/////////////////////////////////////////
// MAIN RESPONSE SCREEN FOR TD TRIALS ///
/////////////////////////////////////////


var after_response = function(info){
	rtCurrent[rtCounter] = info.rt;
	rtCounter += 1;
	};


var TD_trial_MAIN = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('file'),
	data: {SYLLABLE: jsPsych.timelineVariable('targSYL'), TD_LOCS: jsPsych.timelineVariable('targRT'), TD_TYPE: jsPsych.timelineVariable('SYL_POS')},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>+++</p>',
	on_start: function(){
		//here is a function to listen for a keyboard response
		var listener_id = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function:after_response,
			valid_responses: [' '],
			rt_method: 'performance',
			persist: true
			});
		},
	on_finish: function(data){
		//let's compare the RTs to the known locations of the targets
		var targRTs = data.TD_LOCS; //make sure the target locations actually exist
		var userRTs = rtCurrent; //make sure the actual user RTs are being logged
		var userRTsString = rtCurrent.toString();
		var newChar = '_';
		var userRTsdata = userRTsString.split(',').join(newChar);

		var normedRT = [null, null, null, null];

		for (i=0; i < targRTs.length; i++) {
		  var curRTtarg = targRTs[i]; //current position of the target
			for (j=0; j < userRTs.length; j++) {
				var tempRT = userRTs[j];
				var RTdiff = tempRT - curRTtarg; //this is the RT difference

				if(RTdiff > 200 && RTdiff < 1200) {
					normedRT[i] = RTdiff;
		    }
		  }
		}

		jsPsych.data.addDataToLastTrial({
			designation: 'TD_SUMMARY',
			TDLOC_01: targRTs[0],
			TDLOC_02: targRTs[1],
			TDLOC_03: targRTs[2],
			TDLOC_04: targRTs[3],
			TD_RT_01: normedRT[0],
			TD_RT_02: normedRT[1],
			TD_RT_03: normedRT[2],
			TD_RT_04: normedRT[3],
			TD_SUBJ_RTs: userRTsdata,
			number_of_plays: numPlays
		});
		rtCurrent = []; //reset the rt array
	}
};



//Push everything to the timeline
var TD_TRIALS_FINAL = {
	timeline: [TD_setup, TD_trial_intro_01, TD_exemplar_loop, TD_trial_MAIN],
	timeline_variables: TD_VAR_FINAL,
	randomize_order: true
}




//Final completed target-detection array
var TD_FINAL = {
	timeline: [TD_Intro_01, TD_Intro_02, TD_TRIALS_FINAL]
}

//Function for Returning Audio Array for Preloading
function return_td_sounds(){
	return TD_AUD;
};
