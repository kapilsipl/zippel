(function ()
{
    'use strict';

    angular
        .module('app.profile', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.profile', {
            url      : '/profile',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/profile/profile.html',
                    controller : 'ProfileController as vm'
                }
            },
            resolve  : {
                About       : function (apiResolver)
                {
                    return apiResolver.resolve('profile.about@get');
                },
                Abo: function (apiResolver)
                {
                    return apiResolver.resolve('profile.abo@get');
                },
                Occupation: function (apiResolver)
                {
                    return apiResolver.resolve('register.occupation@get');
                },
                Contacts       : function (apiResolver)
                {
                  return apiResolver.resolve('profile.contacts@get');
                },
                Groups       : function (apiResolver)
                {
                  return apiResolver.resolve('profile.groups@get');
                },
                PermissionsDB : function(apiResolver)
                {
                  return apiResolver.resolve('profile.permissionsdb@get');
                },
                PermissionsS : function(apiResolver)
                {
                  return apiResolver.resolve('profile.permissionss@get');
                },
                PermissionsM : function(apiResolver)
                {
                  return apiResolver.resolve('profile.permissionsm@get');
                },
                PermissionsF : function(apiResolver)
                {
                  return apiResolver.resolve('profile.permissionsf@get');
                },
                PermissionsP : function(apiResolver)
                {
                  return apiResolver.resolve('profile.permissionsp@get');
                },
                PermissionsC : function(apiResolver)
                {
                  return apiResolver.resolve('profile.permissionsc@get');
                },
                Accounts: function (apiResolver) {
                    return apiResolver.resolve('share.accounts@get');
                },
                Lists: function (apiResolver) {
                    return apiResolver.resolve('profile.lists@get');
                },
                Widget: function (apiResolver) {
                    return apiResolver.resolve('profile.widget@get');
                }
            },


            bodyClass: 'profile'
        });
        
/*        // Navigation
        msNavigationServiceProvider.saveItem('profile', {
            title : 'Profile',
            icon  : 'icon-account',
            state : 'app.profile',
            weight: 6
        });*/
    }

})();
