 // BLOCKFUSE LABS JAVASCRIPT ASSIGNMENT
 // Student Examination Management System

// TASK A: STUDENT INFORMATION

let studentName = "David Koko";
let age = "19";
let registrationStatus = true;
let department = "Software Engineering";

let htmlScore = "85";
let cssScore = "75";
let javascriptScore = 90;

let outstandingFees = 0;
let attendance = "85";

let phoneNumber = null;
let otherInfo;

const subjects = ["HTML", "CSS", "JavaScript"];

console.log("STUDENT INFORMATION");
console.log(studentName);
console.log(age);
console.log(registrationStatus);
console.log(department);
console.log(subjects);
console.log(phoneNumber);
console.log(otherInfo);


// TASK B: DATA TYPES

console.log("DATA TYPE INVESTIGATION");

console.log("15" + 5);
console.log("15" - 5);
console.log("15" * 2);
console.log(10 + true);
console.log("15" / 3);
console.log("10" == 10);
console.log("10" === 10);
console.log(typeof NaN);
console.log(typeof null);
console.log(Boolean("false"));
console.log(Boolean(""));


// TASK C: DATA VALIDATION

// Convert age and attendance to numbers

age = Number(age);
attendance = Number(attendance);

console.log("DATA VALIDATION");
console.log("Age:", age);
console.log("Attendance:", attendance);

// Convert examination scores

htmlScore = Number(htmlScore);
cssScore = Number(cssScore);
javascriptScore = Number(javascriptScore);

// Check if scores are valid

if (
    isNaN(htmlScore) ||
    isNaN(cssScore) ||
    isNaN(javascriptScore) ||
    htmlScore < 0 || htmlScore > 100 ||
    cssScore < 0 || cssScore > 100 ||
    javascriptScore < 0 || javascriptScore > 100
) {
    console.log("Invalid examination scores");

} else {

    console.log("All scores are valid");
}


// TASK D: EXAMINATION ELIGIBILITY

console.log("EXAMINATION ELIGIBILITY");

if (
    age >= 18 &&
    registrationStatus === true &&
    outstandingFees === 0 &&
    attendance >= 75
) {

    console.log("Student is eligible for examination");

} else {

    console.log("Student is not eligible");

}




console.log("SCORE PROCESSING");

if (
    !isNaN(htmlScore) &&
    !isNaN(cssScore) &&
    !isNaN(javascriptScore) &&
    htmlScore >= 0 && htmlScore <= 100 &&
    cssScore >= 0 && cssScore <= 100 &&
    javascriptScore >= 0 && javascriptScore <= 100
) {

    let total = htmlScore + cssScore + javascriptScore;

    let average = total / 3;

    console.log("Total Score:", total);
    console.log("Average Score:", average);

    if (average >= 80) {
        console.log("Grade: A");

    } else if (average >= 70) {
        console.log("Grade: B");

    } else if (average >= 60) {
        console.log("Grade: C");

    } else if (average >= 50) {
        console.log("Grade: D");

    } else {
        console.log("Grade: F");
    }

} else {

    console.log("Cannot calculate average because scores are invalid");

}




console.log("TESTING STUDENTS");

let students = [

    {
        name: "Student 1",
        age: 19,
        registered: true,
        fees: 0,
        attendance: 85,
        html: 85,
        css: 75,
        javascript: 90
    },

    {
        name: "Student 2",
        age: 17,
        registered: true,
        fees: 0,
        attendance: 85,
        html: 80,
        css: 75,
        javascript: 90
    },

    {
        name: "Student 3",
        age: 20,
        registered: false,
        fees: 0,
        attendance: 90,
        html: 80,
        css: 75,
        javascript: 90
    },

    {
        name: "Student 4",
        age: 21,
        registered: true,
        fees: 5000,
        attendance: 80,
        html: 70,
        css: 75,
        javascript: 80
    },

    {
        name: "Student 5",
        age: 19,
        registered: true,
        fees: 0,
        attendance: 90,
        html: 85,
        css: "eighty",
        javascript: 90
    }

];

students.forEach(function(student) {

    console.log("-------------------");
    console.log(student.name);

    let eligible = true;

    if (student.age < 18) {
        eligible = false;
        console.log("Reason: Student is under 18");
    }

    if (student.registered !== true) {
        eligible = false;
        console.log("Reason: Student is not registered");
    }

    if (student.fees > 0) {
        eligible = false;
        console.log("Reason: Outstanding fees");
    }

    if (student.attendance < 75) {
        eligible = false;
        console.log("Reason: Low attendance");
    }

    let html = Number(student.html);
    let css = Number(student.css);
    let javascript = Number(student.javascript);

    if (
        student.html === "" ||
        student.css === "" ||
        student.javascript === "" ||
        isNaN(html) || isNaN(css) || isNaN(javascript) ||
        html < 0 || html > 100 ||
        css < 0 || css > 100 ||
        javascript < 0 || javascript > 100
    ) {

        eligible = false;
        console.log("Reason: Invalid examination scores");

    } else {

        let total = html + css + javascript;
        let average = total / 3;

        console.log("Total:", total);
        console.log("Average:", average.toFixed(2));
    }

    if (eligible === true) {
        console.log("Result: ELIGIBLE");
    } else {
        console.log("Result: NOT ELIGIBLE");
    }

});




console.log("STUDENT EXAMINATION PROGRAM COMPLETED");