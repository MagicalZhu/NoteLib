
const darkTheme =require('prism-react-renderer/themes/dracula/index.cjs.js')

module.exports = {
  ...darkTheme,
  styles: [
    ...darkTheme.styles,
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
  },{
    types: ["keyword"],
    style: {
      fontStyle: "normal"
    }
  }
  ],
};