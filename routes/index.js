/*
 * @Author: BDFD
 * @Date: 2021-10-10 13:47:41
 * @LastEditTime: 2022-03-24 16:44:26
 * @LastEditors: BDFD
 * @Description: In User Settings Edit
 * @FilePath: \SideProject054_XinPortfolio\routes\index.js
 */
var express = require("express");
var router = express.Router();

//app.use('/', indexRouter);

/* GET home page. */
// router.get("/", function (req, res, next) {
// 	res.render("Index/Login", { layout: "page_layout/Login_layout" });
// });

router.get("/", function (req, res, next) {
	res.render("Index/01home", { layout: "page_layout/Resume_layout" });
});

router.get("/home", function (req, res, next) {
	res.render("Index/01home", { layout: "page_layout/Resume_layout" });
});

router.get("/intro_aboutme", function (req, res, next) {
	res.render("Index/02Intro01", { layout: "page_layout/Resume_layout" });
});

router.get("/intro_teachingphilosophy", function (req, res, next) {
	res.render("Index/02Intro02", { layout: "page_layout/Resume_layout" });
});

router.get("/edu", function (req, res, next) {
	res.render("Index/03Edu&Achievement01", { layout: "page_layout/Resume_layout" });
});

router.get("/work_exp", function (req, res, next) {
	res.render("Index/03Edu&Achievement02", { layout: "page_layout/Resume_layout" });
});

router.get("/placement_exp", function (req, res, next) {
	res.render("Index/03Edu&Achievement03", { layout: "page_layout/Resume_layout" });
});

router.get("/professional_cert", function (req, res, next) {
	res.render("Index/03Edu&Achievement04", { layout: "page_layout/Resume_layout" });
});

router.get("/professional_devp", function (req, res, next) {
	res.render("Index/03Edu&Achievement05", { layout: "page_layout/Resume_layout" });
});

router.get("/act_plan_ryersonecs", function (req, res, next) {
	res.render("Index/04ActivityPlan01", { layout: "page_layout/Resume_layout" });
});

router.get("/act_plan_workplace_kingdergarden", function (req, res, next) {
	res.render("Index/04ActivityPlan02", { layout: "page_layout/Resume_layout" });
});

router.get("/act_plan_workplace_preschool", function (req, res, next) {
	res.render("Index/04ActivityPlan03", { layout: "page_layout/Resume_layout" });
});

router.get("/academic_significant_assignment", function (req, res, next) {
	res.render("Index/05AcademicCourseWork01", { layout: "page_layout/Resume_layout" });
});

router.get("/academic_annotated_bibliography", function (req, res, next) {
	res.render("Index/05AcademicCourseWork02", { layout: "page_layout/Resume_layout" });
});

module.exports = router;
