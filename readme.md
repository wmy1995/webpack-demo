
### css/图片 资源

- css-loader

```
{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
  // style-loader: 让css 注入到js里面
  // css-loader： 解析url  import 路径
}
```

- sass-loader

```
{
  test: /\.scss$/,
  use: [
      "style-loader", // creates style nodes from JS strings
      "css-loader", // translates CSS into CommonJS
      "sass-loader" // compiles Sass to CSS, using Node Sass by default
  ]
}
```

- file-loader

```
{
  test: /\.(png|jpe?g|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {},
    },
  ],
},
```


- mini-css-extract-plugin
说明：style-loader（把css嵌入到js） 不能和 mini-css-extract-plugin（把css提取成单独文件） 同时使用。

```
{
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    "sass-loader"
  ],
},
```



- babel-loader

````
{
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```


- awesome-typescript-loader

````
{
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader'
}
```





### webpack-dev-server
在代码部署到生产环境之前，我们需要一个本地环境，用于运行开发的代码。相当于提供了一个简单的服务器，用于访问webpak 打包好的静态资源。我们用它来调试前端代码。

webpack-dev-server 是webpack官方提供的一个工具，用于快速启动一个静态服务。当mode=development 的时候，会不诶hot reload的功能，就是当源代码改变的时候，会自动更新页面。

