/**
 * Data for all QTMA members – 2025/26 roster
 */

import amandaCao from "../public/assets/Members/amandaCao.png";
import amandaLi from "../public/assets/Members/amandaLi.png";
import ameliaHalverson from "../public/assets/Members/ameliaHalverson.png";
import aminahRizwan from "../public/assets/Members/aminahRizwan.png";
import andreaCozbaru from "../public/assets/Members/andreaCozbaru.png";
import anthonyQiu from "../public/assets/Members/anthonyQiu.png";
import bethArmstrong from "../public/assets/Members/bethArmstrong.png";
import brandonNguyen from "../public/assets/Members/brandonNguyen.png";
import brianYts from "../public/assets/Members/brianYts.png";
import chloeHouvardas from "../public/assets/Members/chloeHouvardas.png";
import claireHu from "../public/assets/Members/claireHu.png";
import connorLeung from "../public/assets/Members/connorLeung.png";
import cynthiaChoi from "../public/assets/Members/cynthiaChoi.png";
import danielYeung from "../public/assets/Members/danielYeung.png";
import dylanAtwal from "../public/assets/Members/dylanAtwal.png";
import erinZhang from "../public/assets/Members/erinZhang.png";
import hanaBrissenden from "../public/assets/Members/hanaBrissenden.png";
import ilianaMoshkovich from "../public/assets/Members/ilianaMoshkovich.png";
import isaacFung from "../public/assets/Members/isaacFung.png";
import jacquelineHuang from "../public/assets/Members/jacquelineHuang.png";
import janevraPier from "../public/assets/Members/janevraPier.png";
import jasmineGao from "../public/assets/Members/jasmineGao.png";
import jasonWu from "../public/assets/Members/jasonWu.png";
import jeremyLin from "../public/assets/Members/jeremyLin.png";
import jessicaHoang from "../public/assets/Members/jessicaHoang.png";
import jessicaTan from "../public/assets/Members/jessicaTan.png";
import jinaKim from "../public/assets/Members/jinaKim.png";
import joseKerketta from "../public/assets/Members/joseKerketta.png";
import juliaBartman from "../public/assets/Members/juliaBartman.png";
import kabeloDike from "../public/assets/Members/kabeloDike.png";
import karinaVerma from "../public/assets/Members/karinaVerma.png";
import kayneLee from "../public/assets/Members/kayneLee.png";
import keenanYang from "../public/assets/Members/keenanYang.png";
import kelvinNguyen from "../public/assets/Members/kelvinNguyen.png";
import kevinValencia from "../public/assets/Members/kevinValencia.png";
import kevinYe from "../public/assets/Members/kevinYe.png";
import lucasChow from "../public/assets/Members/lucasChow.png";
import lukasCupsa from "../public/assets/Members/lukasCupsa.png";
import matthewKim from "../public/assets/Members/matthewKim.png";
import michaelCurry from "../public/assets/Members/michaelCurry.png";
import miguelPereira from "../public/assets/Members/miguelPereira.png";
import moonLe from "../public/assets/Members/moonLe.png";
import nathanReynolds from "../public/assets/Members/nathanReynolds.png";
import nickArchambault from "../public/assets/Members/nickArchambault.png";
import noahYu from "../public/assets/Members/noahYu.png";
import reneeKim from "../public/assets/Members/reneeKim.png";
import richardGuo from "../public/assets/Members/richardGuo.png";
import sagePearl from "../public/assets/Members/sagePearl.png";
import serenaSanchez from "../public/assets/Members/serenaSanchez.png";
import simonRisk from "../public/assets/Members/simonRisk.png";
import sinduMunasinghe from "../public/assets/Members/sinduMunasinghe.png";
import sophiaWang from "../public/assets/Members/sophiaWang.png";
import thomasHuo from "../public/assets/Members/thomasHuo.png";
import udulaAbeykoon from "../public/assets/Members/udulaAbeykoon.png";
import vivianLee from "../public/assets/Members/vivianLee.png";
import williamDu from "../public/assets/Members/williamDu.png";
import zaneAlhamwy from "../public/assets/Members/zaneAlhamwy.png";

// All positions team members can have
const Positions = [
  "Co-Chair",
  "Club Operations",

  "Product Manager",
  "Senior Developer",
  "Developer",
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
  generateMemberData(williamDu, "William Du", "Co-Chair", "william-du"),
  generateMemberData(
    chloeHouvardas,
    "Chloe Houvardas",
    "Co-Chair",
    "chloe-houvardas"
  ),
  generateMemberData(claireHu, "Claire Hu", "Co-Chair", "claire-hu"),
  generateMemberData(janevraPier, "Janevra Pier", "Co-Chair", "janevra-pier"),

  // Exec / Club Operations
  generateMemberData(
    amandaLi,
    "Amanda Li",
    "Club Operations",
    "amanda-li",
    "Marketing"
  ),
  generateMemberData(
    aminahRizwan,
    "Aminah Rizwan",
    "Club Operations",
    "aminah-rizwan",
    "Sponsorships"
  ),
  generateMemberData(
    cynthiaChoi,
    "Cynthia Choi",
    "Club Operations",
    "cynthia-choi",
    "People & Culture"
  ),

  generateMemberData(
    michaelCurry,
    "Michael Curry",
    "Club Operations",
    "michael-curry",
    "Director – PM"
  ),
  generateMemberData(
    kayneLee,
    "Kayne Lee",
    "Club Operations",
    "kayne-lee",
    "Director – Dev"
  ),
  generateMemberData(
    nathanReynolds,
    "Nathan Reynolds",
    "Club Operations",
    "nathan-reynolds",
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
    "jasmine-gao",
    "Senior Advisor"
  ),

  // Product Managers
  generateMemberData(
    connorLeung,
    "Connor Leung",
    "Product Manager",
    "connor-leung"
  ),
  // Nicole Steiner omitted for now – no nicoleSteiner.png in folder
  generateMemberData(
    karinaVerma,
    "Karina Verma",
    "Product Manager",
    "karina-verma"
  ),
  generateMemberData(
    erinZhang,
    "Erin Zhang",
    "Product Manager",
    "erin-zhang"
  ),

  // Sr. UI/UX Designers
  generateMemberData(
    hanaBrissenden,
    "Hana Brissenden",
    "UI/UX Designer",
    "hana-brissenden",
    "Sr. UI/UX Designer"
  ),
  generateMemberData(
    matthewKim,
    "Matthew Kim",
    "UI/UX Designer",
    "matthew-kim",
    "Sr. UI/UX Designer"
  ),
  generateMemberData(
    serenaSanchez,
    "Serena Sanchez",
    "UI/UX Designer",
    "serena-sanchez",
    "Sr. UI/UX Designer"
  ),
  generateMemberData(
    noahYu,
    "Noah Yu",
    "UI/UX Designer",
    "noah-yu",
    "Sr. UI/UX Designer"
  ),

  // UI/UX Designers
  generateMemberData(
    bethArmstrong,
    "Beth Armstrong",
    "UI/UX Designer",
    "beth-armstrong"
  ),
  generateMemberData(
    amandaCao,
    "Amanda Cao",
    "UI/UX Designer",
    "amanda-cao"
  ),
  generateMemberData(
    ameliaHalverson,
    "Amelia Halverson",
    "UI/UX Designer",
    "amelia-halverson"
  ),
  generateMemberData(jinaKim, "Jina Kim", "UI/UX Designer", "jina-kim"),
  generateMemberData(reneeKim, "Renee Kim", "UI/UX Designer", "renee-kim"),
  generateMemberData(
    keenanYang,
    "Keenan Yang",
    "UI/UX Designer",
    "keenan-yang"
  ),
  generateMemberData(kevinYe, "Kevin Ye", "UI/UX Designer", "kevin-ye"),

  // Sr. Developers
  generateMemberData(
    andreaCozbaru,
    "Andrea Cozbaru",
    "Senior Developer",
    "andrea-cobzaru"
  ),
  generateMemberData(
    sinduMunasinghe,
    "Sindu Munasinghe",
    "Senior Developer",
    "sindu-munasinghe"
  ),
  generateMemberData(anthonyQiu, "Anthony Qiu", "Senior Developer", "anthony-qiu"),
  generateMemberData(simonRisk, "Simon Risk", "Senior Developer", "simon-risk"),

  // Developers
  generateMemberData(
    zaneAlhamwy,
    "Zane Al-Hamwy",
    "Developer",
    "zane-alhamwy"
  ),
  generateMemberData(lucasChow, "Lucas Chow", "Developer", "lucas-chow"),
  generateMemberData(kabeloDike, "Kabelo Dike", "Developer", "kabelo-dike"),
  generateMemberData(isaacFung, "Isaac Fung", "Developer", "isaac-fung"),
  generateMemberData(richardGuo, "Richard Guo", "Developer", "richard-guo"),
  generateMemberData(joseKerketta, "Jose Kerketta", "Developer", "jose-kerketta"),
  generateMemberData(kelvinNguyen, "Kelvin Nguyen", "Developer", "kelvin-nguyen"),
  generateMemberData(
    miguelPereira,
    "Miguel Pereira",
    "Developer",
    "miguel-pereira"
  ),
  generateMemberData(
    kevinValencia,
    "Kevin Valencia",
    "Developer",
    "kevin-valencia"
  ),
  generateMemberData(sophiaWang, "Sophia Wang", "Developer", "sophia-wang"),
  generateMemberData(jasonWu, "Jason Wu", "Developer", "jason-wu"),

  // Sr. Business Analysts
  generateMemberData(
    thomasHuo,
    "Thomas Huo",
    "Senior Business Analyst",
    "thomas-huo"
  ),
  generateMemberData(moonLe, "Moon Le", "Senior Business Analyst", "moon-le"),
  generateMemberData(
    sagePearl,
    "Sage Pearl",
    "Senior Business Analyst",
    "sage-pearl"
  ),
  generateMemberData(
    brianYts,
    "Brian Yts",
    "Senior Business Analyst",
    "brian-yts"
  ),

  // Business Analysts
  generateMemberData(dylanAtwal, "Dylan Atwal", "Business Analyst", "dylan-atwal"),
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
    "jessica-hoang"
  ),
  generateMemberData(
    jacquelineHuang,
    "Jacqueline Huang",
    "Business Analyst",
    "jacqueline-huang"
  ),
  generateMemberData(
    vivianLee,
    "Vivian Lee",
    "Business Analyst",
    "vivian-lee"
  ),
  generateMemberData(jeremyLin, "Jeremy Lin", "Business Analyst", "jeremy-lin"),
  generateMemberData(
    ilianaMoshkovich,
    "Ilana Moshkovich",
    "Business Analyst",
    "ilana-moshkovich"
  ),

  // First-Year Reps
  generateMemberData(
    jessicaTan,
    "Jessica Tan",
    "Frosh Rep",
    "jessica-tan",
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
    "brandon-nguyen",
    "Jr. Business Analyst"
  ),
  generateMemberData(
    danielYeung,
    "Daniel Yeung",
    "Frosh Rep",
    "daniel-yeung",
    "Jr. Business Analyst"
  ),
];

export { Positions, ClubMembers };