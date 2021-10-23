import { parse } from 'fast-xml-parser';
import FlightPlan from './models/FlightPlan';
import { XMLInput } from './models/Input';

/**
 * Parse a PLN XML string into JSON
 *
 * @export
 * @param {string} planXml The XML string of the .pln file
 * @return {FlightPlan} The parsed Flight Plan
 */
export function parsePln(planXml: string): FlightPlan {
  const parsedXML: XMLInput = parse(planXml, {
    parseAttributeValue: true,
    ignoreAttributes: false,
  });

  return new FlightPlan(parsedXML['SimBase.Document']['FlightPlan.FlightPlan']);
}

export { default as RouteItem } from './models/RouteItem';
export { default as Departure } from './models/Departure';
export { default as Destination } from './models/Destination';
export { default as FlightPlan } from './models/FlightPlan';
export { default as Procedure } from './models/Procedure';
