/*module.exports = function override(config, env) {
    // 用于修改默认的配置
    //https://github.com/timarney/react-app-rewired
    //加载全部的 antd 组件的样式（对前端性能是个隐患),对create-react-app进行默认配置自定义--react-app-rewired
    return config
}*/

// 按需引用组件和样式  less加载
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' } // 主题配置
    })
)
