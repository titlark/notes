## 切换主题

按下 Ctrl + ` 可切换主题。


## 工具和面板

可以使用窗口左上角的按钮或按 `Alt + 1`、`Alt + 2` 或来打开工具面板 `Alt + 3`。



## 处理文件和文件夹

`Ctrl + N` 创建文件。


## 编辑文本

**拆分视图**

请将选项卡拖动到编辑器一侧（用于垂直拆分）或编辑器顶部或底部（用于水平拆分）。


**多个插入符号**

您可以使用额外的插入符号同时在多个位置更改文本。要创建其他插入符号，请执行以下操作之一：

- 按 `Ctrl + Shift + ↑` 或 `Ctrl + Shift + ↓` 分别在当前插入符号的上方或下方添加插入符号。
- 按住 `Alt + Shift` 并单击要添加插入符号的位置。

> 使用多个插入符号，您不仅可以打字：您可以复制、粘贴、自动完成单词等等。


**扩大和缩小选择**

您可以根据文本或代码结构在插入符号处扩展和缩小选择。使用`Alt + ↑`和`Alt + ↓`。


## 格式化代码（Ctrl + Alt + L）


## 打开设置（Ctrl + Alt + S）


## 搜索

每当您想要执行全文搜索、导航到某个课程或只是不记得如何在 Fleet 中执行某些操作时，Go to 对话框都是正确的工具。

按 `Ctrl + K` 并使用 选择所需的选项卡 `Ctrl + Tab`。


## 版本控制


1. 打开终端 `Ctrl + Alt + T` 并运行以下命令：

```git
git init
echo "Hello" > greeting
git add .
git commit -m "first commit"
```

这将在工作区中初始化一个 Git 存储库，创建一个文本文件，并将整个工作区添加到版本控制中。您可以省略此步骤并改用您自己的支持 Git 的项目。

2. 对文本文件进行一些更改：

编辑文本文件

一个蓝色圆圈出现在该文件附近的“文件”视图中，表示存在未提交的更改。

3. 在 Files 视图中，转到 Git 选项卡，确保选择了更改，然后单击 Commit。


## 转到弹出窗口（Ctrl + K）

Goto 弹出窗口是项目中与搜索相关的所有内容的中心位置。您可以使用快捷方式或单击 JetBrains Fleet 窗口右上角的搜索图标来访问它。

Goto弹出窗口可帮助您查找文件、操作、符号等。记住它的快捷方式将为您节省大量时间。

默认情况下，它会搜索文件和顶级符号。您还可以将搜索范围缩小到文件 `Ctrl + P`、符号 `Ctrl + Shift + P` 或当前文件中的符号 `Ctrl + Shift + O`。

操作 `Ctrl + Shift + K`、工具和全文搜索 `Ctrl + Shift + F` 在 Goto 弹出窗口中作为选项卡提供。您可以从转到选项卡切换到它们，`Ctrl + Tab` 或者使用专用快捷方式立即打开所需的选项卡。

如果您需要更多空间来显示结果，可以将搜索移至专用面板。为此，请单击弹出窗口右上角的“在选项卡中打开”图标。



## 全文搜索（Ctrl + Shift + F）

如果您需要在整个项目中搜索文件内容或自动替换它，请使用文本搜索对话框。对于高级查询，它有几个匹配选项并允许您使用正则表达式。

找到所需位置后，您可以在单独的编辑器选项卡中打开它，也可以直接从预览中编辑它。

要切换替换模式，请单击搜索字段右侧的替换：

如果您需要更多空间来显示结果，可以将搜索移至专用面板。为此，请单击弹出窗口右上角的“在选项卡中打开”图标。


## 浏览文件结构（Ctrl + Shift + O）

您可以使用 Goto 弹出窗口快速查看文件结构并导航到其中一个元素。文件元素以树状结构显示。


## 编辑器导航

以下操作将帮助您以有效的方式在编辑器选项卡和文件位置之间导航：

动作名称    捷径            描述

后退  Ctrl + Alt + ←   导航到最近访问过的位置并返回
向前  Ctrl + Alt + →


上一个标签   Ctrl + PgUp   在编辑器选项卡之间切换
下一个标签   Ctrl + PgDn    在编辑器选项卡之间切换


转到上一个错误     Ctrl + Shift + E    在当前文件中的错误和警告之间导航（可能需要智能模式）
转到下一个错误     Ctrl + E


去线  Ctrl + L 导航到当前文件中的特定行


寻找      Ctrl + F      在当前文件中搜索和替换
代替      Ctrl + Alt + F


## 智能模式

您可以将 JetBrains Fleet 用作智能文本编辑器，而不是完整的 IDE。但是，如果您需要代码智能功能，您可以通过打开智能模式来启用它们。

<!-- 您可以将 Fleet 用作轻量级文本编辑器和 IDE。为了节省系统资源，您只在需要时启用繁重的 IDE 功能。 -->


**特征**

以下功能需要智能模式：

- 语义突出显示（部分可用，无需智能模式）
- 代码完成（部分可用，无需智能模式）
- 代码重构
- 导航和搜索（部分可用，无需智能模式）
- 查找用法
- 参数和表达式的类型信息检索

**安全**

为了使 Fleet 的智能模式功能正常工作，它可能需要执行项目代码，这可能会在其来源不受信任时造成问题。导入项目、运行脚本和执行 git 命令等操作可能会运行恶意代码。因此，只有在您信任代码作者时才启用智能模式很重要。


**快速修复和意图操作**

按下 `Alt + Enter` 可访问 Fleet 在当前上下文中建议的操作。

**重构代码**

将插入符号放在文字上或选择一个表达式，然后按 `Ctrl + Alt + V`。


**浏览代码库**

- 使用导航到符号的声明 `Ctrl + B`。
- 使用嵌体提示导航到用法和层次结构成员。
- `Ctrl + E` 使用和浏览错误 `Ctrl + Shift + E`。


**使用实时模板**

要生成 for 循环，请键入 `fori` 并按 Tab。Tab 填写必要的变量时按。


## 代码完成（Ctrl + Space）

在您键入时，JetBrains Fleet 会建议完成选项。这些建议基于许多因素，例如可用的代码智能服务、项目模型、周围代码和符号的可见性。



## 代码操作

JetBrains Fleet 不断分析您的代码并建议您可能希望在当前上下文中执行的操作。建议的操作范围从纠正错误到在插入符号处重构代码。

要查看插入符号处可用的操作，请按 `Alt + Enter`。选择所需的操作后，您可以立即应用它或使用 预览结果`Ctrl + P`。


## 类型信息

当您不确定当前使用的是什么类型时，您可以按 查找它`Ctrl + Alt + Shift + I`。JetBrains Fleet 将在插入符号处显示符号或表达式的静态类型信息。

## 参数信息

如果您正在使用具有大量重载的方法，或者只是想查找所需的参数，请使用`Ctrl + I`.


## 实时模板

使用实时模板将常见结构插入到您的代码中，例如循环、条件、声明或打印语句。

要展开代码片段，请输入相应的模板缩写并按 `⇥`。按住 `⇥` 以从模板中的一个变量跳转到下一个变量。按 `⇧⇥` 移动到上一个变量。



## 代码生成

使用代码完成来覆盖超类成员、生成访问器方法、、equals()等等hashcode()。

例如，如果您想为名为的字段生成 getter number，请键入 `gn` 并 getNumber() 从建议中进行选择。


## 换行时缩进

每当您放置换行符时，JetBrains Fleet 都会以正确的缩进开始新行。默认情况下启用此功能。

**禁用自动缩进**

在首选项菜单中，取消选中编辑器：代码 | Enter 上的自动缩进。

或者，将以下行添加到您的 `settings.json` 文件中：

```json
"enableIndenter": false
```


## 设置工作区

工作区是您的项目所在的目录。它包含项目文件和设置。您可以通过打开一个空目录来打开现有项目或启动新项目。


**打开工作区**

1. 按 `Ctrl + O` 或选择文件 | 从菜单中打开。

2, 在文件浏览器中，导航到要存储代码的空文件夹，然后单击 Open。

当您打开一个目录时，它会成为一个工作空间的根。您可以在文件视图中查看其内容。



## 实时模板列表

![](../images/fleet/img.png)












