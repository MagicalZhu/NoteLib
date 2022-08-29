
const lightTheme =require('prism-react-renderer/themes/nightOwlLight/index.cjs.js')

module.exports = {
  ...lightTheme,
  styles: [
    ...lightTheme.styles,
    {
      types: ['comment'],
      style: {
        fontStyle: "normal"
      },
    },{
      types: ["changed"],
      style: {
        fontStyle: "normal"
      }
    }, {
      types: ["deleted"],
      style: {
        fontStyle: "normal"
      }
    }, {
      types: ["inserted", "attr-name"],
      style: {
        fontStyle: "normal"
      }
    }, {
      types: ["comment"],
      style: {
        fontStyle: "normal"
      }
    },
    {
      types: ["function", "selector", "doctype"],
      style: {
        fontStyle: "normal"
      }
    }
  ],
};