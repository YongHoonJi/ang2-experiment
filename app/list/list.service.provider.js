"use strict";
var logger_service_1 = require('../util/logger.service');
var data_service_1 = require('../util/data.service');
var list_service_1 = require('./list.service');
var listServiceFactory = function (logger, dataService) {
    return new list_service_1.ListService(logger, dataService);
};
exports.ListServiceProvider = {
    provide: list_service_1.ListService,
    useFactory: listServiceFactory,
    deps: [logger_service_1.LoggerService, data_service_1.DataService]
};
//# sourceMappingURL=list.service.provider.js.map