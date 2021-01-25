import { format } from 'date-fns';

// GetFormatDateTime
export function GetFormatDateTime(date, type = 'yyyy-MM-dd HH:mm') {
  return format(new Date(date), type);
}

// GetByDay
export function GetByDay(day = 0) {
  const date = new Date(
    new Date().setDate(new Date().getDate() + day)
  );
  return date;
}

// LocaStore
export function SetLocalStore(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
export function GetLocalStore(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function RemoveLocalStore(key) {
  return localStorage.removeItem(key);
}
export function ClearLocalStore() {
  return localStorage.clear();
}