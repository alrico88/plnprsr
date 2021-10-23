import { readFileAsTextSync } from 'node-read-file-helper';
import path from 'path';
import { parsePln } from '../src';

const testVFR = readFileAsTextSync(path.resolve(__dirname, './fixtures/testVFR.pln'));
const testIFR = readFileAsTextSync(path.resolve(__dirname, './fixtures/testIFR.pln'));

describe('Test parsing FS 2020 VFR flight plans', () => {
  const parsedPlan = parsePln(testVFR);

  it('Should read departure correctly', () => {
    expect(parsedPlan.departure.id).toBe('LEMD');
  });

  it('Should not have more than two ICAO idents', () => {
    expect(parsedPlan.route.filter((d) => d.ident !== undefined).length).toBe(2);
  });

  it('Should have a total distance greater than 0', () => {
    expect(parsedPlan.totalDistance).toBeGreaterThan(0);
  });
});

describe('Test parsing FS 2020 IFR flight plans', () => {
  const parsedPlan = parsePln(testIFR);

  it('Should read departure correctly', () => {
    expect(parsedPlan.departure.id).toBe('LEMD');
  });

  it('Should detect at least a VOR in the route', () => {
    expect(parsedPlan.route.findIndex((d) => d.type === 'VOR')).not.toEqual(-1);
  });

  it('Should read the crusing altitude correctly', () => {
    expect(parsedPlan.cruisingAltitude).toBe(25000);
  });
});
