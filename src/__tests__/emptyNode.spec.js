/**
 * @jest-environment jsdom
 */
 import { emptyNode } from '../emptyNode'
 describe('emptyNode', () => {
    test('create a structure of nested elements and empty it', () => {
      const container = document.createElement('div')
      container.innerHTML = `
        <div>
          <ul>
            <li>test</li>
            <li>test2</li>
          </ul>
        </div>
      `
      document.body.appendChild(container)
      emptyNode(container)
      expect(container.children.length).toBe(0)
    })
  })