import { calcSum } from 'math-helper-functions';
import is from '@sindresorhus/is';
import { processNumber } from 'number-helper-functions';
import Departure from './Departure';
import Destination from './Destination';
import { FlightPlanInput } from './Input';
import RouteItem from './RouteItem';
import Procedure from './Procedure';

export default class FlightPlan {
  /**
   * The title given to the Flight Plan
   *
   * @type {string}
   * @memberof FlightPlan
   */
  public title: string;

  /**
   * Whether the plan is VFR, IFR...
   *
   * @type {string}
   * @memberof FlightPlan
   */
  public planType: string;

  /**
   * The route type, LowAlt, HighAlt...
   *
   * @type {string}
   * @memberof FlightPlan
   */
  public routeType: string;

  /**
   * The cruising altitude in feet
   *
   * @type {number}
   * @memberof FlightPlan
   */
  public cruisingAltitude: number;

  /**
   * The departure airport's details
   *
   * @type {Departure}
   * @memberof FlightPlan
   */
  public departure: Departure;

  /**
   * The destination airport's details
   *
   * @type {Destination}
   * @memberof FlightPlan
   */
  public destination: Destination;

  /**
   * The route from departure to destination
   *
   * @type {RouteItem[]}
   * @memberof FlightPlan
   */
  public route: RouteItem[];

  /**
   * The total route's distance in nautical miles
   *
   * @type {number}
   * @memberof FlightPlan
   */
  public totalDistance: number;

  /**
   * A departure SID, if any
   *
   * @type {Procedure}
   * @memberof FlightPlan
   */
  public sid?: Procedure;

  /**
   * An arrival STAR, if any
   *
   * @type {Procedure}
   * @memberof FlightPlan
   */
  public star?: Procedure;

  constructor(input: FlightPlanInput) {
    this.title = input.Title;
    this.planType = input.FPType;
    this.routeType = input.RouteType;
    this.cruisingAltitude = Number(input.CruisingAlt);
    this.departure = new Departure(input);
    this.destination = new Destination(input);
    this.route = input.ATCWaypoint.map(
      (d, index) => new RouteItem(d, input.ATCWaypoint[index - 1]),
    );
    this.totalDistance = processNumber(calcSum(this.route, 'distance'), 2);

    const withSid = this.route.find((d) => !is.nullOrUndefined(d.sid));
    const withStar = this.route.find((d) => !is.nullOrUndefined(d.star));

    if (!is.undefined(withSid)) {
      this.sid = new Procedure(
        withSid.sid as string,
        withSid.runway as string,
      );
    }

    if (!is.undefined(withStar)) {
      this.star = new Procedure(
        withStar.star as string,
        withStar.runway as string,
      );
    }
  }
}
