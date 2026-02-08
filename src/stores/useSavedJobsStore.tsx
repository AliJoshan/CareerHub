import { create } from "zustand";

type SavedJobsState = {
    savedJobIds: string[];
    toggleSave: (jobId: string) => void;
    isSaved: (jobId: string) => boolean;
};

export const useSavedJobsStore = create<SavedJobsState>((set, get) => ({
    savedJobIds: (() => {
        try {
            return JSON.parse(localStorage.getItem("savedJobs") || "[]");
        } catch {
            return [];
        }
    })(),

    toggleSave: (jobId) => {
        const { savedJobIds } = get();
        const updated = savedJobIds.includes(jobId)
            ? savedJobIds.filter((id) => id !== jobId)
            : [...savedJobIds, jobId];

        localStorage.setItem("savedJobs", JSON.stringify(updated));
        set({ savedJobIds: updated });
    },

    isSaved: (jobId) => get().savedJobIds.includes(jobId),
}));
