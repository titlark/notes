最近看到一款数据库客户端工具，DataGrip，是大名鼎鼎的 JetBrains 公司出品的，就是那个出品 Intellij IDEA 的公司。DataGrip 是一款数据库管理客户端工具，方便连接到数据库服务器，执行 sql、创建表、创建索引以及导出数据等。
之前试用的客户端工具是 dbvisualizer，但是在试用了 DataGrip 以后，我就决定抛弃 dbvisualizer。 我相信，当你第一眼看到 DataGrip 以后，会有一种惊艳的感觉，就好比你第一眼看到一个姑娘，就是那么一瞥，你对自己说，就是她了！
废话不多说，来看看 DataGrip 的常用功能。 DataGrip 下载链接如下`https://www.jetbrains.com/datagrip/download`。安装过程也很简单，双击安装，下一步，中间会让你选择主题，本人选择的是经典的 Darcula，安装完成后，启动，界面如下

![图片](../images/datagrip/img.png) 

相信使用过 IDEA 的同学会感到很亲切。接下来管理数据库驱动。DataGrip 支持主流的数据库，`File->DataSource`

![图片](../images/datagrip/img_1.png)


也可以在 Database 视图中展开绿色的`+`号，添加数据库连接

![图片](../images/datagrip/img_2.png) 

选择需要连接的数据库类型

![图片](../images/datagrip/img_3.png)



在面板中，左上部分列出了已经建立的数据库连接，点击各项，右侧会展示当前连接的配置信息，General 面板中，可以配置数据库连接的信息，如主机、用户名、密码等，不同数据库配置信息不完全相同，填入数据库 URL，注意，URL 后有个选项，可以选择直接填入 url，那么就不需要单独填主机名、端口等信息了。

Driver 部分显示数据库驱动信息，如果还没有下载过驱动，底部会有个警告，提示缺少驱动

![图片](../images/datagrip/img_4.png) 

点击 Driver 后的数据库类型，会跳转到驱动下载页面，点击 download，下载完会显示驱动包

![图片](../images/datagrip/img_5.png)



![图片](../images/datagrip/img_6.png) 

如果下载的驱动有问题，可以手动添加本地驱动包，在试用过程中，创建 Oracle 连接时，下载的驱动包就有问题，提示缺少 class，点击右侧绿色的 `+` 号，选择本地下载好的 jar 包，通过右侧上下箭头，将导入的 jar 包移到最上位置就 OK 了

![图片](../images/datagrip/img_7.png)



点击 `Test Connection`，查看配置是否正确，接下来就可以使用了。

打开 DataGrip，选择 `File->Settings`，当前面板显示了常用设置项

![图片](../images/datagrip/img_8.png) 

基本上默认设置就足够了，要更改设置也很简单，左侧菜单已经分类好了，第一项是数据库相关的配置，第二项是配置外观的，在这里可以修改主题，key map 修改快捷键，editor 配置编辑器相关设置，在这里可以修改编辑器字体，展开 edit 项，`Editor->Color & Fonts->Font`

![图片](../images/datagrip/img_9.png) 

需要将当前主题保存一下，点击`save as`，起个名，选择重命名后的主题就能修改了，这里我选择习惯的 Conurier New 字体，大小为14号，点击右下角的 apply，点击 OK

![图片](../images/datagrip/img_10.png)

其他的没啥好设置的了。

接下来，我们来使用 DataGrip 完成数据库的常用操作，包括查询数据、修改数据，创建数据库、表等。

![图片](../images/datagrip/img_11.png) 

左上区域显示了当前数据库连接，展开后会显示数据库表等信息，如果展开后没有任何信息，需要选中数据库连接，点击上面的旋转图标同步一下，下方有个 More Schema 选项，点击可以切换不同的 schema。

右键选中的数据库连接，选择 open console(快捷键：`Ctrl + Shift + Q`)，就可以在右侧的控制台中书写 sql 语句了。

![图片](../images/datagrip/img_12.png)



DataGrip 的智能提示非常爽，无论是标准的 sql 关键字，还是表名、字段名，甚至数据库特定的字段，都能提示，不得不感叹这智能提示太强大了，Intellij IDEA 的智能提示也是秒杀 eclipse。

写完 sql 语句后，可以选中，电子左上侧绿色箭头执行

![图片](../images/datagrip/img_13.png) 

也可以使用快捷键 `Ctrl + Enter`，选中情况下，会直接执行该 sql，未选中情况下，如果控制台中有多条 sql，会提示你要执行哪条 sql。之前习惯了 dbvisualizer 中的操作，dbvisualizer 中光标停留在当前 sql上(sql以分号结尾)，按下 `Ctrl + .` 快捷键会自动执行当前 sql，
其实 DataGrip 也能设置，在 `setting->Database-General` 中

![图片](../images/datagrip/img_14.png) 

语句执行时默认是提示，改成 `smallest statement` 后，光标停留在当前语句时，按下 `Ctrl + Enter` 就会直接执行当前语句。

语句的执行结果在底部显示

![图片](../images/datagrip/img_15.png) 

如果某列的宽度太窄，可以鼠标点击该列的任意一个，使用快捷键 `Ctrl + Shift + 左右箭头` 可以调整宽度，如果要调整所有列的宽度，可以点击左上角红框部分，选择所有行，使用快捷键 `Ctrl + Shift + 左右箭头` 调整

添加行、删除行也很方便，上部的 `+`、`-` 按钮能直接添加行或删除选中的行，编辑列同样也很方便，双击要修改的列，输入修改后的值，鼠标在其他部分点击就完成修改了，改完之后记得提交才生效（快捷键：`Ctrl + Enter`）。

![图片](../images/datagrip/img_16.png) 

有的时候我们要把某个字段置为 null，不是空字符串，DataGrip 也提供了渐变的操作，直接在列上右键，选择 set null

![图片](../images/datagrip/img_17.png) 

对于需要多窗口查看结果的，即希望查询结果在新的 tab 中展示，可以点击 `pin tab` 按钮，那新查询将不会再当前 tab 中展示，而是新打开一个 tab

![图片](../images/datagrip/img_18.png)



旁边的 output 控制台显示了执行 sql 的日志信息，能看到 sql 执行的时间等信息

![图片](../images/datagrip/img_19.png) 

我就问这么吊的工具，还有谁！！！

要新建表也是相当简单、智能，选中数据库连接，点击绿色 `+` 号下选择 table

![图片](../images/datagrip/img_20.png)



在新打开的窗口中，可以填写表信息

![图片](../images/datagrip/img_21.png) 

我就问你看到这个窗口兴奋不兴奋！！！

顶部可以填写表名、表注释，中间可以点击右侧绿色 `+` 号添加列，列类型 type 也是能自动补全，default 右侧的消息框图标点击后能对列添加注释，旁边的几个 tab 可以设置索引及外键

所有这些操作的 DDL 都会直接在底部显示

![图片](../images/datagrip/img_22.png) 

我就问你怕不怕

表建完后，可以点击下图中的 table 图标，打开表查看视图

![图片](../images/datagrip/img_23.png) 

可以查看表的数据，也能查看 DDL 语句

这些基本功能的设计、体验，已经惊艳到我了，接下来就是数据的导出。

DataGrip 的导出功能也是相当强大

选择需要导出数据的表，右键，Dump Data To File

![图片](../images/datagrip/img_24.png) 

即可以导出 insert、update 形式的 sql 语句，也能导出为 html、csv、json 格式的数据

也可以在查询结果视图中导出

![图片](../images/datagrip/img_25.png) 

点击右上角下载图标，在弹出窗口中可以选择不同的导出方式，如 sql insert、sql update、csv 格式等

![图片](../images/datagrip/img_26.png)



如果是导出到 csv 格式，还能控制导出的格式

![图片](../images/datagrip/img_27.png)



导出后用 excel 打开是这种结果

![图片](../images/datagrip/img_28.png) 

除了能导出数据外，还能导入数据

选择表，右键->Import from File，选择要导入的文件

![图片](../images/datagrip/img_29.png) 

注意，导出的时候如果勾选了左侧的两个 header 选项，导入的时候如果有 header，也要勾选，不然会提示列个数不匹配

### 1、关键字导航：

当在 datagrip 的文本编辑区域编写 sql 时，按住键盘 Ctrl 键不放，同时鼠标移动到 sql 关键字上，比如表名、字段名称、或者是函数名上，鼠标会变成手型，关键字会变蓝，并加了下划线，点击，会自动定位到左侧对象树，并选中点击的对象

![图片](../images/datagrip/img_30.png)



### 2、快速导航到指定的表、视图、函数等：

在 datagrip 中，使用 `Ctrl + N` 快捷键，弹出一个搜索框，输入需要导航的名称，回车即可

![图片](../images/datagrip/img_31.png)



### 3、全局搜索

连续两次按下 shift 键，或者鼠标点击右上角的搜索图标，弹出搜索框，搜索任何你想搜索的东西

![图片](../images/datagrip/img_32.png)



### 4、结果集搜索

在查询结果集视图区域点击鼠标，按下 `Ctrl + F` 快捷键，弹出搜索框，输入搜索内容，支持正则表达式、过滤结果

![图片](../images/datagrip/img_33.png)



### 5、导航到关联数据

表之间会有外检关联，查询的时候，能直接定位到关联数据，或者被关联数据，例如 user1 表有个外检字段 classroom 指向 classroom 表的主键 id，在查询 classroom 表数据的时候，可以在 id 字段上右键，go to，referencing data

![图片](../images/datagrip/img_34.png) 

选择要显示第一条数据还是显示所有数据

![图片](../images/datagrip/img_35.png) 

会自动打开关联表的数据

![图片](../images/datagrip/img_36.png) 

相反，查询字表的数据时，也能自动定位到父表

### 6、结果集数据过滤

对于使用 table edit（对象树中选中表，右键->table editor）打开的结果集，可以使用条件继续过滤结果集，如下图所示，可以在结果集左上角输入款中输入 where 条件过滤

![图片](../images/datagrip/img_37.png) 

也可以对着需要过滤数据的列右键，filter by 过滤

![图片](../images/datagrip/img_38.png)



### 7、行转列

对于字段比较多的表，查看数据要左右推动，可以切换成列显示，在结果集视图区域使用 `Ctrl + Q` 快捷键

![图片](../images/datagrip/img_39.png)



### 1、变量重命名

鼠标点击需要重命名的变量，按下 `Shift + F6` 快捷键，弹出重命名对话框，输入新的名称

![图片](../images/datagrip/img_40.png)



### 2、自动检测无法解析的对象

如果表名、字段名不存在，datagrip 会自动提示，此时对着有问题的表名或字段名，按下 `Alt + Enter`，会自动提示是否创建表或添加字段

![图片](../images/datagrip/img_41.png)



### 3、权限定字段名

对于查询使用表别名的，而字段中没有使用别名前缀的，datagrip 能自动添加前缀，鼠标停留在需要添加别名前缀的字段上，使用 `Alt + Enter` 快捷键

![图片](../images/datagrip/img_42.png)



### 4、通配符自动展开

查询的时候我们会使用 `select *` 查询所有列，这是不好的习惯，datagrip 能快速展开列，光标定位到 `*` 后面，按下 `Alt + Enter` 快捷键

![图片](../images/datagrip/img_43.png)



### 5、大写自动转换

sql 使用大写形式是个好的习惯，如果使用了小写，可以将光标停留在需要转换的字段或表名上，使用 `Ctrl + shift + U` 快捷键自动转换

### 6、sql格式化

选中需要格式化的 sql 代码，使用 `Ctrl + Alt + L` 快捷键

datagrip 提供了一个功能强大的编辑器，实现了 notpad++ 的列编辑模式

### 1、多光标模式

在编辑 sql 的时候，可能需要同时输入或同时删除一些字符，按下 `alt + shift`，同时鼠标在不同的位置点击，会出现多个光标

![图片](../images/datagrip/img_44.png)



### 2、代码注释

选中要注释的代码，按下 `Ctrl+/` 或 `Ctrl + shift + /` 快捷键，能注释代码，或取消注释

![图片](../images/datagrip/img_45.png)



### 3、列编辑

按住键盘 Alt 键，同时按下鼠标左键拖动，能选择多列，拷贝黏贴等操作

![图片](../images/datagrip/img_46.png)



### 4、代码历史

在文本编辑器中，邮件，local history，show history，可以查看使用过的 sql 历史

![图片](../images/datagrip/img_47.png) 

命令历史

![图片](../images/datagrip/img_48.png)