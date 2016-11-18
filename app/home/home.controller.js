(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.posts = [];

        vm.addPost = addPost;

        vm.order = 'text';

        

        var color = {
            3: 'list-group-item-action list-group-item-success',
            2: 'list-group-item-action list-group-item-warning',
            1: 'list-group-item-action list-group-item-danger'
        };

        vm.getColor = function(post) {
            return color[post.priority];
        }


        //////////////////////

        function addPost() {
            if (vm.newClass) {
                vm.posts.push({
                    text: vm.newPost,
                    priority: vm.newClass
                });
            } else {
                alert('please choose a priority.');
            }

        };



    }

})();
