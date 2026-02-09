export function parseJobDescription(html: string): {
    responsibilities: string[];
    requirements: string[];
} {
    const text = html
        .replace(/<[^>]+>/g, "\n")
        .replace(/&nbsp;/g, " ")
        .replace(/\n+/g, "\n")
        .trim();

    const lines = text
        .split("\n")
        .map(l => l.trim())
        .filter(Boolean);

    const responsibilities: string[] = [];
    const requirements: string[] = [];

    let current: "responsibilities" | "requirements" | null = null;

    for (const line of lines) {
        const lower = line.toLowerCase();

        if (lower.includes("responsibilit")) {
            current = "responsibilities";
            continue;
        }

        if (
            lower.includes("requirement") ||
            lower.includes("qualification")
        ) {
            current = "requirements";
            continue;
        }

        if (current && line.length > 3) {
            const cleaned = line.replace(/^[-•–]/, "").trim();
            if (cleaned) {
                if (current === "responsibilities") {
                    responsibilities.push(cleaned);
                } else {
                    requirements.push(cleaned);
                }
            }
        }
    }

    return { responsibilities, requirements };
}
