import fs from "fs";
import Musician from "./musiker.js";

export default class Band {
  #allBands = [];

  constructor(name, formationYear, dissolutionYear) {
    this.name = name;
    this.formationYear = formationYear;
    this.dissolutionYear = dissolutionYear;
    this.currentMembers = [];
    this.previousMembers = [];
  }

  static createBand(name, formationYear, dissolutionYear) {
    return new Band(name, formationYear, dissolutionYear);
  }

  static removeBand(band, allBands) {
    const index = allBands.indexOf(band);
    if (index !== -1) {
      allBands.splice(index, 1);
    }
  }

  addCurrentMember(musician, joinYear, instruments) {
    this.currentMembers.push({ musician, joinYear, instruments });
  }

  addPreviousMember(musician, leaveYear, instruments) {
    this.previousMembers.push({ musician, leaveYear, instruments });
  }

  getMembers() {
    return {
      currentMembers: this.currentMembers.map((entry) => ({
        musician: entry.musician,
        joinYear: entry.joinYear,
        instruments: entry.instruments,
      })),
      previousMembers: this.previousMembers.map((entry) => ({
        musician: entry.musician,
        leaveYear: entry.leaveYear,
        instruments: entry.instruments,
      })),
    };
  }

  getFormationYear() {
    return this.formationYear;
  }

  getDissolutionYear() {
    return this.dissolutionYear;
  }
}
