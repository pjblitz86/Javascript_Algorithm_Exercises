function electionsWinners(votesArr: number[], votesLeft: number): number {
  let possibleNumWinners: number = 0;
  const mostVotes = Math.max(...votesArr);
  const sortedVotes = votesArr.sort((a, b) => b - a);

  if (sortedVotes[0] !== sortedVotes[1] && votesLeft === 0) {
    return 1;
  }

  votesArr.forEach(voteCount => {
    if (voteCount + votesLeft > mostVotes) {
      possibleNumWinners++;
    }
  });

  return possibleNumWinners;
}

const votes = [2, 3, 5, 2];
const k = 3;

console.log(electionsWinners(votes, k));
