import {makeInstaller} from '@gjc-element/utils'
import components from './components'
import '@gjc-element/theme/index.css' 
const installer = makeInstaller(components)

export * from '@gjc-element/components'
export default installer