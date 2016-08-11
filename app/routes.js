System.register(['@angular/router', "app/components/app/app.component", "app/components/test/test.component", "app/components/test-two/test-two.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, app_component_1, test_component_1, test_two_component_1;
    var routes, AppRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (test_two_component_1_1) {
                test_two_component_1 = test_two_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', name: 'start', component: app_component_1.AppComponent, useAsDefault: true },
                { path: 'test', component: test_component_1.TestComponent },
                { path: 'test-two', component: test_two_component_1.TestTwoComponent }
            ];
            exports_1("AppRouterProviders", AppRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBU00sTUFBTSxFQU1DLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztZQU56QixNQUFNLEdBQWlCO2dCQUMzQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO2dCQUN4RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Z0JBQzFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7YUFDbEQsQ0FBQztZQUVXLGdDQUFBLGtCQUFrQixHQUFHO2dCQUNoQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN0QixDQUFBLENBQUMiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gXCJhcHAvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCJhcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gXCJhcHAvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGVzdFR3b0NvbXBvbmVudH0gZnJvbSBcImFwcC9jb21wb25lbnRzL3Rlc3QtdHdvL3Rlc3QtdHdvLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXHJcbiAgeyBwYXRoOiAnJywgbmFtZTogJ3N0YXJ0JywgY29tcG9uZW50OiBBcHBDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gIHsgcGF0aDogJ3Rlc3QnLCBjb21wb25lbnQ6IFRlc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICd0ZXN0LXR3bycsIGNvbXBvbmVudDogVGVzdFR3b0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyUHJvdmlkZXJzID0gW1xyXG4gIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
