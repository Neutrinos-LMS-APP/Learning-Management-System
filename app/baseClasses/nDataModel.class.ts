import { register } from '../src/app/models/register.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
register: register;
//DECLARE NEW VARIABLE

constructor() {
this.register = new register();
//CREATE NEW DM INSTANCE
    }
}