
* cancel

	Cancel a file from the queue or a file that is in progress.
	Param
	    fileID
	    	The ID of the file you want to cancel.  The easiest method for retrieving the file ID is to use the id attribute of the file queue item you want to cancel.  Any number of file IDs can be entered as arguments.  If you enter ‘*’ as the first argument, all files in the queue will be cancelled.  If no file ID is set as an argument, the first file in the queue will be cancelled.
	    suppressEvent
	    	If set to true, the onUploadCancel event will be suppressed.
	    	This is useful when clearing the queue.
	Example    	
		$('#file_upload').uploadify('cancel')
		$('#file_upload').uploadify('cancel', '*')

* destroy

	Destroys the instance of Uploadify and returns the file input to its original state.
	Example
		$('#file_upload').uploadify('destroy')

* disable

	Disable or enable the browse button.
	Param
		setDisabled
			Set to true to disable the button or set to false to enable it.	
	Example
		$('#file_upload').uploadify('disable', true)		
		$('#file_upload').uploadify('disable', false)

* settings

	Return or update the value of one of the settings in an Uploadify instance.
	Param
	    name
	    	The name of the setting you want to return or change. Only setting this argument will return the value.
	    value
	    	The value you would like to use for the setting.
	    resetObjects
	    	Set this to true when updating the postData object to erase existing values. Otherwise, new values will be added to existing ones.
		*The only setting that cannot be set is the swf setting.
	Example
		 $('#file_upload').uploadify(settings','buttonText','BROWSE');

* stop

	Stop the current uploads and requeue anything in progress.
	Example
		$('#file_upload').uploadify('stop')

* upload

	Upload specific files or all the files in the queue.
	Param
		fileID
			The ID of the file you would like to upload.  The easiest way to get the fileID of a queue item is to use the id attribute of the queue item you want to upload.  To upload multiple files, add each fileID as an argument.  If ‘*’ is passed as the first and only argument, all files in the queue will be uploaded	
	Example
		$('#file_upload').uploadify('upload','*')







