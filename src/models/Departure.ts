import { parseCoordinates } from '../helpers/parsers';
import { FlightPlanInput } from './Input';

export default class Departure {
  /**
   * The ICAO ID of the departure airport
   *
   * @type {string}
   * @memberof Departure
   */
  public id: string;

  /**
   * The name of the departure airport
   *
   * @type {string}
   * @memberof Departure
   */
  public name: string;

  /**
   * The coordinates [lon, lat] of the departure airport
   *
   * @type {[number, number]}
   * @memberof Departure
   */
  public coords: [number, number];

  /**
   * The starting position (gate, parking...)
   *
   * @type {string}
   * @memberof Departure
   */
  public position?: string;

  /**
   * The departure airport's altitude
   *
   * @type {number}
   * @memberof Departure
   */
  public altitude: number;

  constructor(input: FlightPlanInput) {
    this.id = input.DepartureID;
    this.name = input.DepartureName;
    const { latitude, longitude, altitude } = parseCoordinates(input.DepartureLLA);
    this.coords = [longitude, latitude];
    this.position = input.DeparturePosition;
    this.altitude = altitude;
  }
}
