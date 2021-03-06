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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var mock_data_1 = require('../mock-data');
var app_config_1 = require('../app.config');
var DataService = (function () {
    function DataService(config) {
        this.endpoint = "";
        this.endpoint = config.apiEndpoint;
    }
    DataService.prototype.getMocks = function () {
        console.log("endpoint url : " + this.endpoint);
        return mock_data_1.MockObjs;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [Object])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map