import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: string;
  clientId: string;
  clinetSecret: string;
}

export const GLOBAL_APP_CONFIG : AppConfig = {
  apiEndpoint: '/mat/v1.0/',  clientId: 'mat-web',  clinetSecret: '12345'
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
