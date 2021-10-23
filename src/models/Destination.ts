import { parseCoordinates } from '../helpers/parsers';
import { FlightPlanInput } from './Input';

export default class Destination {
  /**
   * The destination airport's ICAO
   *
   * @type {string}
   * @memberof Destination
   */
  public id: string;

  /**
   * The destination airport's name
   *
   * @type {string}
   * @memberof Destination
   */
  public name: string;

  /**
   * The coordinates [lon, lat] of the destination airport
   *
   * @type {[number, number]}
   * @memberof Destination
   */
  public coords: [number, number];

  /**
   * The destination airport's altitude
   *
   * @type {number}
   * @memberof Destination
   */
  public altitude: number;

  constructor(input: FlightPlanInput) {
    this.id = input.DestinationID;
    this.name = input.DestinationName;
    const { latitude, longitude, altitude } = parseCoordinates(input.DestinationLLA);
    this.coords = [longitude, latitude];
    this.altitude = altitude;
  }
}
