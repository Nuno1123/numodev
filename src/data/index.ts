import cvJson from "./cv.json";
import type { CVData } from "@/types/cv";

export const cv = cvJson satisfies CVData;
