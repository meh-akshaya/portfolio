import { type ClassValue, clsx } from "clsx";

/** Merge conditional class names. Thin wrapper kept centralized so it's easy to swap (e.g. for tailwind-merge) later. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
