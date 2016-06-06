
* onCancel

    Triggered when a file is removed from the queue (but not if it’s replaced during  a select operation).
    onCancel：function(file) {
    	alert(file.name + ’cancelled');
    } 

* onClearQueue

    This event is triggered when the cancel method is called with an ‘*’ as the argument.
    onClearQueue: function(queueItemCount) {
    	alert(queueItemCount + 'removed');
    }

* onDestroy
    
    Triggered when calling the destroy method
    onDestroy: function() { 
    }

* onDialogClose

    Triggered when the browse files dialog box is closed.  If this event is added to the overrideEvents option, the default error message will not alert if errors occur when adding files to the queue.
        queueData, The queueData object containing information about the queue:
            filesSelected: The number of files selected in browse files dialog
            filesQueued: The number of files added to the queue (that didn’t return an error)
            filesReplaced: The number of files replaced in the queue
            filesCancelled: The number of files that were cancelled from being added to the queue (not replaced)
            filesErrored: The number of files that returned an error
    onDialogClose: function(queueData) {
        alert(queueData.filesQueued + ' files were queued of ' + queueData.filesSelected + ' selected files. There are ' + queueData.queueLength + ' total files in the queue.');
    } 

* onDialogOpen

    Triggered immediately before the browse files dialog is opened, but code placed in this function may not fire until the dialog box is closed.
    onDialogOpen: function() {
        $('#message_box').html('The file dialog box was opened...');
    }

* onDisable

    Triggered when the instance of Uploadify is disabled by calling the disable method.
    onDisable: function() {
        alert('You have disabled Uploadify!');
    }

* onEnable 

    Triggered when the Uploadify button is enabled using the disable method.
    onEnable: function() {
        alert('You can use Uploadify again.');
    } 

* onFallback

    Triggered during initialization if a compatible version of Flash is not detected in the browser.
    onFallback: function() {
        alert('Flash was not detected.');
    } 

* onInit

    Triggered at the very end of the initialization when Uploadify is first called.
    	instance: The instance of the uploadify object 
    onInit: function(instance) {
        alert('The queue ID is ' + instance.settings.queueID);
    }

* onQueueComplete 

    Triggered when all files in the queue have been processed.
        queueData：The queueData object containing information about the queue:
            uploadsSuccessful：The number of uploads that were successfully completed
            uploadsErrored：The number of uploads that returned an error
    onQueueComplete: function(queueData) {
        alert(queueData.uploadsSuccessful + ' files were successfully uploaded.');
    } 

    queueData对象中的数据
        files [object Object]
            txt type .mp4
            post [object Object]
            size 9033565
            filestatus -1
            modificationdate Mon Sep 10 2012 14:24:00 GMT+0800
            id SWFUpload_0_0
            creationdate Fri Aug 08 2014 13:11:43 GMT+0800
            index 0
            name test - 副本.mp4
        filesSelected 2
        filesQueued 2
        filesReplaced 0
        filesCancelled 0
        filesErrored 0
        uploadsSuccessful 2
        uploadsErrored 0
        averageSpeed 5
        queueLength 0
        queueSize 18067130
        uploadSize 18067130
        queueBytesUploaded 18067130
        uploadQueue 
        errorMsg Some files were not added to the queue:
        bytesUploaded 0

* onSelect

    Triggered for each file that is selected from the browse files dialog and added to the queue.
    onSelect: function(file) {
        alert('The file ' + file.name + ' was added to the queue.');
    } 
    file对象中的数据
        name:test.mp4
        type: .mp4
        size: 9033565

* onSelectError

    Triggered when an error is returned while selecting files.  This event is triggered for each file that returns an error.
        file：The file object that returned the error.
        errorCode：The error code that was returned.  The following constants can be used when determining the error code:
            QUEUE_LIMIT_EXCEEDED – The number of files selected will push the size of the queue passed the limit that was set.
            FILE_EXCEEDS_SIZE_LIMIT – The size of the file exceeds the limit that was set.
            ZERO_BYTE_FILE – The file has no size.
            INVALID_FILETYPE – The file type does not match the file type limitations that were set.
        errorMsg：The error message indicating the value of the limit that was exceeded.
    *You can access a full error message using ‘this.queueData.errorMsg’ if you do not override the default event handler.
    onSelectError: function(file, errorCode, errorMsg) {
        alert('The file ' + file.name + ' returned an error and was not added to the queue.');
    } 

* onSWFReady

    Triggered when the Flash object is loaded and ready.
    onSWFReady: function() {
        alert('The Flash file is ready to go.');
    } 

* onUploadComplete

    Triggered once for each file when uploading is completed whether it was successful or returned an error.  If you want to know if the upload was successful or not, it’s better to use the onUploadSuccess event or onUploadError event.
    	file: The file object that was uploaded or returned an error.
    onUploadComplete: function(file) {
        alert('The file ' + file.name + ' finished processing.');
    } 	

    file对象中的数据
        txt type .mp4
        post [object Object]
        size 9033565
        filestatus -4
        modificationdate Mon Sep 10 2012 14:24:00 GMT+0800
        id SWFUpload_0_1
        creationdate Fri Aug 08 2014 13:11:43 GMT+0800
        index 1
        name test.mp4
        uploaded true

* onUploadError

    Triggered when a file has been uploaded but returns an error.
        file: The file object that was uploaded
        errorCode: The error code that was returned
        errorMsg: The error message that was returned
        errorString: The human-readable error message containing all the details of the error
    onUploadError: function(file, errorCode, errorMsg, errorString) {
        alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
    } 

* onUploadProgress

    Triggered each time the progress of a file upload is updated.
        file: The file object being uploaded
        bytesUploaded: The number of bytes of the file that have been uploaded
        bytesTotal: The total number of bytes of the file
        totalBytesUploaded: The total number of bytes uploaded in the current upload operation (all files)
        totalBytesTotal: The total number of bytes to be uploaded (all files)
    onUploadProgress: function(file, bytesUploaded, bytesTotal, totalBytesUploaded, totalBytesTotal) {
        $('#progress').html(totalBytesUploaded + ' bytes uploaded of ' + totalBytesTotal + ' bytes.');
    }

* onUploadStart 

    Triggered immediate before a file is uploaded.
        file: The file object that is about to be uploaded
    onUploadStart: function(file) {
        alert('Starting to upload ' + file.name);
    }     

    file 数据
        type .mp4
        post [object Object]
        size 9033565
        filestatus -2
        modificationdate Mon Sep 10 2012 14:24:00 GMT+0800
        id SWFUpload_0_0
        creationdate Fri Aug 08 2014 13:11:43 GMT+0800
        index 0
        name test - 副本.mp4

* onUploadSuccess

    Triggered for each file that successfully uploads.
        file: The file object that was successfully uploaded
        data: The data that was returned by the server-side script (anything that was echoed by the file)
        response: The response returned by the server —--- true on success or false if no response.  If false is returned, after the successTimeout option expires, a response of true is assumed.
    onUploadSuccess: function(file, data, response) {
        alert('The file ' + file.name + ' was successfully uploaded with a response of ' + response + ':' + data);
    } 





