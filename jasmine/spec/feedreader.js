$(function () {
    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have url', function () {
            for (var i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(0);
            }
        });

        // goes through each object in Feed and checks to make sure they are defined.
        it('have name', function () {
            for (var i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
            }
        });
    });
    
    describe('The menu', function () {
        //Gets the first element named body and checks that its class is "menu-hidden"
        it('is hidden by default', function () {
            expect(document.getElementsByTagName("body")[0].className).toEqual("menu-hidden");
        });

        //Using event fire we wait for a trigger to happen and it checks that after the menu does not hide when clicked and hides when clicked again.
        it('changes visibilty when clicked', function () {
            var link = document.getElementsByClassName('menu-icon-link')[0];
            var body = document.getElementsByTagName("body")[0];
            function eventFire(el, etype) {
                if (el.fireEvent) {
                    el.fireEvent('on' + etype);
                } else {
                    var evObj = document.createEvent('Events');
                    evObj.initEvent(etype, true, false);
                    el.dispatchEvent(evObj);
                }
            }
            ;
            eventFire(link, 'click');
            expect(body.className).not.toEqual("menu-hidden");
            eventFire(link, 'click');
            expect(body.className).toEqual("menu-hidden");
        });
    });
    
    describe('Initial Entries', function () {
        //finds the element .entry in the .feed container and makes sure that it is not null.
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it("single .entry in .feed container", function (done) {
            var entry = document.querySelector(".feed .entry");
            expect(entry).not.toBe(null);
            done();
        });
    });

    describe("New Feed Selection", function () {
        // Test first grabs the content of the first .entry and saves it. Then when the content changes it grabs the first .entry and compares with the old one.
        var oldContent;

        beforeEach(function (done) {
            loadFeed(0, function () {
                var entry = document.querySelector(".feed .entry");
                oldContent = entry.innerHTML;
                loadFeed(1, function () {
                    done();
                })
            });
        });
        it("content changes when new feed is selected", function (done) {
            var entry = document.querySelector(".feed .entry");
            var newContent = entry.innerHTML;
            expect(newContent).not.toEqual(oldContent);
            done();
        });
    });

}());
