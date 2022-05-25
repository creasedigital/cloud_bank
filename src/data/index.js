import home from "../assets/nav_icons/dashboard 1.svg";
import sendmoney from "../assets/nav_icons/send.svg";
import investment from "../assets/nav_icons/investment line 1.svg";
import loan from "../assets/nav_icons/loan fill 1.svg";
import card from "../assets/nav_icons/card with hand line 1.svg";
import transactions from "../assets/nav_icons/bill line.svg";
import marketplace from "../assets/nav_icons/3885905 1.svg";
import settings from "../assets/nav_icons/settings line.svg";

import monthloan from "../assets/illustrations/One Month.svg";
import capitaloverdraft from "../assets/illustrations/Working Capital Overdraft.svg";
import operationoverdraft from "../assets/illustrations/Operation Overdraft.svg";
import spreadloan from "../assets/illustrations/T&T.svg";
import infrastructureloan from "../assets/illustrations/Infrastructure.svg";
import personalloan from "../assets/illustrations/personal.svg";
import pawnloan from "../assets/illustrations/Pawn.svg";
import fxline from "../assets/illustrations/Frame 33.svg";

export const cards = [
	{
		id: 1,
		icon: monthloan,
		title: "One Month Loan",
		desc: "Access funds for personal upkeep for 30 days only",
	},
	{
		id: 2,
		icon: capitaloverdraft,
		title: "Working Capital Overdraft",
		desc: "Access continuous funds to grow your business stocks and inventory",
	},
	{
		id: 3,
		icon: operationoverdraft,
		title: "Operation Overdraft",
		desc: "Financing for your business operations",
	},
	{
		id: 4,
		icon: spreadloan,
		title: "T and T Spread Loan",
		desc: " Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market",
	},
	{
		id: 5,
		icon: infrastructureloan,
		title: "Infrastrusture Loan",
		desc: "Facility for your business to purchase vehicles, assets, and building upgrades.",
	},
	{
		id: 6,
		icon: personalloan,
		title: "Personal Loan",
		desc: "Instant funds for your personal expenses.",
	},
	{
		id: 7,
		icon: pawnloan,
		title: "Pawn Loan",
		desc: "Get cash value on temporary sale of your items within 72hours.",
	},
	{
		id: 8,
		icon: fxline,
		title: "FX line",
		desc: "Access Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
	},
];

export const menuLinks = [
	{
		id: 1,
		icon: home,
		title: "Home",
		path: "/",
	},
	{
		id: 2,
		icon: sendmoney,
		title: "Send Money",
		path: "/send-money",
	},
	{
		id: 3,
		icon: investment,
		title: "Investment",
		path: "/investment",
	},
	{
		id: 4,
		icon: loan,
		title: "Loan",
		path: "/loan",
	},
	{
		id: 5,
		icon: card,
		title: "Cards",
		path: "/cards",
	},
	{
		id: 6,
		icon: transactions,
		title: "Transactions",
		path: "/transactions",
	},
	{
		id: 7,
		icon: marketplace,
		title: "Marketplace",
		path: "/marketplace",
	},
	{
		id: 8,
		icon: settings,
		title: "Settings",
		path: "/settings",
	},
];
