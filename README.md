1. Start by clicking on index.html in the main directory.
2. This shows you the feeds and the tests at the bottom.
3. To test if the tests break when their conditions are broken you can:
	Test1: Open app.js and delete the content of allFeeds

	Test2: In app.js delete one of the url from one of the objects.

	Test3: In app.js delete one of the name from one of the objects.

	Test4: Open index.html and delete class="menu-hidden". This will break the test.

	Test5: Get rid of "$('body').addClass('menu-hidden');" in app.js

	Test6: In feedreader.js change "var entry = document.querySelector(".feed .entry");" -> "var entry = document.querySelector(".feed .entry1");" This will break the test.

	Test7: In feedreader.js change "loadFeed(0, function () {" -> "loadFeed(1, function () {" this will compare the same results resulting in a fail because content didn't change.

