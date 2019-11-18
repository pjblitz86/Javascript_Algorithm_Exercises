function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
  let attemptsCount = 0;
  const maxAttemptsCount = 10;

  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === passcode) {
      attemptsCount = 0;
    } else {
      attemptsCount++;
      if (attemptsCount === maxAttemptsCount) {
        return true;
      }
    }
  }

  return false;
}

const attempts = [
  "1111",
  "4444",
  "9999",
  "3333",
  "8888",
  "2222",
  "7777",
  "0000",
  "6666",
  "7285",
  "5555",
  "1111"
];
const passcode = "1111";

console.log(incorrectPasscodeAttempts(passcode, attempts));
