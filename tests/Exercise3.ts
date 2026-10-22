

const testResults = [
  { name: "Login test", status: "passed", duration: 1200 },
  { name: "Checkout test", status: "failed", duration: 3400 },
  { name: "Search test", status: "passed", duration: 800 },
];

// Destructuring to pull name and status from the first test result
const [firstTest] = testResults; // Destructuring to pull the first test
console.log(firstTest.name, firstTest.status);

// Using for...of to log every test's name and duration
for (const result of testResults) {
  console.log(`Test name:${result.name}: ${result.duration} ms`);
}

// array of failed test names(like lambda in Java)
const failedNames: string[] = testResults.filter(test => test.status === "failed").map(test => test.name);
console.log(`Failed Names: ${failedNames}`);

// Calculate total duration across all tests
const totalDuration: number = testResults.reduce((sum, test) => sum + test.duration, 0);
console.log(`Total Duration: ${totalDuration}`);
