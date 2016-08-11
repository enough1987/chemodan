System.register(['@angular/platform-browser-dynamic', '@angular/http', "@angular/core", "app/services/storage.service", 'app/components/header/header.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, core_1, storage_service_1, header_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            /*
            bootstrap(StartPointComponent, [
              HTTP_PROVIDERS,
              AppRouterProviders,
              StorageService
            ]).
            */
            platform_browser_dynamic_1.bootstrap(header_component_1.HeaderComponent, [
                http_1.HTTP_PROVIDERS,
                storage_service_1.StorageService
            ]).
                catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLHFCQUFjLEVBQUUsQ0FBQztZQVVqQjs7Ozs7O2NBTUU7WUFDRixvQ0FBUyxDQUFDLGtDQUFlLEVBQUU7Z0JBQ3pCLHFCQUFjO2dCQUNkLGdDQUFjO2FBQ2YsQ0FBQztnQkFDRixLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUEiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG4vLyBOTyBFUlJPUiBcclxuaW1wb3J0IHtlbmFibGVQcm9kTW9kZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuXHJcbi8vaW1wb3J0IHtBcHBSb3V0ZXJQcm92aWRlcnN9IGZyb20gJ2FwcC9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSBcImFwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2VcIjtcclxuXHJcbi8vaW1wb3J0IHtTdGFydFBvaW50Q29tcG9uZW50fSBmcm9tIFwiYXBwL2NvbXBvbmVudHMvZ2xvYmFsL3N0YXJ0LXBvaW50LmNvbXBvbmVudFwiO1xyXG4vL2ltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJ2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbi8qXHJcbmJvb3RzdHJhcChTdGFydFBvaW50Q29tcG9uZW50LCBbXHJcbiAgSFRUUF9QUk9WSURFUlMsXHJcbiAgQXBwUm91dGVyUHJvdmlkZXJzLFxyXG4gIFN0b3JhZ2VTZXJ2aWNlXHJcbl0pLlxyXG4qL1xyXG5ib290c3RyYXAoSGVhZGVyQ29tcG9uZW50LCBbXHJcbiAgSFRUUF9QUk9WSURFUlMsXHJcbiAgU3RvcmFnZVNlcnZpY2VcclxuXSkuXHJcbmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
