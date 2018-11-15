export class Course {
  set name(value: string) {
    this._name = value;
  }

  set maxNbrStudents(value: number) {
    this._maxNbrStudents = value;
  }
  private _id: number;
  private _name: string;
  private _maxNbrStudents: number;


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get maxNbrStudents(): number {
    return this._maxNbrStudents;
  }

  constructor(name: string, maxNbrStudents: number, id?: number) {
    this._id = id;
    this._name = name;
    this._maxNbrStudents = maxNbrStudents;
  }
}
