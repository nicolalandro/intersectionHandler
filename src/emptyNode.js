/**
 * svuota completamente un nodo
 * @param { Element } node : il nodo da svuotare
 */
export function emptyNode (node) {
  while (node.firstChild) {
    node.firstChild.remove()
  }
}
