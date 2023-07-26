/**
 * 说明: 文档的请求路径与文档的实际路径一致 => 文档父目录路径+文档ID
 */
// @ts-check
const Type = {
  // 链接到文档
  DOC: 'doc',
  // 链接到文档页面，并且不归属到当前侧边栏
  REF: 'ref',
  // 链接到任意页面
  LINK: 'link',
  // 创建层级结构
  CATEGORY: 'category',
  // 生成侧边栏
  AUTO: 'autogenerated'
}

const createDoc = (id, label) => {
  return {
    type: Type.DOC,
    // 文档 id
    id, 
    // 显示在侧边栏上的标题或标签（label）
    label, 
  }
}

const createRef = (id) => {
  return {
    type: Type.REF,
    id, // 文档 id （字符串类型）。
  }
}

const createLink = (label, href, className) => {
  const linkItem = {
    type: Type.LINK,
    label, // 为此链接设置的标题（label）
    href // 站外链接（URL）http://www.baidu.com   // 站内路径
  }
  if (className) {
    linkItem.className = className
  }
  return linkItem
}

const createAuto = (dir) => {
  return {
    type: Type.AUTO,
    dirName: dir||'.', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
  }
}

class Category {
    /** 
     * @param {String} label 
     * @param {Object} items  sidebar items
     */
    constructor(label, items = []) {
      this.type = Type.CATEGORYEGORY
      this.label = label
      this.items = items || []
      this.collapsed = true
      this.link = {
        type: 'generated-index',
      }
    }
    setClassName(className) {
      this.className = className
      return this
    }
    setCollapsible(collapsible) {
      this.collapsible = collapsible
      return this
    }
    setCollapsed(collapsed) {
      this.collapsed = collapsed
      return this
    }
    /**
     * @description 添加文档(route eg: prefix + '/' + itemId)
     * @param {Array} itemIds 
     * @returns 
     */
    setNoLabelItem( prefix,itemIds) {
      itemIds.forEach((item) => {
        if (typeof item === 'string') {
          this.items.push(`${prefix}/${item}`)
        } else {
          this.items.push(item)
        }
      })
      return this
    }
    createSubCaregory(categoryName, prefix, itemIds) {
      const subCategory = new Category(categoryName)
      subCategory.setNoLabelItem(prefix, itemIds)
      this.items.push(subCategory)
      return this
    }
}

module.exports = {
  Type,
  Category,
  createDoc,
  createRef,
  createLink,
  createAuto,
}