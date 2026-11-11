"use strict";
// Problem : 1
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const result1 = multiplyValue(5);
const result2 = multiplyValue(5, 3);
const result3 = multiplyValue(5, 0);
console.log(result1);
console.log(result2);
console.log(result3);
// Problem : 2
const processInput = (input) => {
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
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// Problem : 4
const concatenateArrays = (...arrays) => {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
console.log(getPopularCourses(courses, 80));
// Problem : 6
const pluckValues = (items, key) => {
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
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
