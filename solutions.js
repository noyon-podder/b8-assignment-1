"use strict";
// Problem : 1
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const result1 = multiplyValue(5);
const result2 = multiplyValue(5, 3);
const result3 = multiplyValue(5, 0);
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
// Problem : 3
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
// Problem : 4
const concatenateArrays = (...arrays) => {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
// Problem : 6
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
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
// problem : 8
async function validateAgeAsync(age) {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
async function run() {
    try {
        await validateAgeAsync(15);
    }
    catch (error) {
        if (error instanceof Error) {
        }
    }
}
run();
