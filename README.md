# OpenCC - Clipboard

A command line tool to do a conversion between Traditional Chinese and Simplified Chinese in **clipboard**, based on [OpenCC](https://github.com/BYVoid/OpenCC)


命令行工具，可將剪貼簿中的繁體中文與簡體中文進行轉換，節省複製貼上的時間。基於 [OpenCC](https://github.com/BYVoid/OpenCC) 進行開發。

## Install

```shell
npm install opencc-clip -g
```


## Usage　- Command Line

複製一段文字到剪貼簿中

在命令行，執行

```shell
s2t
```

可將剪貼簿中的文字從簡體中文轉換為繁體中文


執行

```shell
t2s
```

可將剪貼簿中的文字從繁體中文轉換為簡體中文


## Usage - Alfred Workflow

1. Install opencc-clip in global (`npm install opencc-clip -g`)
2. Download [workflow](https://github.com/threeday0905/opencc-clip/blob/master/alfred-workflow/OpenCC-Clipboard.alfredworkflow) and install in Alfred
3. keyword: **t2s** to convert Tranditional Chinese to Simplified Chinese in clipboard
4. keyword: **s2t** to convert Tranditional Chinese to Simplified Chinese in clipboard

**If you use nvm, free feel to update the script directly**


---

## Full Feature　- Convert File content (t2s or st2) into Clipboard


```shell

s2t -i file.txt

```

可將 file.txt 的內容，從簡體轉換成繁體後，貼到剪貼簿


## Full Feature　- Convert Cipboard content (t2s or st2) to generate File


```shell

t2s -o file_output.txt

```

可將剪貼簿的內容，從繁體轉換為簡體後，生成file_output.txt


## Full Feature - Conversion between files


```shell
s2t -i file.txt -o file_output.txt
```


## Full Feature - Specific Dictionary

OpenCC除了t2s跟s2t之外，還支持不同的字典檔，可參考　<https://github.com/BYVoid/OpenCC> 已獲取所有支持的字典檔列表

透過以下方式指定字典檔，如：

```shell
opencc-clip -d tw2sp
```

則可將繁體（臺灣正體標準）到簡體並轉換爲中國大陸常用詞彙


## Full Feature - Node.js Usage

同時也支持Node.js進行二次開發


```javascript
const openccClip = require('opencc-clip')

openccClip(
  {
    input: 'foo', /* input file name，如果省略則從clipboard獲取內容 */
    output: 'bar' /* output file name，如果省略則輸出到clipboard */
  },
  's2t' /* OpenCC　支持的字典檔名稱　*/
)
```

---

## Issues

Free feel to open an [issue](https://github.com/threeday0905/opencc-clip/issues) if any bug found
