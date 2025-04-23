'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree > li, .tree > li ul > li');

  items.forEach((item) => {
    const nestedList = item.querySelector('ul');

    if (nestedList) {
      const firstChild = item.firstChild;

      if (firstChild.nodeType === Node.TEXT_NODE) {
        const text = firstChild.textContent.trim();

        if (text) {
          const span = document.createElement('span');

          span.textContent = text;
          item.insertBefore(span, firstChild);
          item.removeChild(firstChild);
        }
      }
    }
  });

  const tree = document.querySelector('.tree');

  tree.addEventListener('click', (eventt) => {
    if (eventt.target.tagName !== 'SPAN') {
      return;
    }

    const li = eventt.target.closest('li');
    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });

  items.forEach((item) => {
    const nestedList = item.querySelector('ul');

    if (nestedList) {
      const firstChild = item.firstChild;

      if (firstChild.nodeType === Node.TEXT_NODE) {
        const text = firstChild.textContent.trim();

        if (text) {
          const span = document.createElement('span');

          span.textContent = text;
          item.insertBefore(span, firstChild);
          item.removeChild(firstChild);
        }
      }
    }
  });
});
