
http://gruntjs.cn/

为何需要任务运行器？
    对于需要反复重复的任务，例如压缩、编译、单元测试、代码检查等，自动化工具可以减轻你的劳动，简化你的工作。
    
为何使用 Grunt？
    Grunt 有庞大的生态圈，并且每天都在增长。你可以自由地选择数以百计的插件，帮助你自动化地处理任务。
    
安装 grunt-cli
  npm install -g grunt-cli
  这是安装grunt-cli，并不是grunt task runner

grunt-cli是如何工作
  对gruntfile配置文件执行安装版本的grunt命令
  执行grunt时，它先用node的require()系统找安装了的grunt。（因此你可以在项目目录上执行grunt）
  找到grunt后，cli载入grunt库，运行gruntfile配置，执行里面配置的任务

gruntfile.js配置
  参看Gruntfile_example.js
    
  
  
    

    

    
    