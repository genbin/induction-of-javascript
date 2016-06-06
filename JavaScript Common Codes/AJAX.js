
/**
 * 使用示例
 *  
 * 通过常规ajax方式，用 XMLHttpRequest.setRequestHeader 向header请求头写入数据
 
  页面js执行  
  <script src="/javascript/log_index/ajax.js"></script>
  <script type="text/javascript">
    window.onload = function () {
        ajax({
            url:'/Log/ajax',
            type:'post',
            beforeSend:function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("test", "mydata");
            },
            onSuccess:function (r) {
                alert(r);
            }
        });
    };
  </script>
  
  // /Log/ajax所指向的php文件
  var_dump($_SERVER['HTTP_TEST']);
     
*/

// javascript/log_index/ajax.js 文件
// A generic function for performming Ajax requests
// It takes one argument, which is an object that contains as set of options
// All of which are outline in the comments, below
function ajax(options) {

    // Load the options object with defaults, if no
    // values were provided by the user
    options = {
        // The type of HTTP Request
        type:options.type || "POST",

        // The URL the request will be made to
        url:options.url || "",

        // How long to wait before considersing the request to be a timeout
        timeout:options.timeout || 5000,

        beforeSend:options.beforeSend || function(){},

        // Functions to call when the request fails, succeeds,
        // or completes (either fail or succeed)
        onComplete:options.onComplete || function () {
        },
        onError:options.onError || function () {
        },
        onSuccess:options.onSuccess || function () {
        },

        // The data type that'll be returned from the server
        // the default is simply to determine what data war returned from the and act accordingly
        data:options.data || ""
    };

    // Create the request object
    var xml = new XMLHttpRequest();

    // Open the asynchronous request
    xml.open(options.type, options.url, true);

    options.beforeSend(xml);
    //xml.setRequestHeader("request_type", "ajax");

    // We're going to wait for a request for 5 seconds, before giviing up
    var timeoutLength = options.timeout;

    // Keep track of when the request has been succesfully completed
    var requestDone = false;

    // Initialize a callback which will fire 5 seconds from now, cancelling the request (if it has not already occurred).
    setTimeout(function () {
        requestDone = true;
    }, timeoutLength);

    // Watch for when the state of the document gets updated
    xml.onreadystatechange = function () {
        // wait until the data is fully loaded,
        // and make sure that the request hasn't already timed out
        if (xml.readyState == 4 && !requestDone) {

            // Check to see if the request was successful
            if (httpSuccess(xml)) {

                // Execute the success callback with the data returned from the server
                options.onSuccess(httpData(xml, options.type));

                // Otherwise, an error occurred, so execute the error callback
            } else {
                options.onError();
            }
            // Call the completion callback
            options.onComplete();

            // Clean up after ourselves, to avoid memory leaks
            xml = null;
        }
    };

    // Establish the connection to the server
    xml.send();

    // Determine the success of the HTTP response
    function httpSuccess(r) {
        try {
            // If no server status is provided, and we're actually
            // requesting a local file, then it was successful
            return !r.status && location.protocol == "file:" ||
                // Any status in the 200 range is good
                (r.status >= 200 && r.status < 300) ||
                // Successful if the document has not been modified
                r.status == 304 ||
                // Safari returns an empty status if the file has not been modified
                navigator.userAgent.indexOf("Safari") >= 0
                    && typeof r.status == "undefined";
        } catch (e) {
        }

        // If checking the status failed, then assume that the request failed too
        return false;
    }

    // Extract the correct data from the HTTP response
    function httpData(r, type) {
        // Get the content-type header;
        var ct = r.getResponseHeader("content-type");

        // If no default type was provided, determine if some
        // form of XML was returned from the server
        var data = !type && ct && ct.indexOf("xml") >= 0;

        // Get the XML Document object if XML was returned from
        // the server , otherwise return the text contents returned by the server
        data = type == "xml" || data ? r.responseXML : r.responseText;

        // If the specified type is "script", execute the returned text
        // response as if it was JavaScript
        if (type == "script")
            eval.call(window, data);

        // Return the response data (either an XML Document or a text string)
        return data;
    }
}


