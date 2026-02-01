/**
 * Safely load and validate data from localStorage
 * Handles JSON parsing, validation, and automatic cleanup of corrupted data
 */
export function loadFromStorage<T>(
  key: string,
  validator: (data: any) => data is T,
  defaultValue: T,
): T {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;

    const parsed = JSON.parse(stored);
    if (validator(parsed)) return parsed;

    console.warn(`Invalid ${key} data, resetting`);
    localStorage.removeItem(key);
    return defaultValue;
  } catch (error) {
    console.error(`Failed to load ${key}, clearing corrupted data:`, error);
    localStorage.removeItem(key);
    return defaultValue;
  }
}
