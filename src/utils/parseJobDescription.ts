export function parseJobDescription(html: string): {
    responsibilities: string[];
    requirements: string[];
} {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const lists = Array.from(doc.querySelectorAll("ul"));

    const responsibilities = lists[0]
        ? Array.from(lists[0].querySelectorAll("li")).map(li => li.textContent?.trim() || "")
        : [];

    const requirements = lists[1]
        ? Array.from(lists[1].querySelectorAll("li")).map(li => li.textContent?.trim() || "")
        : [];

    return { responsibilities, requirements };
}
