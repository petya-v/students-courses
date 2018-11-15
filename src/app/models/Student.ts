export class Student {
  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }
  private _id: number;
  private _name: string;
  private _surname: string;


  constructor(name: string, surname: string, id?: number) {
    this._name = name;
    this._surname = surname;
    this._id = id;
  }
}
