/**
 * Data for all current and previous products
 */
import { Positions } from "./TeamData";

// Builder pattern object for creating & verifying a product object
const ProductBuilder = function () {
	return {
		// Required
		productName: undefined,
		year: undefined,
		slogan: undefined,
		members: undefined,
		logoWidth: undefined,
		logoHeight: undefined,
		overview: undefined,

		// Optional
		demo: '',
		link: '',

		setName: function (productName) {
			if (typeof productName != "string" || !productName) {
				throw new Error(`Name ${productName} is invalid, must be a non-empty string`);
			}
			this.productName = productName;
			return this;
		},
		setYear: function (year) {
			if (year.match(/^20(19|20|21|22|23|24|25)-202[0-5]$/) == null || Number(year.substring(0, 4)) + 1 !== Number(year.substring(5, 9))) {
				throw new Error(`Year ${year} is invalid, see regex`);
			}
			this.year = year;
			return this;
		},
		setSlogan: function (slogan) {
			if (typeof slogan != "string" || !slogan) {
				throw new Error(`Slogan ${slogan} is invalid, must be a non-empty string`);
			}
			this.slogan = slogan;
			return this;
		},
		setStudentData: function (studentInfo) {
			if (!Array.isArray(studentInfo) || !studentInfo || studentInfo.length === 0) {
				throw new Error(`Students ${studentInfo} is invalid (for product ${this.productName}), must be a non-empty array`);
			}

			const studentData = [];
			for (let i = 0; i < studentInfo.length; ++i) {
				const student = studentInfo[i];
				if (!Array.isArray(student) || student.length !== 3) {
					throw new Error(`Student ${student} is invalid, must be an array with a student name, their linkedin id and position`);
				}
				if (typeof student[0] !== "string" || !student[0] || typeof student[1] !== "string" || !student[1]
					|| typeof student[2] !== "string" || !student[2] || !Positions.includes(student[2])) {
					throw new Error(`Student ${student} need a valid name, linkedin id (# if they don't have one) and position`);
				}

				studentData.push({
					studentName: student[0],
					linkedin: student[1] === '#' ? '#' : `https://www.linkedin.com/in/${student[1]}/`,
					position: student[2]
				});
			}

			this.members = studentData;
			return this;
		},
		setLogoDimensions: function (dimensions) {
			this.logoWidth = dimensions.width;
			this.logoHeight = dimensions.height;
			return this;
		},
		setOverview: function (overview) {
			if (typeof overview !== "string" || !overview) {
				throw new Error(`Overview ${overview} is invalid, must be a non-empty string`);
			}
			this.overview = overview;
			return this;
		},

		setDemo: function (demo) {
			if (!demo.match(/^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11}$/)) {
				throw new Error(`Demo ${demo} is invalid, must be a valid youtube embedded link`);
			}
			this.demo = demo;
			return this;
		},
		setLink: function (link) {
			if (typeof link !== "string" || !link) {
				throw new Error(`Link ${link} is invalid, must be a non-empty string`);
			}
			this.link = link;
			return this;
		},

		build: function () {
			if (!this.productName || !this.year || !this.slogan || !this.members || !this.logoWidth || !this.logoHeight || !this.overview) {
				throw new Error("The fields productName, year, slogan and members must be defined. " +
					`productName: ${this.productName} year: ${this.year} slogan: ${this.slogan} studentDate: ${this.members}`);
			}

			return {
				productName: this.productName,
				year: this.year,
				slogan: this.slogan,
				members: this.members,

				photoXY: {width: 2000, height: 1333},
				overview: this.overview,
				demo: this.demo,
				link: this.link,

				logoHeight: this.logoHeight,
				logoWidth: this.logoWidth,
				logo: `/assets/Products/${this.year}/${this.productName}_Logo.png`,
				teamPhoto: `/assets/Products/${this.year}/${this.productName}_Team.png`,
				pitch: `/assets/Products/${this.year}/${this.productName}_Pitch.pdf`,
			}
		}
	};
};

const ProductData = [
	/*
	 * 2019-2020
	 */
	new ProductBuilder()
		.setName("Hungover")
		.setYear("2019-2020")
		.setSlogan("Taking your pregame to the next level")
		.setStudentData([
			["Diane Huang", "dianehuang11", "Product Manager"],
			["Ben Kitor", 'bkitor', "Senior Developer"],
			["Tim Lampen", 'timlampen', "Developer"],
			["Sam Mcphail", 'sam-mcphail', "Developer"],
			["Sierra Cache Angus", 'sierra-cache', "UI/UX Designer"],
			["Victor Gao", 'victor-gao', "Business Analyst"],
			["Tina Huang", 'tina-c-huang', "Business Analyst"],
			["Ethan Blumberg", 'ethan-blumberg-96a379208', "Frosh Rep"],
		])
		.setLogoDimensions({width: 120, height: 133.13})
		.setOverview("Hangover is a social gaming app inspired by Cards Against Humanity and Kahoot. " +
			"Enter a lobby to play with your friends, with one as the Host. Each round, the players will answer a " +
			"mixture of different question types for the Host to judge at the end. The Host decides on a punishment " +
			"(e.g. take a shot), a winner, and a loser. The loser must take the punishment while the winner can give " +
			"the punishment to another player. The loser is then the new host for the subsequent round. Let Hangover " +
			"be the perfect addition to your night!")
		.setDemo("https://www.youtube.com/embed/xOm3xY2QCik")
		.build(),

	new ProductBuilder()
		.setName("Studii")
		.setYear("2019-2020")
		.setSlogan("Academic collaboration at your fingertips")
		.setStudentData([
			["Shwetha Sivakumar", "shwethasivakumar", "Product Manager"],
			["Patrick Lenover", 'patrick-lenover-ab2ab5178', "Senior Developer"],
			["Max Eisen", 'maxeisen', "Developer"],
			["Ross Hill", 'rosslh', "Developer"],
			["Carolyn Day", 'carolyn155', "UI/UX Designer"],
			["Andrew Simmons", 'andrew-simmons1', "Senior Business Analyst"],
			["Kevin Ding", 'kevding', "Business Analyst"],
			["Connor Colwill", 'connorcolwill', "Frosh Rep"],
		])
		.setLogoDimensions({width: 176.21, height: 59})
		.setOverview("Studii offers a collaborative forum that provides both peer support and expert advice " +
			"for a student’s course questions. Our vision is to harness the knowledge of students and academic experts " +
			"on a nationwide study platform to improve the performance of Canadian university students")
		.setDemo("https://www.youtube.com/embed/WvmwBEX_7iU")
		.build(),

	new ProductBuilder()
		.setName("Wob")
		.setYear("2019-2020")
		.setSlogan("Get the latest word on the street")
		.setStudentData([
			["David Hao", "david-hao", "Product Manager"],
			["Jonathan Stroz", 'jonathan-stroz', "Senior Developer"],
			["Kyle Meade", 'kymed', "Developer"],
			["Kasthuri Thambipillai", 'kasthuri-t-ba8531144', "Developer"],
			["Sophia Yang", 'sophia-yangg', "UI/UX Designer"],
			["Ehsan Merati", 'ehsanmerati', "Senior Business Analyst"],
			["Julien Lin", 'julien-lin', "Business Analyst"],
			["Graham Carkner", 'gcarkner', "Frosh Rep"],
		])
		.setLogoDimensions({width: 151.4, height: 90})
		.setOverview("A geo-based, anti-harassment conscious anonymous messaging and content platform meant " +
			"to strengthen relationships in local communities.")
		.setDemo("https://www.youtube.com/embed/6dHJOGqdT8M")
		.build(),

	new ProductBuilder()
		.setName("Stocked")
		.setYear("2019-2020")
		.setSlogan("The best a fridge can get.")
		.setStudentData([
			["Jason Yang", "jason-z-yang", "Product Manager"],
			["Quentin Roy-Foster", 'quentin-roy-foster', "Senior Developer"],
			["Victor Uemura", 'victor-uemura', "Developer"],
			["Sydney Tschritter", 'sydneytschritter', "Developer"],
			["Ricky Zhang", 'ricky-zhang', "UI/UX Designer"],
			["Shani Mithani", "shanimithani", "Business Analyst"],
			["Alice QI", '#', "Senior Business Analyst"],
			["Jake Koszczewski", 'jakekoszczewski', "Frosh Rep"],
		])
		.setLogoDimensions({width: 252.59, height: 60})
		.setOverview("As a mobile app for both iOS and Android, Stocked is a dynamic meal generator which " +
			"minimizes the shopping you need to do by suggesting recipes based on the ingredients already in your " +
			"fridge. Other features include a receipt scanner and expiration tracker that helps save time and money.")
		.setDemo("https://www.youtube.com/embed/JghgqwDF0NU")
		.build(),

	/*
	 * 2020-2021
	 */
	new ProductBuilder()
		.setName("Eagle")
		.setYear("2020-2021")
		.setSlogan("Your Delivery Service Companion")
		.setStudentData([
			["Max Eisen", "maxeisen", "Product Manager"],
			["Aman Dhaliwal", "amandhaliwal44", "Senior Developer"],
			["Truman Be", "truman-be", "Developer"],
			["Ben Minor", "ben-minor", "Developer"],
			["James McDonald", "jamesgregorymcdonald", "Developer"],
			["Emily Zhao", "emily-zhaoo", "UI/UX Designer"],
			["Tina Huang", "tina-c-huang", "Senior Business Analyst"],
			["Riya Shah", "riya-shah-queens-university", "Business Analyst"],
			["Mark Gragtmans", "mark-gragtmans", "Business Analyst"],
			["Jake Koszczewski", "jakekoszczewski", "Business Analyst"]
		])
		.setLogoDimensions({width: 200, height: 122})
		.setOverview("Food delivery apps are expensive and time-consuming - either we quickly choose a deal " +
			"from one app and waste money, or spend plenty of time switching though different apps to find the best " +
			"deal, defeating the purpose of convenience apps in the first place. What if you could aggregate all " +
			"this data into one convenient app? Well, you can; that's Eagle!")
		.build(),

	new ProductBuilder()
		.setName("Pronto")
		.setYear("2020-2021")
		.setSlogan("Convenient lending for everyone")
		.setStudentData([
			["Victor Gao", "victor-gao", "Product Manager"],
			["Travis Cossarini", "travis-cossarini", "Senior Developer"],
			["Arsh Koshar", "#", "Developer"],
			["Kevin Subagaran", "#", "Developer"],
			["Flora Lin", "flora-l", "UI/UX Designer"],
			["Alice Qi", "#", "Senior Business Analyst"],
			["Adil Natalwalla", "adil-natalwalla", "Business Analyst"],
			["Richard Li", "richardliqu", "Business Analyst"],
			["Helen Xu", "helencxu", "Frosh Rep"]
		])
		.setLogoDimensions({width: 120, height: 116})
		.setOverview("How many times did you buy something, use it once or twice then let it " +
			"sit in your garage for years? Some tools and devices you need, but only occasionally and " +
			"the cost is too much to justify buying this stuff all the time. Well, Pronto has you " +
			"covered. Plenty of people already have these tools and doesn't cost them anything to " +
			"help out, and Pronto helps you build the community")
		.build(),

	new ProductBuilder()
		.setName("Voluntera")
		.setYear("2020-2021")
		.setSlogan("The one-stop shop for social impact")
		.setStudentData([
			["Langni Zeng", "langnizeng", "Product Manager"],
			["Victor Uemura", "victor-uemura", "Senior Developer"],
			["Lexi Locca", "#", "Developer"],
			["Brandon Ye", "yebrandon", "Developer"],
			["Sophia Yang", "sophia-yangg", "UI/UX Designer"],
			["Kevin Ding", "kevding", "Senior Business Analyst"],
			["Karan Goyal", "karangoyal22", "Business Analyst"],
			["Dylan Ratti", "dylan-ratti", "Business Analyst"]
		])
		.setLogoDimensions({width: 250, height: 60})
		.setOverview("We all want to help charitable causes, but act of doing so can be " +
			"tough. Who to donate to? Who is reputable? Where is the money going? How do I donate? " +
			"Voluntera solves all this with an all-in-one spot to find the best charities to donate " +
			"to, with a super simple donation mechanism so you can focus on helping out your " +
			"community")
		.build(),

	new ProductBuilder()
		.setName("Loop")
		.setYear("2020-2021")
		.setSlogan("Authentic connections with good friends")
		.setStudentData([
			["Sydney Tschritter", 'sydneytschritter', "Product Manager"],
			["Anastasia Krause", "anakrause", "Senior Developer"],
			["Graham Carkner", 'gcarkner', "Developer"],
			["Adam Dolan", "adam-dolan-", "Developer"],
			["Connor Colwill", "connorcolwill", "UI/UX Designer"],
			["Allen Chen", "allen-chen0", "Senior Business Analyst"],
			["Mudra Patel", "mudrapatel", "Business Analyst"],
			["Zaais Van Zyl", "zaais-van-zyl", "Business Analyst"],
		])
		.setLogoDimensions({width: 200, height: 100})
		.setOverview("Many social media platforms lack real connectedness - too " +
			"many public figures, influences, etc leads to a not genuine experience. Loop, " +
			"on the other hand, focuses on bringing together you and only your good friends " +
			"so you can have genuine, fun interactions among friends")
		.build(),

	/*
	 * 2021-2022
	 */
	new ProductBuilder()
		.setName("Casa")
		.setYear("2021-2022")
		.setSlogan("Making the roommate finding process as easy as possible")
		.setStudentData([
			["Riya Shah", "riya-shah-queens-university", "Product Manager"],
			["Ben Minor", "ben-minor", "Senior Developer"],
			["Connor Cowill", "connorcolwill", "Developer"],
			["Grady Palfrey", "gradypalfrey", "Developer"],
			["Lia Mason", "lia-k-mason", "Developer"],
			["Graham Carkner", 'gcarkner', "UI/UX Designer"],
			["Helen Xu", 'helencxu', "Senior Business Analyst"],
			["Naomi Juntas", "#", "Business Analyst"],
			["Aaron Chen", "aaronnchen", "Business Analyst"],
			["Krishaan Thyagarajan", "krishaan-thyagarajan", "Frosh Rep"]
		])
		.setLogoDimensions({width: 205, height: 65})
		.setOverview("When looking for roommates, traditionally convenience and basic info " +
			"are only considered, and you could be left living with people you don't really vibe with. " +
			"Casa adds a fun swiping mechanism to your detailed choices where you can find roommates " +
			"based on interests so you'll never have a bad house again!")
		.setLink("https://www.homiis.com/")
		.build(),

	new ProductBuilder()
		.setName("Haus")
		.setYear("2021-2022")
		.setSlogan("Haus helps Hausmates collaborate and save on groceries")
		.setStudentData([
			["Richard Li", "richardliqu", "Product Manager"],
			["Kevin Quijalvo", "marc-quijalvo", "Senior Developer"],
			["Matthew MacEachern", "matthew-maceachern", "Developer"],
			["Isabella Enriquez", "isabellaenriquez", "Developer"],
			["Flora Lin", "flora-l", "UI/UX Designer"],
			["Chloe Hung", "chloe-hung", "Senior Business Analyst"],
			["Egor Petrov", "#", "Business Analyst"],
			["Kevin Wu", "wu-kevin", "Business Analyst"]
		])
		.setLogoDimensions({width: 70, height: 86})
		.setOverview("Shopping for yourself is a pain. So many trips, wasted food, planning, " +
			"cooking - even though there's probably an easy solution to this. Collaboration with your " +
			"housemates saves so much time & money, in an all-in-one app to manage everything at once")
		.build(),

	new ProductBuilder()
		.setName("Loco")
		.setYear("2021-2022")
		.setSlogan("The travel app for true Locos")
		.setStudentData([
			["Julien Lin", "julien-lin", "Product Manager"],
			["Emily Zhao", "emily-zhaoo", "Senior Developer"],
			["Reid Moffat", "reid-moffat", "Developer"],
			["Kevin Liang", "keviniang", "Developer"],
			["Khoa Nguyen", "khoa-qd-nguyen", "Developer"],
			["Doris Zhou", "doris-zhuo", "UI/UX Designer"],
			["Mahir Hamimd", "mahirhamid", "Senior Business Analyst"],
			["Vicky Deng", "dengvicky", "Business Analyst"],
			["Jacob Xu", "jacobx", "Business Analyst"],
			["Olivia Xu", "olivia-chen-xu", "Frosh Rep"]
		])
		.setLogoDimensions({width: 200, height: 80})
		.setOverview("Take a look at 'Things do to in city x' on Google and what to do you see? " +
			"Tourist trap after tourist trap. Sure, climbing the CN tower or the Empire State building " +
			"is fun once, but there's so much more genuine local experiences that you miss. Small " +
			"delicious restaurants? Cool thrift shops? Local artists? You deserve more when you travel, " +
			"Loco finds you the best local places for you to enjoy")
		.build(),

	new ProductBuilder()
		.setName("Soar")
		.setYear("2021-2022")
		.setSlogan("Find teammates to build your next side project")
		.setStudentData([
			["Ethan Bonnardeaux", "ethan-bonnardeaux", "Product Manager"],
			["Truman Be", "truman-be", "Senior Developer"],
			["Jessica Li", "jessica-a-li", "Developer"],
			["Kevin Subagaran", "#", "Developer"],
			["Ronan Almeida", "#", "Developer"],
			["Randy Shao", "randyshao", "UI/UX Designer"],
			["Dylan Ratti", "dylan-ratti", "Senior Business Analyst"],
			["Chris Power", "#", "Business Analyst"],
			["Eesha Kohli", "eesha-kohli", "Business Analyst"],
			["Manush Patel", "manushpatel", "Frosh Rep"],
		])
		.setLogoDimensions({width: 220, height: 80})
		.setOverview("Everyone loves thinking about and starting side projects, but we " +
			"all know what happens next - motivation plummets, and we get stuck with 20 unfinished " +
			"side projects, and nothing to show for it. Soar pairs you up with other like-minded " +
			"developers so you can focus & collaborate on making effective projects to beef up your " +
			"portfolio!")
		.build(),

	/*
	 * 2022-2023
	 */
	new ProductBuilder()
		.setName("Feastly")
		.setYear("2022-2023")
		.setSlogan("Let's feast on something delicious")
		.setStudentData([
			["Manush Patel", "manushpatel", "Product Manager"],
			["Jack Studiner", "jackstudiner", "Senior Developer"],
			["Connor Rewa", "connorrewa", "Developer"],
			["Alison Xia", "alison-xia", "UI/UX Designer"],
			["Ryan Vuscan", "ryanvuscan", "Business Analyst"],
			["Larry Han", "larry-han", "Frosh Rep"],
		])
		.setLogoDimensions({width: 200, height: 100})
		.setOverview("Students miss home-cooked meals and the feeling of home; hyper-" +
			"consumerist delivery apps with unnatural fast foods just aren't good. What if you could " +
			"support local businesses and get quality & affordable meals? Well, Feastly has you back")
		.build(),

	new ProductBuilder()
		.setName("Kartt")
		.setYear("2022-2023")
		.setSlogan("Shop smart with Kartt")
		.setStudentData([
			["Naomi Juntas", "#", "Product Manager"],
			["Benjamin Hui", "benjaminhui1", "Developer"],
			["Harsh Kalyani", "harshkalyani", "Developer"],
			["Sophie Ellwood", "sophie-ellwood", "Developer"],
			["Kevin Liang", "keviniang", "UI/UX Designer"],
			["Chad Huang", "chad-huang", "Senior Business Analyst"],
		])
		.setLogoDimensions({width: 200, height: 70})
		.setOverview("Oh sick, a cool sweater I want for only $30! Wait, $23 shipping? " +
			"$5 tax? $4 'online fee'? This isn't even good at all... If only there was a way you " +
			"could see the true cost of online shopping every time, without any surprises. We'll " +
			"you're in luck with Kartt!")
		.build(),

	new ProductBuilder()
		.setName("Sift")
		.setYear("2022-2023")
		.setSlogan("Choose the gift you want, stress free")
		.setStudentData([
			["Aaron Chen", "aaronnchen", "Product Manager"],
			["Grady Palfrey", "gradypalfrey", "Senior Developer"],
			["Matthew MacEachern", "matthew-maceachern", "Developer"],
			["David Courtis", "david-courtis", "Developer"],
			["Yves Alikalfic", "yves-alikalfic", "Developer"],
			["Alex Lian", "alex-lian", "UI/UX Designer"],
			["Jegor Petrov", "egorpetrov1402", "Senior Business Analyst"],
			["Thomas Huang", "thomas-huang-805958205", "Business Analyst"],
			["Beatrice Setiawan", "beatricebenecia", "Business Analyst"],
			["Cynthia Choi", "choicynthia", "Business Analyst"],
		])
		.setLogoDimensions({width: 200, height: 100})
		.setOverview("Buying gifts for friends is too much of a chore - you never " +
			"know what to get. Sure, you know their hobbies & interests, but they probably " +
			"already have most of the potential things you might get them. Paint for artists? " +
			"Sports cards for sports enthusiasts? How about an easier, more accurate and " +
			"fun way to get gifts so it's not a pain anymore, but an experience.")
		.build(),

	new ProductBuilder()
		.setName("Venato")
		.setYear("2022-2023")
		.setSlogan("Helping students reach their full potential")
		.setStudentData([
			["Cameron Beaulieu", "cameron-beaulieu", "Product Manager"],
			["Olivia Xu", "olivia-chen-xu", "Senior Developer"],
			["Reid Moffat", "reid-moffat", "Developer"],
			["Daniel Joseph", "danieljoseph8", "Developer"],
			["Shabicha Sureshkumar", "shabicha-sureshkumar-0b7372200", "UI/UX Designer"],
			["Helen Xu", "helencxu", "Senior Business Analyst"],
			["Nick Archambault", "nickarchambault", "Business Analyst"],
			["Steven Vuong", "steven--vuong", "Business Analyst"],
		])
		.setLogoDimensions({width: 260, height: 75})
		.setOverview("As securing an internship is becoming increasingly " +
			"competitive, students have a hard time finding and staying on top of " +
			"every opportunity. Students’ lack of job application tools further cause " +
			"unnecessary stress and worry. Venato solves that by Helping students " +
			"reach their full potential: a one-stop, simple, easy-to-use internship hub to " +
			"organize your job application processes.")
		.setLink("https://venatoapp.ca/")
		.build(),

	/*
	 * 2023-2024
	 */

	new ProductBuilder()
		.setName("Dilliad")
		.setYear("2023-2024")
		.setSlogan("Your AI-powered personal stylist")
		.setStudentData([
			["Alex Lian", "alex-lian", "Product Manager"],
			["Cain Sueko", "cain-s-8b5b36150", "Senior Developer"],
			["Connor Leung", "connorleung", "Developer"],
			["Daniel Joseph", "danieljoseph8", "Developer"],
			["Savannah Han", "savannah-han", "Developer"],
			["Sindusara Munasinghe", "sindusara-m-96a7a4296", "Developer"],
			["Mike Nguyen", "mike-nguyen-5bab96269", "UI/UX Designer"],
			["Steven Vuong", "steven--vuong", "Senior Business Analyst"],
			["Marcus Hui", "marcus-hui-0a7b9b334", "Business Analyst"],
			["Cynthia Choi", "choicynthia", "Business Analyst"],
		])
		.setLogoDimensions({width: 220, height: 80})
		.setOverview("As building a personal style and managing a wardrobe becomes increasingly overwhelming, individuals struggle to create cohesive outfits that suit their occasion, style, and the weather. This daily decision leads to wasted time, underutilized clothing, and frustration. Dilliad solves that by simplifying daily dressing: an AI-powered stylist that integrates with your wardrobe to automatically generate and suggest personalized outfit combinations.")
		.build(),
		new ProductBuilder()
		.setName("Pantree")
		.setYear("2023-2024")
		.setSlogan("Never waste food again")
		.setStudentData([
			["Manush Patel", "manushpatel", "Product Manager"],
			["Yves Alikalfic", "yves-alikalfic", "Senior Developer"],
			["Matt Dobaj", "#", "Developer"],
			["Al-Barr Ajiboye", "#", "Developer"],
			["Keely McSpurren", "#", "Developer"],
			["Jasmine Gao", "#", "Senior UI/UX Designer"],
			["Janevra Pier", "#", "UI/UX Designer"],
			["Nick Archambault", "nickarchambault", "Senior Business Analyst"],
			["Claire Hu", "#", "Business Analyst"],
			["Manny Piccinni", "#", "Business Analyst"],
		])
		.setLogoDimensions({width: 220, height: 80})
		.setOverview("As households strive to reduce food waste and manage groceries, it becomes increasingly difficult to track what's in your kitchen and when it expires. This lack of visibility leads to forgotten food, wasted money, and unnecessary grocery trips. Pantree solves that by creating a smarter kitchen: a browser extension that tracks your food purchases and proactively reminds you when items are nearing their expiration date.")
		.build(),
		new ProductBuilder()
		.setName("Orah")
		.setYear("2023-2024")
		.setSlogan("Reclaim your time, earn rewards")
		.setStudentData([
			["PLACEHOLDER", "ethan-bonnardeaux", "Product Manager"],
			// ["Thomas Huang", "thomas-huang-805958205", "Product Manager"],
			// ["Jade Wei", "jade-wei", "Senior Developer"],
			// ["Michael Han", "#", "Developer"],
			// ["Julian Brickman", "#", "Developer"],
			// ["Sophie Ellwood", "sophie-ellwood", "Developer"],
			// ["Shabicha Sureshkumar", "shabicha-sureshkumar-0b7372200", "Senior UI/UX Designer"],
			// ["Amanda Li", "aamanda-li", "UI/UX Designer"],
			// ["Aidan Brown", "#", "Senior Business Analyst"],
			// ["Vasili Piliouras", "#", "Business Analyst"],
			// ["Jennie Choi", "jennie-choi-2329132a9", "Business Analyst"],
			// ["Nathan Reynolds", "nathan-reynolds-78a47b290", "Business Analyst"],
			// ["Sriya Narra", "#", "Business Analyst"],
		])
		.setLogoDimensions({width: 154, height: 56})
		.setOverview("As smartphone addiction becomes increasingly prevalent, students struggle to reduce their screen time despite a strong desire to do so. The lack of tangible incentives and engaging tools makes effective screen time management feel like a punishment. Orah solves that by helping students reclaim their time and money: a gamified app that rewards you with real-world discounts and coupons for meeting your screen time reduction goals.")
		.build(),
		new ProductBuilder()
		.setName("Parki")
		.setYear("2023-2024")
		.setSlogan("Finding parking, made easy")
		.setStudentData([
			["Graham Carkener", "#", "Product Manager"],
			["Beatrice Setiawan", "#", "Senior Business Analyst"],
			["Lukas Cupsa", "#", "Business Analyst"],
			["Hannah He", "#", "Business Analyst"],
			["Aminah Rizwan", "#", "Business Analyst"],
			["William Du", "#", "Business Analyst"],
			["Erin Zhang", "#", "Senior UI/UX Designer"],
			["Reid Moffat", "#", "Senior Developer"],
			["Dharsan Ravindran", "#", "Senior Developer"],
			["Connor Rewa", "#", "Developer"],
		])
		.setLogoDimensions({width: 220, height: 80})
		.setOverview("As parking in dense urban and campus areas becomes increasingly scarce and expensive, drivers are forced to choose from limited, costly options. Simultaneously, property managers and individuals with unused parking spots lack a specialized platform to easily monetize their assets. Parki solves that by democratizing parking access: a streamlined, community-focused platform that makes it easy for anyone to list or find affordable and convenient parking spots.")
		.build(),




	/*
	 * 2024-2025
	 */

	new ProductBuilder()
		.setName("Nucleus")
		.setYear("2024-2025")
		.setSlogan("Stop procrastinating and start working")
		.setStudentData([
			["Michael Curry", "michaelcurry-", "Product Manager"],
			["Kayne Lee", "kaynelee", "Senior Developer"],
			["Amanda Li", "aamanda-li", "Developer"],
			["Matthew Kompel", "#", "Developer"],
			["Chloe Houvardas", "chloe-houvardas", "Developer"],
			["Vivian Lee", "vivianmlee", "Senior UI/UX Designer"],
			["Will Du", "william-du-6aa25b256", "Senior Business Analyst"],
			["Brian Yts", "brian-yts", "Business Analyst"],
			["Moon Le", "moonle", "Business Analyst"],
		])
		.setLogoDimensions({width: 130, height: 120})
		.setOverview("As academic workloads become increasingly complex, students struggle to synthesize critical information scattered across multiple syllabi, platforms, and calendars. This administrative chaos causes missed deadlines, unnecessary stress, and hinders academic performance. Nucleus solves that by centralizing academic life: an all-in-one hub that aggregates and streamlines all course information into a single, actionable, and personalized dashboard.")
		.build(),
	new ProductBuilder()
		.setName("Inquiro")
		.setYear("2024-2025")
		.setSlogan("Data-driven investment tool for retail investors")
		.setStudentData([
			["Alison Xia", "alison-xia", "Product Manager"],
			["Eric Lam", "eric-lam-0532322a5", "Senior Developer"],
			["Gavin Yan", "gavin-yan", "Developer"],
			["Joshua Gonzales", "joshua-gonzales-33a41b272", "Developer"],
			["Richard Guo", "richard-guo-8b5b73217", "Developer"],
			["Matthew Kim", "geonho-mattkim", "Senior Business Analyst"],
			["Sage Pearl", "sage-pearl-6572b9268", "Business Analyst"],
			["Emanuel Piccininni", "emanuel-piccininni", "Business Analyst"],
			["Julia Bartman", "julia-bartman-50a4a42a5", "Business Analyst"],
			["Mike Nguyen", "mike-nguyen-5bab96269", "Senior UI/UX Designer"],
			["Serena Sanchez", "serenasanchez2025", "UI/UX Designer"],
		])
		.setLogoDimensions({width: 140, height: 92})
		.setOverview("As the amount of public company data grows increasingly vast and fragmented, retail investors struggle to find clear, timely, and relevant information to make informed decisions. Navigating through complex financial documents and news is time-consuming and intimidating. Inquiro solves that by democratizing financial research: a data-powered tool that allows users to search for and ask about companies using natural language, delivering immediate, synthesized answers.")
		.build(),
	new ProductBuilder()
		.setName("Lilchef")
		.setYear("2024-2025")
		.setSlogan("Your go-to kitchen companion")
		.setStudentData([
			["Daniel Joseph", "danieljoseph8", "Product Manager"],
			["Robbie Huang", "robbie-huang-a02196289", "Senior Developer"],
			["Kabelo Dike", "kabelo-dike", "Developer"],
			["Bartek Kowalski", "bartek-kowalski-software-developer", "Developer"],
			["Aminah Rizwan", "aminahrizwan", "Senior Business Analyst"],
			["Marucs Hui", "marcus-hui-0a7b9b334", "Business Analyst"],
			["Dylan Atwal", "dylan-atwal-6b63a1252", "Business Analyst"],
			["Nathan Reynolds", "nathan-reynolds-78a47b290", "Business Analyst"],
			["Erin Zhang", "erin-r-zhang", "Senior UI/UX Designer"],
			["Noah Yu", "noahyu", "UI/UX Designer"],
			["Jennie Choi", "jennie-choi-2329132a9", "UI/UX Designer"],
		])
		.setLogoDimensions({width: 140, height: 113})
		.setOverview("As young adults begin living independently, cooking becomes increasingly daunting due to a lack of skills, time, and motivation. The overwhelming number of recipes and the burden of decision-making often lead to unhealthy takeout choices. Lil'Chef solves that by building confidence in the kitchen: a personalized, all-in-one cooking companion app that simplifies meal discovery, planning, and cooking with guided assistance tailored to your dietary needs and goals.")
		.build(),
	new ProductBuilder()
		.setName("Fujiplans")
		.setYear("2024-2025")
		.setSlogan("Giving educators their time back")
		.setStudentData([
			["Keely McSpurren", "keely-mcspurren", "Product Manager"],
			["Connor Leung", "connorleung", "Senior Developer"],
			["Isaac Fung", "isaacfungg", "Developer"],
			["Anthony Qiu", "anthonyqiu3", "Developer"],
			["Matt Dobaj", "mattdobaj", "Developer"],
			["Janevra Pier", "/janevra-pier-687562277", "UI/UX Designer"],
			["Hana Brissenden", "hana-brissenden-063b3a274", "UI/UX Designer"],
			["Claire HU", "huclaire", "Senior Business Analyst"],
			["Chris Power", "#", "Business Analyst"],
			["Thomas Huo", "thomashuo-", "Business Analyst"],
			["Ruby Wang", "ruby-wangg", "Business Analyst"],
			["Lukas Cupsa", "lukas-cupsa", "Business Analyst"],
			["Manush Patel", "manushpatel", "Frosh Rep"],
		])
		.setLogoDimensions({width: 200, height: 67})
		.setOverview("As the demands on educators' time become increasingly burdensome, teachers struggle with the administrative load of creating, aligning, and collaborating on lesson plans. This tedious process takes valuable hours away from student engagement and instruction. FujiPlans solves that by empowering educators: an AI-powered, collaborative platform that streamlines lesson planning, ensures curriculum alignment, and gives teachers their time back.")
		.build(),

]

export default ProductData;
