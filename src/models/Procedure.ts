export default class Procedure {
  /**
   * The procedure's name
   *
   * @type {string}
   * @memberof Procedure
   */
  public name: string;

  /**
   * The runway the procedure belongs to
   *
   * @type {string}
   * @memberof Procedure
   */
  public runway: string;

  constructor(name: string, runway: string) {
    this.name = name;
    this.runway = runway;
  }
}
