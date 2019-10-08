function domainType(domains: string[]): string[] {
  const domainLabels: string[] = [];

  domains.forEach(domainEl => {
    const domain = domainEl.split(".");
    const lastDomain = domain[domain.length - 1];
    if (lastDomain === "org") {
      domainLabels.push("organization");
    } else if (lastDomain === "com") {
      domainLabels.push("commercial");
    } else if (lastDomain === "net") {
      domainLabels.push("network");
    } else if (lastDomain === "info") {
      domainLabels.push("info");
    }
  });

  return domainLabels;
}

const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

console.log(domainType(domains));
