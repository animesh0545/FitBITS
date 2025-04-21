// src/utils/dateUtils.js

/**
 * Format an ISO date string to a specified format.
 * @param {string} isoString - ISO date string (e.g. "2025-04-21T10:36:00")
 * @param {string} formatStr - e.g. "DD MMM YYYY", "YYYY-MM-DD", "MMM DD, YYYY"
 * @returns {string}
 */
export function formatDate(isoString, formatStr = "YYYY-MM-DD") {
    if (!isoString) return "Invalid Date";
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "Invalid Date";

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const MMM = monthsShort[date.getMonth()];
    const MMMM = monthsLong[date.getMonth()];

    // Basic formatter (expand as needed)
    return formatStr
        .replace("YYYY", yyyy)
        .replace("MM", mm)
        .replace("DD", dd)
        .replace("MMM", MMM)
        .replace("MMMM", MMMM);
}

/**
 * Get today's date as an ISO string (YYYY-MM-DD)
 * @returns {string}
 */
export function getTodayDateStr() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

/**
 * Parse a date string to a Date object.
 * @param {string} dateStr
 * @returns {Date|null}
 */
export function parseDate(dateStr) {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
}
