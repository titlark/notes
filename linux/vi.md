# 1. Linux shell 命令行下删除一个单词的方法

`CTRL + H`：相当于按了一次退格键，一次删除一个字母。  
`CTRL + U`：一次删一行。  
`CTRL + W`：一次删一个单词，也可以这么理解，一次删一个空格的位置，比如:face book abcd edff，这种情况要按四次才能删完。  

# 2 Linux vi 操作命令

## 2.1 vi 下删除一个单词的方法：

`D` 从当前位置删除到行尾 (`d$` 的缩写)  
`db` 从当前位置删除到前一个单词的开头  
`dw` 从当前位置删除到下一个单词开头  
`x` 删除当前光标下的字符 (`dl` 的缩写)    
`X` 删除当前光标前的字符 (`dh` 的缩写)  
`dG` 从当前行删除到文件末    
`dgg` 从当前行删除到文件首
`dl` 删除字符 (缩写: `x`)   
`dnw` 删除n个单词，其中n表示具体的数字  
`dd` 删除一行，删除后下面的行会移上来填补空缺  

`c` 功能和 `d` 相同，区别在于完成删除操作后进入 INSERT MODE  
`C` 代表 `c$`(删除到行尾的内容)  
`cc` 也是删除当前行，然后进入 INSERT MODE  
`c$` 删除当前光标到行尾的内容。    
`s` 代表 `cl`(删除一个字符)  
`S` 代表 `cc`(删除一整行)  


## 2.2 在 vi 中移动光标

`k` 上  
`h` `l` 左 右  
`j` 下

`^` 移动到该行第一个非空格的字符处  
`w` 向前移动一个单词，将符号或标点当作单词处理  
`W` 向前移动一个单词，不把符号或标点当作单词处理  
`b` 向后移动一个单词，把符号或标点当作单词处理  
`B` 向后移动一个单词，不把符号或标点当作单词处理  
`e` 命令会将光标移动到下一个单词的最后一个字符。命令"ge"，它将光标移动到前一个单词的最后一个字符上。  
`(` 光标移至句首  
`)` 光标移至句尾  
`{` 光标移至段落开头  
`}` 光标移至段落结尾  
`H` 光标移至屏幕顶行  
`M` 光标移至屏幕中间行  
`L` 光标移至屏幕最后行  
`0` 到行首  
`$` 到行尾  
`gg` 到页首  
`G` 到页末  
`行号+G` 跳转到指定行（另一个移动到某行的方法是在命令"%"之前指定一个命令计数比如"50%"将会把光标定位在文件的中间. "90%"跳到接近文件尾的地方。 命令"H","M","L",分别将光标跳转到第一行，中间行，结尾行部分。）  
`n+` 光标下移n行  
`n-` 光标上移n行  
`Ctrl+g` 查询当前行信息和当前文件信息  
`fx` 向右跳到本行字符 `x` 处（`x` 可以是任何字符）  
`Fx` 向左跳到本行字符 `x` 处（`x` 可以是任何字符）
`tx` 和 `fx` 相同，区别是跳到字符 `x` 前  
`Tx` 和 `Fx` 相同，区别是跳到字符 `x` 后  
`C-b` 向上滚动一屏  
`C-f` 向下滚动一屏  
`C-u` 向上滚动半屏  
`C-d` 向下滚动半屏  
`C-y` 向上滚动一行  
`C-e` 向下滚动一行
`nzz` 将第 `n` 行滚至屏幕中间位置，不指定 `n` 时将当前行滚至屏幕中间位置。`zz` 命令会把当前行置为屏幕正中央，`zt` 命令会把当前行置于屏幕顶端，`zb` 则把当前行置于屏幕底端.



**使用命令计数**

假设你要向上移动9行。这可以用"kkkkkkkkk"或"9k"来完成。事实上，很多命令都可以接受一个数字作为重复执行同一命令的次数。比如刚才的例子，要在行尾追加三个感叹号，当时用的命令是"a!!!"。另一个办法是用"3a!"命令。3说明该命令将被重复执行3次。同样，删除3个字符可以用"3x"。指定的数字要紧挨在它所要修饰的命令前面。


## 2.3 进入和退出 vi 命令

`vi filename` 打开或新建文件，并将光标置于第一行首  
`vi +n filename` 打开文件，并将光标置于第 n 行首      
`vi + filename` 打开文件，并将光标置于最后一行首    
`vi +/pattern filename` 打开文件，并将光标置于第一个与 pattern 匹配的串处  
`vi -r filename` 在上次正用 vi 编辑时发生系统崩溃，恢复 filename  
`vi filename … filename` 打开多个文件，依次进行编辑

`ZZ` 退出 vi 并保存  
`:q!` 退出 vi，不保存，用 `:e!` 命令放弃所有修改并重新载入该文件的原始内容。  
`:wq` 退出 vi 并保存

## 2.4 重复操作

`.` 重复上一次操作

## 2.5 自动补齐

`C-n` 匹配下一个关键字  
`C-p` 匹配上一个关键字

## 2.6 插入

`o` 在光标下方新开一行并将光标置于新行行首，进入插入模式。  
`O` 同上，在光标上方。  

`i` 在光标之前进入插入模式。  
`a` 在光标之后进入插入模式。  
`A` 同上，在光标之前。  

`R` 进入替换模式，直到按下 Esc  
`set xxx` 设置 XXX 选项。  

## 2.7 行合并

`J` 把下面一行合并到本行后面

## 2.8 vi 中查找及替换命令

`/pattern` 从光标开始处向文件尾搜索 pattern  
`?pattern` 从光标开始处向文件首搜索 pattern  
`n` 在同一方向重复上一次搜索命令  
`N` 在反方向上重复上一次搜索命令  
`%` 查找配对的括号 

如果查找内容忽略大小写，则用命令 `set ignorecase`, 返回精确匹配用命令 `set noignorecase`。

如果你用 `/the` 来查找Vim也会匹配到 `there` 。要查找作为独立单词的 `the` 使用如下命令： `/the\>`。 `\>` 是一个特殊的记法，它只匹配一个 word 的结束处。

要搜索整个单词，请键入 `\<` 标记单词的开头，键入 `\>` 标记单词的结尾：

例如，要搜索单词 `foo`，可以使用 `\<foo\>`：

```shell
:s/\<foo\>/bar/
```


替换字符串命令格式如下：

```shell
[range]s/s1/s2/ [option]
```

**[range] 表示检索范围，省略时表示当前行。下面是一些检索范围的例子。**
- `1,10` 表示从第 1 行到 10 行。
- `%` 表示整个文件，同 `1,$`。
- `.,$` 从当前行到文件尾。
- `s` 为替换命令。
- `s1` 要被替换的串，`s2` 为替换的串。

**option 表示选项：**

- `/g` 表示在全局文件中进行替换。
- `/c` 表示在每次替换之前需要用户进行确认。
- 省略时仅对每行第一个匹配串进行替换。


`:s/p1/p2/g` 将当前行中所有 p1 均用 p2 替代，若要每个替换都向用户询问则应该用 `gc` 选项，其中，`s` 表示替换，`g` 表示全部替换，如果只替换第一个，把 `/g` 去掉即可。  
`:n1,n2s/p1/p2/g` 将第 n1 至 n2 行中所有 p1 均用 p2 替代，如果 n1 为 `.` 表示从当前行开始，最后一行可以用 `$` 表示。  
`:g/p1/s//p2/g` 将文件中所有 p1 均用 p2 替换

`.*[]^%~$` 在vi中具有特殊含义，若需要查找则应该加上转义字符""



**替代历史**

要浏览历史记录以查找先前的替代命令，请输入 `:s` 并使用向上或向下箭头键查找先前的替代操作。 要运行该命令，只需按 Enter。 您也可以在执行操作之前编辑命令。

**例子**

注释行（在行前添加＃）从5到20：

```shell
:5,20s/^/#/
```

取消注释行从5到20，恢复以前的更改：

```shell
:5,20s/^#//
```

将“苹果”，“橙色”和“芒果”的所有实例替换为“水果”：

```shell
:%s/apple\|orange\|mango/fruit/g
```

删除每行末尾的空格：

```shell
:%s/\s\+$//e
```


**匹配一行的开头与结尾**

`^` 字符匹配一行的开头。`$` 字符匹配一行的末尾。

所以 `/was$` 只匹配位于一行末尾的单词 was，所以 `/^was` 只匹配位于一行开始的单词was。


**匹配任何的单字符**

.这个字符可以匹配到任何字符。比如 `c.m` 可以匹配任何前一个字符是 c，后一个字符是 m 的情况，不管中间的字符是什么。


**匹配特殊字符**

放一个反斜杠在特殊字符前面。如果你查找 `ter。`，用命令 `/ter\。`




**使用标记**

当你用 `G` 命令从一个地方跳转到另一个地方时，vim 会记得你起跳的位置。这个位置在 vim 中是一个标记。使用命令 ` `` ` 可以使你跳回到刚才的出发点。

` `` `命令可以在两点之间来回跳转。`CTRL-O` 命令是跳转到你更早些时间停置光标的位置(提示:`O` 意为 `older`). `CTRL-I` 则是跳回到后来停置光标的更新的位置(提示：I 在键盘上位于 O 前面)。

注:使用CTRL-I 与按下键一样。





## 2.9 设置高亮

`:set hlsearch` 设置高亮  
`:set nohlsearch` 关闭高亮  
`:nohlsearch` 关闭当前已经设置的高亮

## 2.10 增量查找

`:set incsearch` 设置增量查找  
`:set noincsearch` 关闭增量查找  


## 2.11 更改字符

`rx` 将当前光标下的字符更改为 `x`（`x` 为任意字符）

例如：更改当前光标下的字符的大小写



## 2.12 恢复误操作

`u` 撤销最后执行的命令  
`U` 修正之前对该行的操作  
`Ctrl + R` Redo

## 2.13 在Vi中操作 Frame

`c-w c-n` 增加 frame  
`c-w c-c` 减少 frame  
`c-w c-w` 切换 frame  
`c-w c-r` 交换两个 frame

VIM中的块操作

Vim支持多达26个剪贴板

选块 先用v，C-v，V选择一块，然后用y复制，再用p粘贴。
`yy` 复制当前整行  
`nyy` 复制当前行开始的n行内容  
`?nyy` 将光标当前行及其下n行的内容保存到寄存器?中，其中?为一个字母，n为一个数字  
`?nyw` 将光标当前行及其下n个词保存到寄存器?中，其中?为一个字母，n为一个数字  
`?nyl` 将光标当前行及其下n个字符保存到寄存器?中，其中?为一个字母，n为一个数字  
`?p` 将寄存器?中的内容粘贴到光标位置之后。如果?是用yy复制的完整行，则粘贴在光标所在行下面。这里?可以是一个字母，也可以是一个数字  
`?P` 将寄存器a中的内容粘贴到光标位置之前。如果?是用yy复制的完整行，则粘贴在光标所在行上面。这里?可以是一个字母，也可以是一个数字  

> `y`操作符命令会把文本复制到一个寄存器3中。然后可以用`p`命令把它取回。因为`y`是一个操作符命令，所以你可以用`yw`来复制一个word. 同样可以使用命令记数。如下例中用`y2w`命令复制两个word，`yy`命令复制一整行，`Y`也是复制整行的内容，复制当前光标至行尾的命令是`y$`。


ay[motion]

`ay$` 复制光标位置到行末并保存在寄存器a中
`ayft` 复制光标位置到当前行第一个字母 t 并保存在寄存器 a 中

以上指令皆可去掉 a 工作，则 y,p 对未命名寄存器工作（所有d,c,x,y的对象都被保存在这里）。


以`d`或`x`这样的命令删除文本时，被删除的内容还是被保存了起来。你还可以用 p 命令把它取回来。`P`命令是把被去回的内容放在光标之前，`p`则是放在光标之后。对于以`dd`删除的整行内容，
`P`会把它置于当前行的上一行。`p`则是至于当前行的后一行。也可以对命令`p`和`P`命令使用命令记数。它的效果是同样的内容被取回指定的次数。这样一来`dd`之后的`3p`就可以把被删除行的3份副本放到当前位置。

命令 `xp` 将光标所在的字符与后一个字符交换。



**vi的选项设置**

`all` 列出所有选项设置情况  
`term` 设置终端类型  
`ignorance` 在搜索中忽略大小写  
`list` 显示制表位(Ctrl+I)和行尾标志($)  
`number` 显示行号  
`report` 显示由面向行的命令修改过的数目  
`terse` 显示简短的警告信息  
`warn` 在转到别的文件时若没保存当前文件则显示NO write信息  
`nomagic` 允许在搜索模式中，使用前面不带"\"的特殊字符  
`nowrapscan` 禁止vi在搜索到达文件两端时，又从另一端开始  
`mesg` 允许vi显示其他用户用write写到自己终端上的信息  


## 2.14 查看文件

仅是查看文件，不向文件写入内容，可以用只读形式编辑文件。用命令：

```shell
vim -R file
```

如果是想强制性地避免对文件进行修改，可以用命令：

```shell
vim -M file
```

## 2.15 更改文件名

将现有文件存成新的文件，用命令`:sav(eas) move.c`。如果想改变当前正在编辑的文件名，但不想保存该文件，就可以用命令：`:f(ile) move.c`。



## 2.16 分割一个窗口

打开一个新窗口最简单的办法就是使用命令：`:split`。`CTRL-W` 命令可以切换当前活动窗口。

## 2.17 关闭窗口

用命令：`:close`.可以关闭当前窗口。实际上,任何退出文件编辑的命令`:quit`和`ZZ`都会关闭窗口，但是用`:close`可以阻止你关闭最后一个 Vim，以免以意外地整个关闭了 Vim。

## 2.18 关闭除当前窗口外的所有其他窗口

用命令：`:only`,关闭除当前窗口外的所有其它窗口。如果这些窗口中有被修改过的，你会得到一个错误信息，同时那个窗口会被留下来。


## 2.19 为另一个文件分隔出一个窗口

命令`:split two.c`可以打开第二个窗口同时在新打开的窗口中开始编辑作为

参数的文件。如果要打开一个新窗口并开始编辑一个空的缓冲区，使用命令:`:new`。


## 2.20 垂直分割

用命令`:vsplit` 或：`:vsplit two.c`。同样有一个对应的 `:vnew` 命令，用于垂直分隔窗口并在其中打开一个新的空缓冲区。


## 2.21 切换窗口

CTRL-W h 到左边的窗口

CTRL-W j 到下面的窗口

CTRL-W k 到上面的窗口

CTRL-W l 到右边的窗口

CTRL-W t 到顶部窗口

CTRL-W b 到底部窗口

## 2.22 针对所有窗口操作的命令

`:qall`放弃所有操作并退出，`:wall`保存所有，`:wqall`保存所有并退出。

## 2.23 为每一个文件打开一个窗口

使用`-o`选项可以让 Vim 为每一个文件打开一个窗口：

`vim -o one.txt two.txt three.txt`。

## 2.24 使用 vimdiff 查看不同

`vimdiff main.c~ main.c`,另一种进入 diff 模式的办法可以在 Vim 运行中操作。编辑文件`main.c`，然后打开另一个分隔窗口显示其不同:

`:edit main.c`

`:vertical diffpatch main.c.diff`。

## 2.25 页签

命令`:tabe(dit) thatfile`在一个窗口中打开`thatfile`，该窗口占据着整个的 Vim 显示区域。命令`:tab split/new`结果是新建了一个拥有一个窗口的页签。以用 `gt` 命令在不同的页签间切换。

















