import is from '@sindresorhus/is';
import { sexagesimalToDecimal } from 'geolib';
import { processNumber } from 'number-helper-functions';

interface WaypointCoords {
  latitude: number;
  longitude: number;
  altitude: number;
}

function parseSexagesimal(input: string): number {
  const bearing = input.charAt(0);
  const rest = input.slice(1);

  return sexagesimalToDecimal(`${rest} ${bearing}`);
}

/**
 * Parses FS WorldCoordinates to lat, lon, altitude
 *
 * @export
 * @param {string} worldCoords
 * @return {WaypointCoords}  {WaypointCoords}
 */
export function parseCoordinates(worldCoords: string): WaypointCoords {
  const [latitude, longitude, altitude] = worldCoords.split(',');

  return {
    latitude: parseSexagesimal(latitude),
    longitude: parseSexagesimal(longitude),
    altitude: Number(altitude),
  };
}

/**
 * Converts between meters and nautical miles
 *
 * @export
 * @param {number} meters
 * @return {number}
 */
export function convertMetersToNM(meters: number): number {
  return processNumber(meters / 1852);
}

/**
 * Gets the runway string according to number and designator
 *
 * @export
 * @param {string} rwyNumber
 * @param {string} [rwyDesignator]
 * @return {string}
 */
export function getRunway(rwyNumber: string, rwyDesignator?: string): string {
  let str = '';

  str += rwyNumber;

  if (!is.undefined(rwyDesignator)) {
    str += rwyDesignator.charAt(0);
  }

  return str;
}
