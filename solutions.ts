// Problem : 1
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

const result1 = multiplyValue(5);
const result2 = multiplyValue(5, 3);
const result3 = multiplyValue(5, 0);

console.log(result1);
console.log(result2);
console.log(result3);

// Problem : 2
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.toUpperCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "ACtive" : "Inactive";
};

console.log(processInput("hello"));
console.log(processInput(5));
console.log(processInput(true));
console.log(processInput(false));

// Problem : 3
const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

// Problem : 4

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }
  return result;
};

console.log(concatenateArrays(["a", "b"], ["c", "d"]));

console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem : 5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

console.log(getPopularCourses(courses, 80));

// Problem : 6
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"));

console.log(pluckValues(users, "id"));

// problem : 7
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");

console.log(manager.getDetails());

console.log(manager.getRoleInfo());
