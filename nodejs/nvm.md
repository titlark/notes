# Widnows 下安装多个 node 版本


## 1. 首先下载 NVM 工具

[下载地址](https://github.com/coreybutler/nvm-windows)


## 2. 下载之后，进行安装，为了避免出现异常，一般安装在和 node 同位置

## 3. 安装成功之后，打开命令窗口，查看

出现版本号，证明安装成功

## 4. 接着查看已有的 node 版本

```shell
nvm list
```

## 5. 安装其他版本的 node

```shell
nvm install 12.13.0
```

## 6. 切换 node 版本

```shell
nvm use 12.13.0
```

## 7. 删除 node

```shell
nvm uninstall 12.13.0
```

> 需要注意的是，删除的 node 版本并非当前正在使用的版本，如果要删除的是当前正在使用的版本，请在切换其他版本之后再进行删除


## 8. 下载了不同版本的 node，但是不同版本的 node 对应的 npm 依赖是互不相通的，所以，切换了 node 之后，使用 npm 命令时，会提示

```
npm : 无法将“npm”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
所在位置 行:1 字符: 1
+ npm create umi
+ ~~~
    + CategoryInfo          : ObjectNotFound: (npm:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```
原因是，在 node 8.x.x 版本以上，安装 node，不会自动安装 npm，需要手动安装

解决方法：下载 node 12.13.0 对应的 zip 包，然后把 node_modules 和 node_modules 中的 npm.cmd 和 npm 拷贝到 nvm 对应版本的目录中。

拷贝对应目录

node_modules、npm.cmd 和 npm 全都拷贝到 nvm 下的 v12.13.0 目录下；



