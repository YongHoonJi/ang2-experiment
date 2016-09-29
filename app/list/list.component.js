"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('../util/data.service');
var logger_service_1 = require('../util/logger.service');
var ListComponent = (function () {
    function ListComponent(dataService, logger) {
        this.dataService = dataService;
        this.logger = logger;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.mocks = this.dataService.getMocks();
    };
    ListComponent.prototype.onClick = function (mock) {
        this.logger.log(mock.name + " logging!!");
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'my-list',
            templateUrl: 'app/list/list.component.html',
            providers: [
                data_service_1.DataService
            ]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, logger_service_1.LoggerService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map