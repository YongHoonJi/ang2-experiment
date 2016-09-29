"use strict";
var core_1 = require('@angular/core');
exports.APP_CONFIG = new core_1.OpaqueToken('app.config');
exports.GLOBAL_APP_CONFIG = {
    apiEndpoint: '/mat/v1.0/', clientId: 'mat-web', clinetSecret: '12345'
};
/*
Opaque Creates a token that can be used in a DI Provider.
OpaqueToken("value");
OpaqueToken("app.config");
*/
/*
 typescript interface can't not be as a provider's token.
 and can't not inject it into constructor as a parameter.
 there is no interface as same as Java's interface in typescript
 since javascript doesn't have interfaces.
*/
//# sourceMappingURL=app.config.js.map