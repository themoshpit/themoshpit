let cod = [[74, 97, 109, 101, 115],[77, 101, 108, 105, 120], [73, 115, 97, 105, 97, 104], [77, 99, 67, 97, 119]];
let decode = function(val) {
	let decode = new Uint8Array(val);
	let decoder = new TextDecoder();
	let decoded = decoder.decode(decode);
	return decoded;
}
let pdata = {
	/*
	'user name, no spaces': {
		firstName: 'John', // First Name
		lastName: 'Doe', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Johnny', // The Name People Will See
		age: 0, // Your Age
		ageVisible: true, // Can People See Your Age? true (yes) | false (no)
		bio: 'This is a bio', // Write About Yourself
		pictureUrl: 'https://somepics.com/apic.png or ask to upload one', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper / Producer', // What Are You Considered In The Group?
	},
	*/
	'darkheartproductions': {
		firstName: decode(cod[0]), // First Name
		lastName: decode(cod[1]), // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'DarkHeart Productions', // The Name People Will See
		age: 16, // Your Age
		ageVisible: true, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Producer', // What Are You Considered In The Group?
	},
	'marvindakid': {
		firstName: decode(cod[2]), // First Name
		lastName: decode(cod[3]), // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'MarvinDaKid', // The Name People Will See
		age: 15, // Your Age
		ageVisible: true, // Can People See Your Age? true (yes) | false (no)
		bio: 'MarvinDaKid is an artist from San Diego, California. MarvinDaKid (MDK for short) is heavily inspired by XXXTentacion, Drake, 2Pac, Ski Mask The Slump God, and Lil Yachty. MDK started rapping at the age of seven but never wrote his own lyrics, taking them from YouTube comments. He started to finally write and record at the age of 13 not taking rapping seriously. He used to go by "The Remix" for his passion of remixing songs by Drake, Lil Yachty, Lil Uzi Vert, and more. At the age of 14 he finally took rapping seriously to talk about him and his thoughts but also for fun. "If I do ever blow and go mainstream I want to help out everyone who supported me from the start. I\'d never switch up on my brodies and I\'d always keep it real with them." His plans are to get more money and move into a two story home with one of his groups, "The Moshpit" which was created in their Sophomore year. When he gets more money he plans to get better equipment and expand his music into different parts of the world and different people, following the footsteps of XXXTentacion. "I want to improve more and more with my music. If I become famous and stay famous I want to be remembered not just for being a rapper. I want to be remembered for being like anyone else... A person. Everyone gets things on their mind they want to say, but would be too afraid to say... I want to be that voice. I\'m not the best looking guy, but I know there is others like me that want to do great things. I want and need to be someone that\'s different from everyone else. My desire is to standout."', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},
	'blxck17':{
		firstName: 'Raquan', // First Name
		lastName: '?', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Blxck17', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},
	'subzero': {
		firstName: 'Keanu', // First Name
		lastName: '', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Subzero', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},
	'Jalen': {
		firstName: 'Jalen', // First Name
		lastName: '?', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Jalen', // The Name People Will See
		age: 0, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'No Bio', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'None', // What Are You Considered In The Group?
	},
	'hearteyeslover': {
		firstName: '?', // First Name
		lastName: '?', // Last Name
		realNameVisible: false, // Can People See Your Real Name? true (yes) | false (no)
		nickName: 'Hearteyeslover', // The Name People Will See
		age: ?, // Your Age
		ageVisible: false, // Can People See Your Age? true (yes) | false (no)
		bio: 'A mystery.', // Write About Yourself
		pictureUrl: 'none', // The Picture That Will Be Displayed
			// On Your Profile, Put none For No Picture
		position: 'Rapper', // What Are You Considered In The Group?
	},

};
