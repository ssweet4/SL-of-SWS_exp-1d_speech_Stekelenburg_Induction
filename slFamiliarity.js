/***********************************/
/***** Familiarity Rating Task *****/
/***********************************/

/*
Here, participants are presented with
trisyllabic combinations and must determine
how familiar they sound based on the first
part of the study.

There are 12 total trials (randomized):
4 words (2 of 2 expected transitions)
4 part-words (1 of 2 expected transitions)
4 non-words (0 of 2 expected transitions)

To use, simply push the procedure (FAM_PROC)
to your timeline in your main html file.

You can also specify a variable for housing
the array of sounds for preloading by calling
the function "return_fam_sounds();"

Stephen Van Hedger, June 2021

*/

//assign folder based on counterbalance version
var folder;

if(counterbalance == 1){
	folder = 'A'
} else if (counterbalance == 2){
	folder = 'B'
} else {
	folder = 'C'
}

var fam_array = [
{audFile: 'sounds/'+folder+'/FAM/W001.mp3', type: 'word'},
{audFile: 'sounds/'+folder+'/FAM/W002.mp3', type: 'word'},
{audFile: 'sounds/'+folder+'/FAM/W003.mp3', type: 'word'},
{audFile: 'sounds/'+folder+'/FAM/W004.mp3', type: 'word'},
{audFile: 'sounds/'+folder+'/FAM/P001.mp3', type: 'partword'},
{audFile: 'sounds/'+folder+'/FAM/P002.mp3', type: 'partword'},
{audFile: 'sounds/'+folder+'/FAM/P003.mp3', type: 'partword'},
{audFile: 'sounds/'+folder+'/FAM/P004.mp3', type: 'partword'},
{audFile: 'sounds/'+folder+'/FAM/N001.mp3', type: 'nonword'},
{audFile: 'sounds/'+folder+'/FAM/N002.mp3', type: 'nonword'},
{audFile: 'sounds/'+folder+'/FAM/N003.mp3', type: 'nonword'},
{audFile: 'sounds/'+folder+'/FAM/N004.mp3', type: 'nonword'}
];



//instructions
var fam_instruct = {
	type: 'html-button-response',
	stimulus: '<p>Welcome to the second part of the study. This is a <u>familiarity task</u>.</p>' +
			  '<p>You will now hear short sounds and will be asked to rate how familiar they sound to you <b>based on what you heard in the previous part of the study</b>.</p>'+
			  '<p>You will rate 12 sounds in total.</p>',
	choices: ['Begin']
};


//simple fixation
var fixation = {
	type: 'html-keyboard-response',
	stimulus: '',
	prompt: '<p style=font-size:50px;">+</p>',
	trial_duration: 1000
};

//play the sound
var fam_sound = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('audFile'),
	prompt: '<p style=font-size:50px;">+</p>',
	trial_ends_after_audio: true,
	post_trial_gap: 500
};

//familiarity rating screen
var fam_trial = {
	type: 'html-keyboard-response',
	stimulus:'<p>How familiar did this sound to you?</p><p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</p>'+
			 '<p style="font-size:14px">Not at all familiar&nbsp;&nbsp;&nbsp;&nbsp;A little familiar&nbsp;&nbsp;&nbsp;Moderately familiar&nbsp;&nbsp;&nbsp;Extremely familiar</p><p>(press the corresponding number on your keyboard)</p>',
	choices: ['1','2','3','4'],
	data: {designation: 'FAM-RESPONSE', sound: jsPsych.timelineVariable('audFile'), fam_type: jsPsych.timelineVariable('type')},
	post_trial_gap: 1000,
	response_ends_trial: true
};

//final familiarity procedure
var FAM_PROC = {
	timeline: [fixation, fam_sound, fam_trial],
	timeline_variables: fam_array,
	randomize_order: true
};

var FAM_PROC_FINAL = {
	timeline: [fam_instruct, FAM_PROC]
};

//Preloading Medis
var FAM_AUD = [];

for(var i=0; i<fam_array.length; i++){
	FAM_AUD.push(fam_array[i].audFile);
}

function return_fam_sounds(){
	return FAM_AUD;
};
