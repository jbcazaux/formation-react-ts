class Student {
  constructor(public id: number, public lastname: string, public firstname: string, public grades : ReadonlyArray<number>) {
  }

  static NULL = new Student(0, '', '', [])
}

export default Student
