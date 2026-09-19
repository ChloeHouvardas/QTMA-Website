export type FaqItem = {
	question: string;
	answer: string;
};

export const applicantFaqItems: FaqItem[] = [
	{
		question: "What are you looking for in applicants?",
		answer:
			"We look for curious, collaborative people who are excited to learn and build. Strong applicants communicate clearly, take initiative, and show genuine interest in solving real problems. Relevant experience is helpful, but you do not need a perfect resume, we also value your potential, perspective, and willingness to grow.",
	},
	{
		question: "How can I get involved outside of being on the club?",
		answer:
			"Follow @queenstechmedia on Instagram and QTMA on LinkedIn for public workshops, panels, product showcases, and other community events. These are great opportunities to meet the team, learn from our partners and alumni, and stay up to date on future applications.",
	},
	{
		question: "Do you only take computer science and commerce students?",
		answer:
			"No. QTMA welcomes Queen's students from every faculty and program. Our strongest product teams bring together different backgrounds and ways of thinking. Some roles may call for specific skills, but your program of study does not determine whether you can contribute.",
	},
	{
		question: "What happens to products afterwards?",
		answer:
			"After the QTMA year ends, teams decide what comes next for their product. Some members continue developing and launching their idea independently, while others conclude the project after sharing their work at Demo Days. Past products remain part of QTMA's archive and the portfolios of the students who built them.",
	},
];
