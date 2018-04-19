# webpack-eslint-react

## 介绍
使用webpack搭建react项目，并利用eslint检查代码质量。

**master 分支可用来结合其他框架如dva等，进行扩展。**

**webpack-eslint-react-redux 分支，使用了redux框架管理状态，react-router控制路由，antd 控制样式，开箱即用,想了解更多可以查看该分支**。

## 准备

安装 npm 或者 yarn

## 使用规则

安装依赖包

```
yarn install // 或者npm install
```

本地开发构建

```
yarn start
```

生产打包

```
yarn build
```

浏览器输入地址

```
http://localhost:9090/
```

分支 webpack-eslint-react-redux 生产环境下需要配置nginx， 配置如下

```
    server {
        listen     9091;
        server_name  localhost;
        location / {
            root path/to/your/project/dist;
            index  index.html index.htm;
            try_files $uri /index.html;
        }
        location /api {
            proxy_pass http://127.0.0.1:9090;
        }
    }
```

