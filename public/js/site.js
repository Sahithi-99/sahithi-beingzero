Template.navBarTemplate.events({
    'click .dropdown-toggle': function (e) {
        e.preventDefault();
        $(e.target).find('.dropdown-menu').toggle();
        }
});