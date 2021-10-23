export interface RouteItemInput {
  '@_id': string;
  ATCWaypointType: string;
  WorldPosition: string;
  ATCAirway?: string;
  DepartureFP?: string;
  RunwayNumberFP?: string;
  RunwayDesignatorFP?: string;
  ArrivalFP?: string;
  ICAO?: {
    ICAORegion?: string;
    ICAOIdent?: string;
    ICAOAirport?: string;
  }
}

export interface FlightPlanInput {
  'Title': string,
  'FPType': string,
  'RouteType': string,
  'CruisingAlt': string,
  'DepartureID': string,
  'DepartureLLA': string,
  'DestinationID': string,
  'DestinationLLA': string,
  'Descr': string,
  'DeparturePosition'?: string,
  'DepartureName': string,
  'DestinationName': string,
  'AppVersion': {
    'AppVersionMajor': string,
    'AppVersionBuild': string
  },
  'ATCWaypoint': RouteItemInput[]
}

export interface XMLInput {
  'SimBase.Document': {
    '-Type': 'AceXML',
    '-version': '1,0',
    'Descr': 'AceXML Document',
    'FlightPlan.FlightPlan': FlightPlanInput,
  }
}
