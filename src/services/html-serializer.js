import React from 'react';
import { Elements } from 'prismic-reactjs';
 
// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};
 
// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function(type, element, content, children, key) {
 
  var props = {};
  switch(type) {
 
    case Elements.preformatted:
      
      // return React.createElement('pre', propsWithUniqueKey(props, key), children);

      // const codeElement = React.createElement('code', { className: 'language-js' }, children);
      // return React.createElement('pre', null, codeElement);
      console.log('children', children);
      // return React.createElement('code', propsWithUniqueKey(props, key), children);
      // return React.createElement('pre', null, codeElement);

      // const newChildren = [];
      // newChildren[0] = children[0].map((el, i) => {
      //   console.log(`i ${i}`, el);
      //   if (typeof el === 'object' && el.type === 'br') {
      //     // const p = React.createElement('p', propsWithUniqueKey({}, key), null);
      //     // return p;
      //   } else return el;
      // });

      // console.log('newChildren', newChildren);

      console.log('content', content);
      return (
          <code className='language-css'>
              {children}
          </code>
      )

    // Add a class to paragraph elements
    // case Elements.paragraph:
    //   props = {className: 'paragraph-class'};
    //   return React.createElement('p', propsWithUniqueKey(props, key), children);
 
    // Don't wrap images in a <p> tag
    // case Elements.image: 
    //   props = { src: element.url , alt: element.alt || '' };
    //   return React.createElement('img', propsWithUniqueKey(props, key));
 
    // Add a class to hyperlinks
    // case Elements.hyperlink:
      // const targetAttr = element.data.target ? { target: element.data.target } : {};
      // const relAttr = element.data.target ? { rel: 'noopener' } : {};
      // props = Object.assign({
      //   className: 'link-class',
      //   href: element.data.url || linkResolver(element.data)
      // }, targetAttr, relAttr);
      // return React.createElement('a', propsWithUniqueKey(props, key), children);

    // Return null to stick with the default behavior
    default: 
      return null;
  }
};

export default htmlSerializer;
