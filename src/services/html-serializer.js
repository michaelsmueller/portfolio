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
      // props = { className: 'language-css'};
      // return React.createElement('pre', propsWithUniqueKey(props, key), children);

      // const codeElement = React.createElement('code', { className: 'language-js' }, children);
      // return React.createElement('pre', null, codeElement);

      return React.createElement('code', { className: 'language-css' }, children);
      // return React.createElement('pre', null, codeElement);

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
