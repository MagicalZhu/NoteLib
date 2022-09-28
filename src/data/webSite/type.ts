
/**
 * 站点标签
 */
export interface Tag {
    // 标签名称
    name: string,
    // 标签font颜色
    backgroundColor?: string,
    // 标签背景色
    fontColor: string
}

type rateEnuum = 1|2|3|4|5

/**
 * Web站点
 */
export interface WebSite  {
    // 站点名称
    name: string
    // 站点图标路径
    icon: string
    // 是否开源
    isOpenSource: boolean
    // github地址
    githubUrl?:string
    //站点标签
    tags: Tag[]
    // 站点描述
    description: string,
    //推荐等级
    rate: rateEnuum
}