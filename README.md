# notes

Node 编译版本`10.23.0`。

# 常用命令

- `gitbook -V`：查看gitbook版本。
- `gitbook serve`：启动服务，可以在本地浏览器查看。
- `gitbook init`：会创建`README.md`和`SUMMARY.md`，前者是电子书的第一页，后者是目录。


运行`gitbook build`命令会在书籍坐在目录生成一个`_book`文件夹，里面的内容即为生成的html文件，可以通过使用gitbook build命令来生成网页而不开启服务器。

默认：将生成的静态网站输出到 `_book` 目录。

- 指定路径：gitbook build [书籍路径] [输出路径]。为了在GitHub上访问，使用gitbook build . docs。
- 指定端口：gitbook serve --port 2333
- 生成pdf格式：gitbook pdf ./ ./mybook.pdf
- 生成epub格式：gitbook epub ./ ./mybook.epub
- 生成 mobi 格式：gitbook mobi ./ ./mybook.mobi



