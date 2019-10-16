function findEmailDomain(address): string {
  const etaIndex = address.lastIndexOf("@");
  const domain = address.slice(etaIndex + 1);

  return domain;
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
