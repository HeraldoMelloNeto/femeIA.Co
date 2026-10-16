// UID generation under the ISO/IEC 9834-8 UUID-derived root "2.25" (PS3.5 §B.2):
// no registration required, globally unique, max 44 characters.

export const FEMEIA_VERSION = '1.0.0';
// Fixed implementation UID for femeIA.Co: UUIDv4 c7fbf351-bb82-4971-bca4-f9f8de2d9457 under 2.25
// (its own identity; the engine is the OMNIA 1.0.0 engine, whose UID is 2.25.66864990084816049571675053677107571457).
export const IMPLEMENTATION_CLASS_UID = '2.25.265824572773736555477913147713656820823';
export const IMPLEMENTATION_VERSION_NAME = 'FEMEIA_1.0.0';

export function newUID() {
  const b = new Uint8Array(16);
  globalThis.crypto.getRandomValues(b);
  b[6] = (b[6] & 0x0f) | 0x40; // version 4
  b[8] = (b[8] & 0x3f) | 0x80; // RFC 4122 variant
  let n = 0n;
  for (const x of b) n = (n << 8n) | BigInt(x);
  return `2.25.${n.toString(10)}`;
}

/** Syntax check for a UID (PS3.5 §9.1). */
export function isValidUID(u) {
  return typeof u === 'string' && u.length <= 64 && /^(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*$/.test(u);
}
