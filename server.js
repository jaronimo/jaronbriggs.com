'use strict';
let express = require('express');
let app = express();
let port = process.env.PORT || 8080;

app.use((req, res, next) => {
	if (req.get('host') === 'jjberrett.com') {
		return res.redirect(301, 'http://www.jjberrett.com');
	}
	next();
});

app.use(express.static('./public'));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
