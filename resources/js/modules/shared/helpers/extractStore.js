import { toRaw, toRef } from "vue";

export function extractStore(store) {
  const rawStore = toRaw(store);
  const refs = {};

  for (const [key, value] of Object.entries(rawStore)) {
    if (value && value.__v_isRef) {
      refs[key] = toRef(store, key);
    } else if (typeof value === "function") {
      refs[key] = value;
    }
  }

  return refs;
}
