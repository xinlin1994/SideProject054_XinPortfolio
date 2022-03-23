/*
 * @Author: BDFD
 * @Date: 2021-10-10 13:47:41
 * @LastEditTime: 2022-03-23 16:14:44
 * @LastEditors: BDFD
 * @Description: In User Settings Edit
 * @FilePath: \SideProject054_XinPortfolio\routes\index.js
 */
var express = require("express");
var router = express.Router();

//app.use('/', indexRouter);

/* GET home page. */
// router.get('/', function (req, res, next) {
// 	res.render('Index/Login', { layout: 'page_layout/Login_layout' });
// });
router.get("/", function (req, res, next) {
	res.render("Index/01Home", { layout: "page_layout/Resume_layout" });
});

router.get("/home", function (req, res, next) {
	res.render("Index/01home", { layout: "page_layout/Resume_layout" });
});

router.get("/intro", function (req, res, next) {
	res.render("Index/02Intro", { layout: "page_layout/Resume_layout" });
});

router.get("/skill_list", function (req, res, next) {
	res.render("Index/02skill_list", { layout: "page_layout/Resume_layout" });
});
router.get("/certificate", function (req, res, next) {
	res.render("Index/02_1certificate_list", {
		layout: "page_layout/Resume_layout",
	});
});

router.get("/work_exp", function (req, res, next) {
	res.render("Index/03work_exp", { layout: "page_layout/Resume_layout" });
});

router.get("/project", function (req, res, next) {
	res.render("Index/04project", { layout: "page_layout/Resume_layout" });
});

router.get("/demo", function (req, res, next) {
	res.render("Index/05demo", { layout: "page_layout/Resume_layout" });
});

router.get("/gallery", function (req, res, next) {
	res.render("Index/06gallery", { layout: "page_layout/Resume_layout" });
});

router.get("/contact", function (req, res, next) {
	res.render("Index/07contact", { layout: "page_layout/Resume_layout" });
});

module.exports = router;
