dataSetVersion = "2022-08-15"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
	{
		name: "Filter by Album",
		key: "album",
		tooltip: "Check this to only select songs from certain albums.",
		checked: false,
		sub: [
			{ name: "Exmilitary", key: "exm" },
			{ name: "The Money Store", key: "tms" },
			{ name: "No Love Deep Web", key: "nldw" },
			{ name: "Government Plates", key: "gp" },
			{ name: "ni**as on the moon", key: "notm" },
			{ name: "Jenny Death", key: "jd" },
			{ name: "Bottomless Pit", key: "bp" },
			{ name: "Year of the Snitch", key: "yots" },
    	]
  	},
];

dataSet[dataSetVersion].characterData = [
	// Exmilitary 
    { name: "Beware", img: "exm_t.png", opts: { album: [ "exm" ] } },
    { name: "Guillotine", img: "exm_t.png", opts: { album: [ "exm" ] } },
    { name: "Spread Eagle Cross the Block", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Lord of the Game", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Takyon (Death Yon)", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Cut Throat [Instrumental]", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Klink", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Culture Shock", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "5D", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Thru the Walls", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Known For It", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "I Want It I Need It (Death Heated)", img: "exm_t.png", opts: { album: [ "exm" ] } },
	{ name: "Blood Creepin", img: "exm_t.png", opts: { album: [ "exm" ] } },

	// The Money Store  
	{ name: "Get Got", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "The Fever (Aye Aye)", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "Lost Boys", img: "tms_t.png", opts: { album: [ "tms" ] } },
	{ name: "Black Jack", img: "tms_t.png", opts: { album: [ "tms" ] } },		
	{ name: "Hustle Bones", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "I've Seen Footage", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "Double Helix", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "System Blower", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "The Cage", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "Punk Weight", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "Fuck That", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "Bitch Please", img: "tms_t.png", opts: { album: [ "tms" ] } },	
	{ name: "Hacker", img: "tms_t.png", opts: { album: [ "tms" ] } },
	
	// ni**as on the moon  
	{ name: "Up My Sleeves", img: "tptb_t.png", opts: { album: [ "notm" ] } },	
	{ name: "Billy Not Really", img: "tptb_t.png", opts: { album: [ "notm" ] } },	
	{ name: "Black Quarterback", img: "tptb_t.png", opts: { album: [ "notm" ] } },
	{ name: "Say Hey Kid", img: "tptb_t.png", opts: { album: [ "notm" ] } },
	{ name: "Have A Sad Cum BB", img: "tptb_t.png", opts: { album: [ "notm" ] } },			
	{ name: "Fuck Me Out", img: "tptb_t.png", opts: { album: [ "notm" ] } },	
	{ name: "Voila", img: "tptb_t.png", opts: { album: [ "notm" ] } },	
	{ name: "Big Dipper", img: "tptb_t.png", opts: { album: [ "notm" ] } },	

	// Jenny Death
	{ name: "I Break Mirrors With My Face In The United States", img: "tptb_t.png", opts: { album: [ "jd" ] } },	
	{ name: "Inanimate Sensation", img: "tptb_t.png", opts: { album: [ "jd" ] } },
	{ name: "Turned Off", img: "tptb_t.png", opts: { album: [ "jd" ] } },		
	{ name: "Why A Bitch Gotta Lie", img: "tptb_t.png", opts: { album: [ "jd" ] } },	
	{ name: "Pss Pss", img: "tptb_t.png", opts: { album: [ "jd" ] } },
	{ name: "The Powers That B", img: "tptb_t.png", opts: { album: [ "jd" ] } },
	{ name: "Beyond Alive", img: "tptb_t.png", opts: { album: [ "jd" ] } },	
	{ name: "Centuries of Damn", img: "tptb_t.png", opts: { album: [ "jd" ] } },		
	{ name: "On GP", img: "tptb_t.png", opts: { album: [ "jd" ] } },	
	{ name: "Death Grips 2.0", img: "tptb_t.png", opts: { album: [ "jd" ] } },		
	
	// Bottomless Pit
	{ name: "Giving Bad People Good Ideas", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Hot Head", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Spikes", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Warping", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Eh", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Bubbles Buried in This Jungle", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Trash", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Houdini", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "BB Poison", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Three Bedrooms in a Good Neighborhood", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Ring a Bell", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "80808", img: "bp_t.png", opts: { album: [ "bp" ] } },	
	{ name: "Bottomless Pit", img: "bp_t.png", opts: { album: [ "bp" ] } },	

	// Year of the Snitch
	{ name: "Death Grips Is Online", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Flies", img: "yots_t.png", opts: { album: [ "yots" ] } },
	{ name: "Black Paint", img: "yots_t.png", opts: { album: [ "yots" ] } },		
	{ name: "Linda's in Custody", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "The Horn Section", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Hahaha", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Shitshow", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Streaky", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Dilemma", img: "yots_t.png", opts: { album: [ "yots" ] } },
	{ name: "Little Richard", img: "yots_t.png", opts: { album: [ "yots" ] } },		
	{ name: "The Fear", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Outro", img: "yots_t.png", opts: { album: [ "yots" ] } },	
	{ name: "Disappointed", img: "yots_t.png", opts: { album: [ "yots" ] } },	
];
