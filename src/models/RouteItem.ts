import is from '@sindresorhus/is';
import { getDistance, getGreatCircleBearing } from 'geolib';
import { processNumber } from 'number-helper-functions';
import { convertMetersToNM, getRunway, parseCoordinates } from '../helpers/parsers';
import { RouteItemInput } from './Input';

export default class RouteItem {
  /**
   * Waypoint's ID
   *
   * @type {string}
   * @memberof RouteItem
   */
  public id: string;

  /**
   * Waypoint's coordinates [lon, lat]
   *
   * @type {[number, number]}
   * @memberof RouteItem
   */
  public coords: [number, number];

  /**
   * The type of the waypoint, VOR, NDB, USER...
   *
   * @type {string}
   * @memberof RouteItem
   */
  public type: string;

  /**
   * If the waypoint is part of an airway, its identification
   *
   * @type {string}
   * @memberof RouteItem
   */
  public airway?: string;

  /**
   * The ICAO name of the waypoint
   *
   * @type {string}
   * @memberof RouteItem
   */
  public ident?: string;

  /**
   * The altitude for this leg
   *
   * @type {number}
   * @memberof RouteItem
   */
  public altitude: number;

  /**
   * The distance from the previous waypoint
   *
   * @type {number}
   * @memberof RouteItem
   */
  public distance: number;

  /**
   * Bearing from the previous waypoint
   *
   * @type {number}
   * @memberof RouteItem
   */
  public bearing: number;

  /**
   * The SID the waypoint belongs to, if any
   *
   * @type {string}
   * @memberof RouteItem
   */
  public sid?: string;

  /**
   * The STAR the waypoint belongs to, if any
   *
   * @type {string}
   * @memberof RouteItem
   */
  public star?: string;

  /**
   * The runway the SID or STAR belongs to, if any
   *
   * @type {string}
   * @memberof RouteItem
   */
  public runway?: string;

  constructor(input: RouteItemInput, prevWaypoint?: RouteItemInput) {
    this.id = input['@_id'];
    this.type = input.ATCWaypointType;
    const { longitude, latitude, altitude } = parseCoordinates(input.WorldPosition);
    this.coords = [longitude, latitude];
    this.airway = input.ATCAirway;
    this.ident = input.ICAO?.ICAOIdent;
    this.altitude = altitude;

    if (is.nullOrUndefined(prevWaypoint)) {
      this.distance = 0;
      this.bearing = 0;
    } else {
      const {
        longitude: prevLon,
        latitude: prevLat,
      } = parseCoordinates(prevWaypoint.WorldPosition);

      const currPoint = {
        latitude,
        longitude,
      };

      const prevPoint = {
        lat: prevLat,
        lon: prevLon,
      };

      const distance = getDistance(
        currPoint,
        prevPoint,
      );

      this.distance = convertMetersToNM(distance);
      this.bearing = processNumber(getGreatCircleBearing(currPoint, prevPoint), 0);
    }

    if (!is.nullOrUndefined(input.DepartureFP)) {
      this.sid = input.DepartureFP;
    }

    if (!is.nullOrUndefined(input.ArrivalFP)) {
      this.star = input.ArrivalFP;
    }

    if (!is.nullOrUndefined(input.RunwayNumberFP)) {
      this.runway = getRunway(input.RunwayNumberFP, input.RunwayDesignatorFP);
    }
  }
}
