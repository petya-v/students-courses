export class CourseStudent {
  private _courseId: number;
  private _studentId: number;

  get courseId(): number {
    return this._courseId;
  }

  get studentId(): number {
    return this._studentId;
  }

  set courseId(value: number) {
    this._courseId = value;
  }

  set studentId(value: number) {
    this._studentId = value;
  }

  constructor(courseId: number, studentId: number) {
    this._courseId = courseId;
    this._studentId = studentId;
  }
}
