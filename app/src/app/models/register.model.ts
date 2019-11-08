import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class register {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

}