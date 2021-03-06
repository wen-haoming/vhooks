import ReactDom from 'react-dom';

export let isObject = (obj: any) =>
  Object.prototype.toString.call(obj) === '[object Object]';

export let isArray = (arr: any) => Array.isArray(arr);

export function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export function addEventListener(
  target,
  eventType,
  cb,
  option = {},
): { remove: () => void } {
  if (target.addEventListener) {
    target.addEventListener(eventType, cb, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    },
  };
}

export function portal(container, children) {
  return {
    add() {
      return ReactDom.createPortal(children, container);
    },
    remove() {
      if (container) {
        container.parentNode.removeChild(container);
      }
    },
  };
}
