
const darkTheme = require('prism-react-renderer/themes/dracula/index.cjs.js')

const getColor = (type, color) => {
  return {
    types: [type],
    style: {
      color
    },
  }
}
module.exports = {
  ...darkTheme,
  styles: [
    ...darkTheme.styles,
    {
      types: ['comment'],
      style: {
        fontStyle: "normal"
      },
    }, {
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
    }, {
      types: ["keyword"],
      style: {
        fontStyle: "normal"
      },
    },
    getColor('foreground', '#d4cfbf'),
    getColor('background', '#1e1e1e'),
    getColor('comment', '#758575'),
    getColor('string', '#d48372'),
    getColor('literal', '#429988'),
    getColor('keyword', '#4d9375'),
    getColor('boolean', '#1c6b48'),
    getColor('number', '#6394bf'),
    getColor('variable', '#c2b36e'),
    getColor('function', '#a1b567'),
    getColor('deleted', '#a14f55'),
    getColor('class', '#54b1bf'),
    getColor('builtin', '#e0a569'),
    getColor('property', '#dd8e6e'),
    getColor('namespace', '#db889a'),
    getColor('punctuation', '#858585'),
    getColor('decorator', '#bd8f8f'),
    getColor('regex', '#ab5e3f'),
    getColor('json-property', '#6b8b9e'),
    getColor('line-highlight-background', '#444444'),
    getColor('selection-background', '#444444'),
  ]
};