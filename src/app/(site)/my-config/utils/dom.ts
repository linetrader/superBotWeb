// src/app/(site)/my-config/utils/dom.ts
export function pickValue(
  v: string | React.ChangeEvent<HTMLInputElement>
): string {
  return typeof v === "string" ? v : (v.target?.value ?? "");
}
