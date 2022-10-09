"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("shops", [
			{
				slug: "ocean",
				name: "Магазин Океан",
				address: "ул. Республики, 42",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#14AD99",
				secondColor: "#242424",
				transparency: "6%",
				bc: "/icons/diamonds.svg",
			},
			{
				slug: "parus",
				name: "ТЦ Паруса",
				address: "ул. Малыгина, 90",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#A36EBE",
				secondColor: "#B1D465",
				transparency: "20%",
				bc: "/icons/clouds.svg",
			},
			{
				slug: "monblan",
				name: "ТЦ Монблан",
				address: "ул. Совесткая, 51к3",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#FA5452",
				secondColor: "#FFC633",
				transparency: "22%",
				bc: "/icons/hexagons.svg",
			},
			{
				slug: "kalinka",
				name: "ТЦ Калинка",
				address: "Республики 65",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#FFB92A",
				secondColor: "#5DD1B7",
				transparency: "24%",
				bc: "/icons/morphing.svg",
			},
			{
				slug: "dezhnev",
				name: "ДЦ Семён Дежнёв",
				address: "ул. Герцена, 96",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#01A9D5",
				secondColor: "#FE6A69",
				transparency: "8%",
				bc: "/icons/squares.svg",
			},
			{
				slug: "novin",
				name: "ЖК Новин",
				address: "ул. Республики, 65",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#FFB92A",
				secondColor: "#8BA682",
				transparency: "12%",
				bc: "/icons/flowers.svg",
			},
			{
				slug: "europ",
				name: "ЖК Европейский",
				address: "ул. Республики, 65",
				photos: [""],
				weekdaysStart: "07:30",
				weekdaysEnd: "23:00",
				weekendsStart: "08:00",
				weekendsEnd: "22:00",
				mainColor: "#23BCC7",
				secondColor: "#FFA825",
				transparency: "16%",
				bc: "/icons/spicy_flowers.svg",
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("shops", null, {});
	}
};
