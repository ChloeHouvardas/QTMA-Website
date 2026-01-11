/**
 * Data for all QTMA members – 2025/26 roster
 */

// TODO replace with high quality
import amandaCao from "../public/assets/Members/amandaCao.jpg";
import amandaLi from "../public/assets/Members/amandaLi.jpg";
import ameliaHalverson from "../public/assets/Members/ameliaHalverson.jpg";
import aminahRizwan from "../public/assets/Members/aminahRizwan.jpg";
import andreeaCobzaru from "../public/assets/Members/andreaCobzaru.jpg";
import anthonyQiu from "../public/assets/Members/anthonyQiu.jpg";
import bethArmstrong from "../public/assets/Members/bethArmstrong.jpg";
import brandonNguyen from "../public/assets/Members/brandonNguyen.jpg";
import brianYts from "../public/assets/Members/brianYts.jpg";
import chloeHouvardas from "../public/assets/Members/chloeHouvardas.jpg";
import claireHu from "../public/assets/Members/claireHu.jpg";
import connorLeung from "../public/assets/Members/connorLeung.jpg";
import cynthiaChoi from "../public/assets/Members/cynthiaChoi.jpg";
import danielYeung from "../public/assets/Members/danielYeung.jpg";
import dylanAtwal from "../public/assets/Members/dylanAtwal.jpg";
import erinZhang from "../public/assets/Members/erinZhang.jpg";
import hanaBrissenden from "../public/assets/Members/hanaBrissenden.jpg";
import ilanaMoshkovich from "../public/assets/Members/ilanaMoshkovich.jpg";
import isaacFung from "../public/assets/Members/isaacFung.jpg";
import jacquelineHuang from "../public/assets/Members/jacquelineHuang.jpg";
import janevraPier from "../public/assets/Members/janevraPier.jpg";
import jasmineGao from "../public/assets/Members/jasmineGao.jpg";
import jasonWu from "../public/assets/Members/jasonWu.jpg";
import jeremyLin from "../public/assets/Members/jeremyLin.jpg";
import jessicaHoang from "../public/assets/Members/jessicaHoang.jpg";
import jessicaTan from "../public/assets/Members/jessicaTan.jpg";
import jinaKim from "../public/assets/Members/jinaKim.jpg";
import joseKerketta from "../public/assets/Members/joseKerketta.jpg";
import juliaBartman from "../public/assets/Members/juliaBartman.jpg";
import kabeloDike from "../public/assets/Members/kabeloDike.jpg";
import karinaVerma from "../public/assets/Members/karinaVerma.jpg";
import kayneLee from "../public/assets/Members/kayneLee.jpg";
import keenanYang from "../public/assets/Members/keenanYang.jpg";
import kelvinNguyen from "../public/assets/Members/kelvinNguyen.jpg";
import kevinValencia from "../public/assets/Members/kevinValencia.jpg";
import kevinYe from "../public/assets/Members/kevinYe.jpg";
import lucasChow from "../public/assets/Members/lucasChow.jpg";
import lukasCupsa from "../public/assets/Members/lukasCupsa.jpg";
import matthewKim from "../public/assets/Members/matthewKim.jpg";
import michaelCurry from "../public/assets/Members/michaelCurry.jpg";
import miguelPereira from "../public/assets/Members/miguelPereira.jpg";
import moonLe from "../public/assets/Members/moonLe.jpg";
import nathanReynolds from "../public/assets/Members/nathanReynolds.jpg";
import nicoleSteiner from "../public/assets/Members/nicoleSteiner.jpg";
import nickArchambault from "../public/assets/Members/nickArchambault.jpg";
import noahYu from "../public/assets/Members/noahYu.jpg";
import reneeKim from "../public/assets/Members/reneeKim.jpg";
import richardGuo from "../public/assets/Members/richardGuo.jpg";
import sagePearl from "../public/assets/Members/sagePearl.jpg";
import serenaSanchez from "../public/assets/Members/serenaSanchez.jpg";
import simonRisk from "../public/assets/Members/simonRisk.jpg";
import sinduMunasinghe from "../public/assets/Members/sinduMunasinghe.jpg";
import sophiaWang from "../public/assets/Members/sophiaWang.jpg";
import thomasHuo from "../public/assets/Members/thomasHuo.jpg";
import udulaAbeykoon from "../public/assets/Members/udulaAbeykoon.jpg";
import vivianLee from "../public/assets/Members/vivianLee.jpg";
import williamDu from "../public/assets/Members/williamDu.jpg";
import zaneAlhamwy from "../public/assets/Members/zaneAlhamwy.jpg";

// All positions team members can have
const Positions = [
	"Co-Chair",
	"Club Operations",

	"Product Manager",
	"Senior Developer",
	"Developer",
	"Senior UI/UX Designer",
	"UI/UX Designer",
	"Senior Business Analyst",
	"Business Analyst",
	"Frosh Rep",

	"Website Developer",
];

const generateMemberData = (
	image,
	name,
	position,
	linkedin = "qtma",
	subPosition = ""
) => {
	// Param verification
	if (typeof image !== "object") {
		throw new Error(
			`Team member's image must be an image object (import it). Image value: ${JSON.stringify(
				image
			)} Type: ${typeof image}`
		);
	}
	if (typeof name !== "string" || name.match(/^([A-Za-z -])+?$/) == null) {
		throw new Error(`Name: ${name} is invalid, see regex above`);
	}
	if (typeof position !== "string" || !Positions.includes(position)) {
		throw new Error(`'${position}' is not a valid position`);
	}
	if (typeof linkedin !== "string" || !linkedin) {
		throw new Error(
			`Linkedin is invalid, must be a valid profile url or # for no profile. Parameter value: ${linkedin}`
		);
	}
	if (typeof subPosition !== "string") {
		throw new Error(
			`Invalid Sub-Position, must be a string (can be empty). Value: ${subPosition}`
		);
	}

	// Construct & return new object
	return {
		image: image,
		name: name,
		position: position,
		subPosition: subPosition,
		linkedIn: linkedin.startsWith("https://")
			? linkedin
			: `https://www.linkedin.com/in/${linkedin}/`,
	};
};

const ClubMembers = [
	// Co-Chairs
	generateMemberData(williamDu, "William Du", "Co-Chair", "williamdu853"),
	generateMemberData(
		chloeHouvardas,
		"Chloe Houvardas",
		"Co-Chair",
		"chloe-houvardas"
	),
	generateMemberData(claireHu, "Claire Hu", "Co-Chair", "huclaire"),
	generateMemberData(
		janevraPier,
		"Janevra Pier",
		"Co-Chair",
		"janevra-pier-687562277"
	),

	// Exec / Club Operations
	generateMemberData(
		amandaLi,
		"Amanda Li",
		"Club Operations",
		"aamanda-li",
		"Marketing"
	),
	generateMemberData(
		aminahRizwan,
		"Aminah Rizwan",
		"Club Operations",
		"aminahrizwan",
		"Sponsorships"
	),
	generateMemberData(
		cynthiaChoi,
		"Cynthia Choi",
		"Club Operations",
		"choicynthia",
		"People & Culture"
	),

	generateMemberData(
		michaelCurry,
		"Michael Curry",
		"Club Operations",
		"michaelcurry-",
		"Director – PM"
	),
	generateMemberData(
		kayneLee,
		"Kayne Lee",
		"Club Operations",
		"kaynelee",
		"Director – Dev"
	),
	generateMemberData(
		nathanReynolds,
		"Nathan Reynolds",
		"Club Operations",
		"nathan-reynolds-78a47b290",
		"Director – BA"
	),

	generateMemberData(
		nickArchambault,
		"Nick Archambault",
		"Club Operations",
		"nick-archambault",
		"Senior Advisor"
	),
	generateMemberData(
		jasmineGao,
		"Jasmine Gao",
		"Club Operations",
		"gao-jasmine",
		"Senior Advisor"
	),

	// Product Managers
	generateMemberData(
		connorLeung,
		"Connor Leung",
		"Product Manager",
		"connorleung"
	),
	generateMemberData(
		nicoleSteiner,
		"Nicole Steiner",
		"Product Manager",
		"nicole-steinerqueens"
	),
	generateMemberData(
		karinaVerma,
		"Karina Verma",
		"Product Manager",
		"karina-verma-565027187"
	),
	generateMemberData(
		erinZhang,
		"Erin Zhang",
		"Product Manager",
		"erin-r-zhang"
	),

	// Sr. UI/UX Designers
	generateMemberData(
		hanaBrissenden,
		"Hana Brissenden",
		"Senior UI/UX Designer",
		"hana-brissenden-063b3a274"
	),
	generateMemberData(
		matthewKim,
		"Matthew Kim",
		"Senior UI/UX Designer",
		"geonho-mattkim"
	),
	generateMemberData(
		serenaSanchez,
		"Serena Sanchez",
		"Senior UI/UX Designer",
		"serenasanchez2025"
	),
	generateMemberData(noahYu, "Noah Yu", "Senior UI/UX Designer", "noahyu"),

	// UI/UX Designers
	generateMemberData(
		bethArmstrong,
		"Beth Armstrong",
		"UI/UX Designer",
		"elizabethrosearmstrong"
	),
	// TODO replace with high quality
	generateMemberData(
		amandaCao,
		"Amanda Cao",
		"UI/UX Designer",
		"amanda-cao-b214a2290"
	),
	generateMemberData(
		ameliaHalverson,
		"Amelia Halverson",
		"UI/UX Designer",
		"amelia-halverson"
	),
	generateMemberData(jinaKim, "Jina Kim", "UI/UX Designer", "kimjina"),
	generateMemberData(reneeKim, "Renee Kim", "UI/UX Designer", "reneehjkim"),
	generateMemberData(
		keenanYang,
		"Keenan Yang",
		"UI/UX Designer",
		"keenanyang1027"
	),
	generateMemberData(kevinYe, "Kevin Ye", "UI/UX Designer", "kevinye0525"),

	// Sr. Developers
	generateMemberData(
		andreeaCobzaru,
		"Andreea Cobzaru",
		"Senior Developer",
		"andreeacobzaru"
	),
	generateMemberData(
		sinduMunasinghe,
		"Sindu Munasinghe",
		"Senior Developer",
		"sindusara-munasinghe"
	),
	generateMemberData(
		anthonyQiu,
		"Anthony Qiu",
		"Senior Developer",
		"anthonyqiu3"
	),
	generateMemberData(simonRisk, "Simon Risk", "Senior Developer", "simon-risk"),

	// Developers
	generateMemberData(zaneAlhamwy, "Zane Al-Hamwy", "Developer", "zanealhamwy"),
	generateMemberData(lucasChow, "Lucas Chow", "Developer", "lucassnchow"),
	generateMemberData(kabeloDike, "Kabelo Dike", "Developer", "kabelo-dike"),
	generateMemberData(isaacFung, "Isaac Fung", "Developer", "isaacfungg"),
	generateMemberData(richardGuo, "Richard Guo", "Developer", "-richard-guo"),
	generateMemberData(
		joseKerketta,
		"Jose Kerketta",
		"Developer",
		"jose-kerketta"
	),
	generateMemberData(
		kelvinNguyen,
		"Kelvin Nguyen",
		"Developer",
		"nguyen-kelvin"
	),
	generateMemberData(
		miguelPereira,
		"Miguel Pereira",
		"Developer",
		"miguel-pereira-canada"
	),
	generateMemberData(
		kevinValencia,
		"Kevin Valencia",
		"Developer",
		"kevin-valenciaa"
	),
	generateMemberData(sophiaWang, "Sophia Wang", "Developer", "sophiawg"),
	generateMemberData(jasonWu, "Jason Wu", "Developer", "29jason-wu"),

	// Sr. Business Analysts
	generateMemberData(
		thomasHuo,
		"Thomas Huo",
		"Senior Business Analyst",
		"thomashuo-"
	),
	generateMemberData(moonLe, "Moon Le", "Senior Business Analyst", "moonle--"),
	generateMemberData(
		sagePearl,
		"Sage Pearl",
		"Senior Business Analyst",
		"sage-pearl-364a61290"
	),
	generateMemberData(
		brianYts,
		"Brian YTS",
		"Senior Business Analyst",
		"brian-yts"
	),

	// Business Analysts
	generateMemberData(
		dylanAtwal,
		"Dylan Atwal",
		"Business Analyst",
		"dylan-atwal"
	),
	generateMemberData(
		juliaBartman,
		"Julia Bartman",
		"Business Analyst",
		"julia-bartman"
	),
	generateMemberData(
		lukasCupsa,
		"Lukas Cupsa",
		"Business Analyst",
		"lukas-cupsa"
	),
	generateMemberData(
		jessicaHoang,
		"Jessica Hoang",
		"Business Analyst",
		"jessica-hoang-707639213"
	),
	generateMemberData(
		jacquelineHuang,
		"Jacqueline Huang",
		"Business Analyst",
		"jacqueline-sq-huang"
	),
	generateMemberData(vivianLee, "Vivian Lee", "Business Analyst", "leevvivian"),
	generateMemberData(jeremyLin, "Jeremy Lin", "Business Analyst", "-jeremylin"),
	generateMemberData(
		ilanaMoshkovich,
		"Ilana Moshkovich",
		"Business Analyst",
		"ilana-moshkovich-596693232"
	),

	// First-Year Reps
	generateMemberData(
		jessicaTan,
		"Jessica Tan",
		"Frosh Rep",
		"jessica-tan-56213231a",
		"Jr. UI/UX Designer"
	),
	generateMemberData(
		udulaAbeykoon,
		"Udula Abeykoon",
		"Frosh Rep",
		"udula-abeykoon",
		"Jr. Developer"
	),
	generateMemberData(
		brandonNguyen,
		"Brandon Nguyen",
		"Frosh Rep",
		"brandon-nguyen200713",
		"Jr. Business Analyst"
	),
	generateMemberData(
		danielYeung,
		"Daniel Yeung",
		"Frosh Rep",
		"daniel-yeung-4498a92a4",
		"Jr. Business Analyst"
	),
];

export { Positions, ClubMembers };
