import type {App, Plugin} from 'vue'
import {each} from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

// 安装插件 创建安装器
export function makeInstaller(components: Plugin[]) {
    // 安装器里面再appuse，相当于两次了
    const installer = (app: App) => each(components, (c) => app.use(c))
    return installer as Plugin
}
// 安装组件 用于给组件添加安装方法 install
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any).name
        app.component(name, component as Plugin)
    }
    return component as SFCWithInstall<T>
}