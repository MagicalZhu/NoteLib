
const theme =require('prism-react-renderer/themes/palenight')

module.exports = {
  ...theme,
  styles: [
    ...theme.styles,
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