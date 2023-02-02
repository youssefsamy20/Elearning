// const Course = require("../Schema/courses")
// const Subject = require("../Schema/courseSubject")
// const instructor = require("../Schema/instructor")

// exports.searchByQueryType = async (req, res) => {
// 	const { type, query } = req.body;

// 	try {
// 		let course;

// 		switch (type) {
// 			case 'text':
// 				products = await Product.find({ $text: { $search: query } });
// 				break;
			
// 		}

// 		if (!course.length > 0) {
// 			products = await course.find({});
// 		}

// 		res.json({ course });
// 	} catch (err) {
// 		console.log(err, 'filter Controller.searchByQueryType error');
// 		res.status(500).json({
// 			errorMessage: 'Please try again later',
// 		});
// 	}};