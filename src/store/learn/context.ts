import { createContext } from "react";
import { type LearnStore } from "./store";
import { useValidContext } from "~utils/useValidContext";

export const LearnContext = createContext<LearnStore | undefined>(undefined);

export const useLearnContext = (): LearnStore => useValidContext(LearnContext);