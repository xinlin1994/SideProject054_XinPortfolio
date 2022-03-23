/*
 * @Author: BDFD
 * @Date: 2021-10-10 13:47:41
 * @LastEditTime: 2021-11-02 23:38:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Project1.1_David-Online-Portfolio\routes\project.js
 */
var express = require('express');
var router = express.Router();

//app.use('/project', projectRouter);

router.get('/01_hotprogrammingin2020', function (req, res, next) {
	res.render('Project/01_HotProgrammingin2020', {
		layout: 'page_layout/Blog_layout',
	});
});

router.get('/02_House_Model_Prediction', function (req, res, next) {
	res.render('Project/02_HMP/02_House_Model_Prediction', {
		layout: 'page_layout/Project_layout',
	});
});

router.get('/02_HMP_jupyter_notebook', function (req, res, next) {
	res.render('Project/02_HMP/02_HMP_JupyterNotebook', {
		layout: 'page_layout/Project_layout',
	});
});

router.get('/04', function (req, res, next) {
	res.render('Project/04');
});

router.get('/05', function (req, res, next) {
	res.render('Project/05');
});

router.get('/06', function (req, res, next) {
	res.render('Project/06');
});

module.exports = router;
