
	auto: false, //选定文件后是否自动上传

	buttonClass: // 上传按钮的css类

	buttonCursor: // 上传按钮的鼠标形式 ‘hand’ and ‘arrow’

	buttonImage: '/images/upload_img.gif',// 上传按钮的背景图片路径
    
    buttonText: 'select', // 上传按钮的显示文本

	checkExisting : '/uploadify/check-exists.php', // 检测要上传的文件是否在目标目录上存在

	debug : // true 转成debug模式，默认false

	fileObjName: // 文件对象的名字，默认'Filedata'，用于php中$_FILES['Filedata'];

	fileSizeLimit: '650MB', // 控制上传文件的大小 字符串 B KB MB GB
    
    fileTypeDesc: '请上传视频文件', // 出现在上传对话框中的文件类型描述
    
    fileTypeExts: '*.wmv;*.wm;', // 允许上传的文件扩展名
    
    formData: {'someKey' : 'someValue', 'someOtherKey' : 1}, // An object containing additional data to send via get or post with each file upload.  If you plan on setting these values dynamically, this should be done using the ‘settings’ method in the onUploadStart event.  You can access these values in the server-side script using the $_GET or $_POST arrays (PHP).

	height: 21,

	itemTemplate: '<div id="${fileID}" class="uploadify-queue-item">\
                    <div class="cancel">\
                        <a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">X</a>\
                    </div>\
                    <span class="fileName">${fileName} (${fileSize})</span><span class="data"></span>\
                </div>', 

				The itemTemplate option allows you to specify a special HTML template for each item that is added to the queue.
				Four template tags are available:
				    instanceID – The ID of the Uploadify instance
    				fileID – The ID of the file added to the queue
    				fileName – The name of the file added to the queue
    				fileSize – The size of the file added to the queue
				Template tags are inserted into the template like such: ${fileName}.

	width: 60,
    
    method: 'post', // The method to use when submitting the file upload.  The possible values are ‘post’ or ‘get’.

	multi: false, //是否允许同时上传多文件

	overrideEvents: ['onUploadProgress'], // An array of event names for which you would like to bypass the default scripts for.  You can tell which events can be overridden on the documentation page for each event.

    preventCaching: false, // If set to true, a random value is added to the SWF file URL so it doesn’t cache.  This will conflict with any existing querystring parameters on the SWF file URL.

    progressData: 'speed', // Set what type of data to display in the queue item during file upload progress updates.  The two options are ‘percentage’ or ‘speed’.

	queueID: 'some_file_queue', // 将item显示放在自定义的div中。The ID (without the hash) of a DOM element to use as the file queue.  File queue items will be appended directly to this element if defined.  If this option is set to false, a file queue will be generated and the queueID option will be dynamically set.

	queueSizeLimit：999，// The maximum number of files that can be in the queue at one time.  This does not limit the number of files that can be uploaded.  To limit the number of files that can be uploaded, use uploadLimit.  If the number of files selected to add to the queue exceeds this limit, the onSelectError event is triggered.

	removeCompleted: true, // Set to false to keep files that have completed uploading in the queue.

	removeTimeout: 3, // The delay in seconds before a completed upload is removed from the queue.

	requeueErrors: false, // If set to true, files that return errors during an upload are requeued and the upload is repeatedly tried. 如果设置成true，上传失败的文件再入队列，上传重新开始。
	
	successTimeout: 5, // The time in seconds to wait for the server’s response when a file has completed uploading.  After this amount of time, the SWF file will assume success. 当文件上传完成后的延时时间，秒 
	
    swf: '/uploadify/uploadify.v.3.2.1.swf', //指定上传控件的主体文件
    
    uploader: '/uploadify/uploadify.v.3.2.1.php', //指定服务器端上传处理文件

    uploadLimit: 1, // 多文件上传时，同时上传文件数目限制




