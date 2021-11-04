/*
 * example isChildrenPath("/proj", "/proj/12345") ==> true
 * example isChildrenPath("/", "/proj/12345") ==> false
 * */

export function isChildrenPath(parent: string, link: string): boolean {
  if (parent === "/") {
    return link === "/";
  }
  return link.includes(parent);
}
