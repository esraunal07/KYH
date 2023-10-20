
export default class Musician {
  #name
  #birthYear
  
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.currentBands = [];
    this.previousBands = [];
    this.instruments = [];
  }

  addCurrentBand(band, joinYear, instruments) {
    this.currentBands.push({ band, joinYear, instruments });
    band.addCurrentMember(this, joinYear, instruments);
  }

  addPreviousBand(band, leaveYear, instruments) {
    this.previousBands.push({ band, leaveYear, instruments });
    band.addPreviousMember(this, leaveYear, instruments);
  }

  addInstrument(instrument) {
    this.instruments.push(instrument);
  }

  getBands() {
    return {
      currentBands: this.currentBands.map((entry) => ({
        band: entry.band,
        joinYear: entry.joinYear,
        instruments: entry.instruments,
      })),
      previousBands: this.previousBands.map((entry) => ({
        band: entry.band,
        leaveYear: entry.leaveYear,
        instruments: entry.instruments,
      })),
    };
  }

  getBirthYear() {
    return this.birthYear;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}
