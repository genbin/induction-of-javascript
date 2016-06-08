

    Part1 Core Javascript  

    Chapter 3 Datatypes and Values  

        3.1 Numbers 

        3.2 Strings 

        3.3 Boolean Values 
		
        3.4 Functions 

        3.5 Objects 

        3.6 Arrays 

        3.7 null 
		
        3.8 undefined 

        3.9 The Date Object 

        3.10 Regular Expresions 

        3.11 Error Objects 

        3.12 Type Conversion Summary 
			类型转换表

        3.13 Primitive Datatype Wrapper Objects 

        3.14 Object-to-Primitive Conversion 

        3.15 By Value Versus by Reference  

    Chapter 4 Variables 

		A variable is a name associated with a value; we say that the variable stores or contains the value. Variable allow you to store and manipulate data in your programs. To fully understand how variables work in JavaScript, you need to master a few more concepts.

        4.1 Variable Typing 
			定义变量时，不用为被定义的变量声明数据类型。

        4.2 Variable Declaration 
			用var关键字声明一个变量，用var声明的变量是永久性的，用delete关键字清除它会出错。

        4.3 Variable Scope 
			变量的范围是指变量被定义时所在程序的范围。
			一个全局变量在JS代码中的任何位置被定义，具有全局范围
			在函数中的被声明的变量只被定义在这个函数体中，它们就是局部变量，具有局部范围。函数的参数也作为局部变量，也是在函数体中被定义的。
			函数体中定义的变量在声明时一定要用var关键字，否则就是在使用全局变量了。

        4.4 Primitive Types and Reference Types 
			1)  JS中的数据类型分为两大种类：
				primitive types 本原类型: Numbers, boolean values, null, undefined
					该变量的值在内存中存储时有固定大小，numbers 8bytes, a boolean value 1 bit
				reference types 引用类型: Objects, arrays, functions
					该变量的值在内存中存储时没有固定大小，只能把该值的指针或者内存地址存储到该变量中
			2)  两种类型的最重要区别是它们的表现不同
			primitive types: 
				var a = 3.14;  // Declare and initialize a variable
				var b = a;     // Copy the variable's value to a new variable
				a = 4;         // Modify the value of the original variable
				alert(b)       // Displays 3.14; the copy has not changed
			reference types:
				var a = [1,2,3];  // Initialize a variable to refer to an array
				var b = a;        // Copy that reference into a new variable
				a[0] = 99;        // Modify the array using the original reference
				alert(b);         // Display the changed array [99,2,3] using the new reference
			3)  string数据类型是primitive type，但因为它的值没有固定大小，所以每次对字符串的操作都会创建一个新的字符串，像reference type(array, object)一样重新分配内存存储，字符串本身的值是永久不变的(immutable)
				所以 对字符串的+=，比array.push(), array.join()要慢许多
			4)  3.15节有更多讲解
			5)  附: b=bit 表示“位”，B=Byte 表示“字节”，1 Byte=8 bit

        4.5 Garbage Collection 
			1)  每次JS程序创建一个字符串、数组或者对象，解析器必须重新分配内存并存储这些实体。只要内存被重新分配，它必然要因为重用而清空，或者JS解析器会使用全部可用的内存。
			2)  在例如C，C++等语言中，内存是手工分配的。根据对象的使用痕迹并且在它们不再使用的时候销毁它们正是程序员的职责之一。这会是一个巨大的工作量，而且经常是bug的来源。
			3)  JS中，替代了手工操作内存的方式，而依靠了一个被成为垃圾收集（garbage collection）的技术。当一个对象不会再被程序使用时，JS解析器会检测到。当JS解析器认定一个对象不能读取(unreachable)时（例如，不再有任何通过使用变量可以关联到这个对象的方法），它就知道这个对象已经不再被需要了，它的内存就可以被重置。例如，下面的代码
				var s = "hello";          // Allocate memory for a string
				var u = s.toUpperCase( );  // Create a new string
				s = u;                    // Overwrite reference to original string
			4)  垃圾收集是自动的，对程序员是不可见的。

        4.6 Variables as Properties 
			从本质上看，JS中的变量与对象属性是相同的。
			4.6.1 The Global Object
				当JS解析器开始工作时，在执行JS代码之前要做的第一件事就是创建全局对象。这个对象的属性是JS程序中的全局变量。当你声明一个全局变量时，你实际上就是在定义这个全局对象中的一个属性。例如，parseInt() math
			4.6.2 Local Variables: The Call Object
				全局变量是全局对象的属性，与之对应，局部变量是调用对象的属性。
				当一个函数体在执行时，函数参数和局部变量被存储到调用对象的属性中。
			4.6.3 JavaScript Execution Contexts
				1)  JS解析器在每次开始执行一个函数时，它都会为这个函数创建一个新的执行上下文。
				不涉及函数的JS代码运行在使用了全局对象的执行上下文中，而一切JS函数通过自己的调用对象都运行在独属于自己的执行上下文中
				2)  JS在执行时允许多个全局执行上下文共同存在，这些执行上下文会使用各自的全局对象    再细看
				3)  执行上下文间的函数互相调用的安全性    再细看

        4.7 Variable Scope Revisited 
			1)  每一个JS上下文都有一个和与之关联的范围链。范围链是一些对象的一个列表或者一个链条。当JS代码需要找到一个变量x的值时，它先在这个范围链的第一个对象中找。如果这个对象有一个叫做x的属性，这个属性的值就被程序使用。如果这第一个对象中没有被命名为x的属性，JS继续在这个范围链中的第二个对象中寻找。如果这第二个对象仍然没有属性x，JS程序将在第三个对象中寻找，以此类推。
			2)  不同情况下的范围链
			在最顶层的JS代码（不包含函数）中，它的范围链中只有一个全局对象。所有变量都在这个对象中找，如果变量没有在其中发现，这个变量值就是undefined。
			在不是嵌套的函数中，它的范围链有两个对象组成。第一个是该函数的调用对象，第二个是全局对象。当在该函数中调用一个变量时，先在调用对象中查找，然后再在全局对象中查找。
			在一个嵌套的函数中，它的范围链中有三个或者更多的对象。

    Chapter 5 Expressions and Operators 
		
		If you are familiar with C, C++, or Java, you'll notice that the expressions and operators in JavaScript are very similiar.

        5.1 Expressions 

        5.2 Operator Overview 
			JavaScript 操作符列表

        5.3 Arithmetic Operators 

        5.4 Equality Operators 

        5.5 Relational Operators 

        5.6 String Operators 

        5.7 Logical Operators 

        5.8 Bitwise Operators 

        5.9 Assignment Operators 

        5.10 Miscellaneous Operators 

    Chapter 6 Statments 
	
		Expressions are JavaScript phrases that can be evaluated to yield a value. Operators within an expression may have side effects, but in general, expressions don't do anything. To make something happen, you use a JavaScript statement, which is skin to a complete sentence and command.
		
        6.1 Expression Statements 
			The simplest kinds of statements in JavaScript are expressions that have side effects. Assignment statements are one major category of expression statements.

        6.2 Compound Statements 
			JavaScript has a way to combine a member of statements into a single statement, or statement block. This is done simply by enclosing any number of statements within curly braces.

        6.3 if

        6.4 else if

        6.5 switch

        6.6 while

        6.7 do/while

        6.8 for

        6.9 for/in

        6.10 Labels 标识
            是指用于switch中的case和default
            case 和 default 后面可以接任何语句，甚至可以是循环语句，如while, do/while, for, for/in

        6.11 break

        6.12 continue

        6.13 var
            显式的定义一个或几个变量，如 var q; var r, p=1, q;

        6.14 function

        6.15 return

        6.16 throw

        6.17 try/catch/finally

        6.18 with

        6.19 The Empty Statement

        6.20 Summary of JavaScript Statements  
			JavaScript statement 语法表

    Chapter 7 Objects and Arrays 
		
		An object is a collection of named values.
		An array is a specialized kind of object that behaves as an ordered collection of numbered values.

		7.1 Creating Objects 

		7.2 Object Properties 

		7.3 Objects as Associative Arrays 

		7.4 Universal Object Properties and Methods 

		7.5 Arrays 

		7.6 Reading and Writing Array Elements 

		7.7 Array Methods 

		7.8 Array-Like Objects 

    Chapter 8 Functions 
		
		Functions and Objects are interwined in JavaScript.

		8.1 Defining and Invoking Functions 

		8.2 Function Arguments 

		8.3 Functions as Data  
		In JavaScript, however, functions are not only syntax but also data, which means that they can be assigned to variables, stored in the properties of objects or the elements of arrays, passed as arguments to functions, and so on.

		8.4 Functions as Methods  

		8.6 Function Properties and Methods 
			arguments.length
			prototype, 用于constructor
			call(), apply()  用途再查

		8.7 Utiliy Function Examples 

		8.8 Function Scope and Closures 

			8.8.1 Lexical Scoping  函数的语义范围	
				1) JavaScript中的函数受限范围是在静态范围性的（Lexical Scoping 语义范围），而不是动态范围性的（Dynamical Scoping 动态范围），也就是说，JavaScript中的函数运行在它所定义的范围中，而不是它被执行的范围中。（这是因为JavaScript是脚本语言，它是解释执行的）
				2) 当一个函数被定义后，它的当前的范围链(scope chain)就被存储起来，并成为这个函数的内部状态的一部分。
				在顶层上，范围链(scope chain)仅仅是一个全局对象，与静态范围性(Lexical Scoping)没有特别的关系。
				当你定义了一个嵌套函数时，范围链(scope chain)就包括了其包含的函数。这意味着被嵌套的函数能够读写嵌套它的函数的所有参数和局部变量。
				3) 要注意的是尽管当一个函数被定义时，范围链(scope chain)就被固定不变地存储下来，但在范围链(scope chain)中被定义到的属性并不是固定不变的。范围链(scope chain)是’活’的，当一个函数被调用时，可以读写任何随时绑定于其上的属性。

			8.8.2 The Call Object  调用对象
				当JS解析器执行一个函数时，
				1)  它首先在这个函数的范围链(scope chain)中设置范围，这个范围链(scope chain)是在函数定义时就生成并存储到其应该在的地方的。
				2)  接下来，JS解析器在这个范围链(scope chain)的顶端添加一个被称为调用对象(call object)的对象（在ECMAScript上用的是激活对象(activation object)这个词）。这个调用对象进行初始化，具备了一个叫做arguments的属性，这个属性就是指函数的参数对象。
				3)  然后函数被定义的参数加到调用对象(call object)中
				4)  函数体中所有被var关键字声明的局部变量被加到调用对象的属性中

			8.8.3 The Call Object as a Namespace
				(function() {  // This function has no name.
					// Code goes here.
					// Any variables declared become properties of the call
					// object instead of cluttering up the global namespace.
				})();  

			8.8.4 Nested Functions as Closures
				在JavaScript中允许使用嵌套函数，并允许把函数以变量的形式使用，这将导致出一个强大功能 ---- 闭包。

				1  被嵌套函数的范围链 
				为了讨论’闭包’功能，我们先考虑嵌套函数的通常情景：
				在一个函数f中定义了一个函数g。
				var x = "global";
				function f() {
					var x = "local";
					function g() { 
						alert(x); 
					}
					g();
				}
				f();  // Calling this function displays "local"
				当函数f被调用时，其范围链中有两个对象：处在前面的是函数f的调用对象(call object)，后面跟随着全局对象。因为函数g是在函数f中定义的，所以函数f的范围链也就成为了函数g的范围链中的一部分。当函数g被调用时，函数g的范围链就包括如下的对象，从前到后依次是：1 函数g的调用对象  2 函数f的调用对象 3 全局对象。

				2  闭包是什么  
				但是在JavaScript中，函数也是一种数据，就如同数字、字符串一样，因而函数不仅可以存储的数组中，还可以被定义到对象属性中，也可以被函数所返回。在通常情况下，函数的这种特性并没有引起特别令人惊喜的应用，但当这种特性被应用到被嵌套的函数时就出现了被称为‘’闭包’的用法。我们看下面这个返回了一个被嵌套的函数的代码：

				function makefunc(x) {
					return function() { return x; }
				}
				var a = [makefunc(0), makefunc(1), makefunc(2)];

				a[0] = function() { return 0; }
				alert(a[0]());  // Displays 0

				a[1] = function() { return 1; }
				alert(a[1]());  // Displays 1
				
				a[2] = function() { return 2; }
				alert(a[2]());  // Displays 2

				当这个函数被每一次调用时，都会返回一个函数。虽然这个被返回的函数的JS代码总是相同的，但因为每次调用外层函数时的参数的具体数值不同，而导致被返回的函数的范围链就有相应的不同。（就是说，对外层函数的每一次调用，它的范围链中的调用对象都是不同的。）如果你把被返回的函数保存到数组中，然后使用它们中的每一个，你将会发现每一个都是一个不同的值。既然每个函数都是相同的JS代码，每次调用又都在相同的上下文环境中，那么致使返回不同数值的唯一原因就是被嵌套的函数在被定义时所在的上下文环境是不同的。
				以上的代码结果正是你在严格的JS语义规则下所预料到的相同：一个函数在其被定义的范围里所执行。但是，产生这些令你感到惊奇的原因是当一个函数退出时，你会希望局部范围（local scopes）不再存在。而实际上，这也确实是通常所发生的。当一个函数被调用时，它的调用对象被创建，并放置在这个函数的范围链里。当一个函数退出（exit）时，JS就把这个函数的调用对象就从这个函数的范围链中移除。当这个函数中没有内嵌函数时，这个函数的范围链是这个函数的调用对象的唯一引用；当调用对象从这个链条中移除时，就不会再有对这个函数的范围链的引用了，然后这个函数的范围链就会在垃圾收集机制中销毁。
				但嵌套函数改变了这种状况。如果用户在一个函数中创建了一个嵌套函数，这个嵌套函数的调用对象将成为外层函数的调用对象中的一个属性。如果这个嵌套函数仅仅在它所在的外层函数以内使用的话，这个嵌套函数的唯一引用仅仅是在外层函数的调用对象中。当外层函数执行返回操作时，嵌套函数和外层函数的调用对象彼此对应，没有其它更多东西关联到其中任何一个，它们将进入垃圾收集器中销毁。
				但是，如果你把嵌套函数的引用保存到全局对象中，事情就不同了。你可以通过以下方法做到这一点：1 把嵌套函数作为外层函数的返回值返回 2 把嵌套函数保存在一些对象的属性里。在上述情形中，就存在着对嵌套函数的一个外部引用，同时嵌套函数还保留着了对它所在的外层函数的调用对象的引用。最终结果就是，当外层函数停止执行后，起执行外层函数作用的调用对象继续存在着，而且外层函数的参数的名称和值、它的局部变量也保存在外层函数的该调用对象中。虽然JavaScript不能直接以任何方式存取调用对象，但是其中的属性是范围链中的一部分，为了嵌套函数的执行。（要注意的是如果一个外层函数保存了对两个嵌套函数的全局引用，那么这两个嵌套函数分享同一个外层函数的调用对象，任何一个嵌套函数改变这个调用对象对另外一个嵌套函数都是可见的）
				JavaScript函数是执行代码和执行这些代码的范围的混合体。这个代码和范围的混合体在计算机科学的术语中就叫做闭包。所有的JavaScript函数都是闭包。但这些闭包仅仅是有趣而已，而在我们上面讨论的情形是：当一个嵌套函数被它所在的外层函数导出。当一个嵌套函数被这种方式使用时，它经常被明了的叫做一个闭包。
				闭包是一个有趣和强大的技术。尽管它们并不常见于日常JS编程中，但它们仍然值得我们学习。如有你理解了闭包，你理解了范围链和函数的调用对象，那么你可以称为自己是一个高级JavaScript程序员了。

				8.8.4.1 Closures examples

					1  要一个全局性的变量，并令每次使用它时其值均不同，并且这个变量值不能被人为更改

					用一般函数的方法
					说明：使用函数的属性，每次调用uniqueID()时，均在该变量上加1
					缺点：可以通过uniqueID.id被设置					
					uniqueID = function() {
						if (!arguments.callee.id) {
							arguments.callee.id = 0;
						}
						return arguments.callee.id++;
					};

					用闭包的方法
					说明：匿名函数定义后即执行，返回里面嵌套的函数。在匿名函数中定义一个它的局部变量，在嵌套函数中自增这个变量，并作为嵌套函数的返回值，使用时uniqueID()。
					uniqueID = (function() {  
						var id = 0;
						return function() { 
							return id++; 
						};  
					})(); 
					
					2  创建一个私有持久变量   

					说明：为对象设置一对setter和getter方法
					
					function makeProperty(o, name, predicate) {

						// 这是属性值
						var value;  

						// getter 方法
						o["get" + name] = function() { 
							return value; 
						};

						// setter 方法 设置值或者当数值验证不通过时抛出异常
						o["set" + name] = function(v) {
							if (predicate && !predicate(v)) {
								throw "set" + name + ": invalid value " + v;
							} else {
								value = v;
							}
						};
					}

					// 演示 makeProperty() 

					var o = {};  // 建立一个空对象

					// 为对象o增加一对属性存取器 getName and setName()，并确保该属性必须是字符串类型
					makeProperty(o, "Name", function(x) { return typeof x == "string"; });

					o.setName("Frank");  // 设置一个属性值
					print(o.getName());  // 获取一个属性值
					o.setName(0);        // 尝试设置一个错误的属性值
					
				8.8.4.2 Closures and memory leaks in Internet Explorer

		8.9 The Function() Constructor 

    Chapter 9 Classes, Constructors, and Prototypes  类，构造器，原型

		9.3 Simulating Classes in JavaScript 在JavaScript中模拟类
		9.4 Common Object Methods 通用的对象方法
		9.5 Superclasses and Subclasses 父类和子类
		9.6 Extending Without Inheriting 不需要继承的扩展
		9.7 Determining Object Type 判断对象类型
		9.8 Example: A defineClass() Utility Method 示例

    Chapter 10 Modules and Namespaces 模块和命名空间
		10.1 Creating Modules and Namespaces 创建模块和命名空间
		10.2 Importing Symbols from Namespaces 引用命名空间中的符号
		10.3 Module Utilities 模块常用事例

    Chapter 11 Pattern Matching with Regular Expressions 用正则表达式进行模式匹配
		11.1 Defining Regular Expressions 定义正则表达式
		11.2 String Methods for Pattern Matching 用于正则匹配的字符串方法
		11.3 The RegExp Object 正则对象

    Chapter 12 Scripting Java 编写Java程序
		12.1 Embedding JavaScript 嵌入JavaScript 
		12.2 Scripting Java 编写Java脚本

Part2  Client-Side Javascript  

    Chapter 13 JavaScript in Web Browsers 
		described the Window object and the central role it plays in client-side JavaScript: it is the global object in Clent-Side JavaScript programs.
		13.1  The Web Browser Environment 
			1--3 are three important features in the Web Browser Environment
			13.1.1. The Window as Global Execution Content 
			13.1.2. The Client-Side Object Hierarchy and the DOM
			13.1.3. The Event-Driven Programming Model
			13.1.4. The Role of JavaScript on the Web
			13.1.5. Unobtrusive JavaScript
		13.2 Embedding Scripts in HTML 
			13.2.1. The <script> Tag
			13.2.2. Scripts in External Files	
			13.2.3. Specifying the Scripting Language
			13.2.4. The defer Attribute
			13.2.5. The <noscript> Tag
			13.2.6. The </script> Tag
			13.2.7. Hiding Scripts from Old Browsers
			13.2.8. Nonstandard Script Attributes
		13.3 Event Handlers in HTML 
			to introduce Event Handlers in HTML
		13.4 JavaScript in URLs 
			Another way that JavaScript code can be included on the client side is in a URL following the javascript: pseudoprotocol specifier.
		13.5 Execution of JavaScript Programs
			The sections discuss exactly how and when that integrated JavaScript code is executed by the JavaScript interpreter.
		13.6 Client-Side Compatibility 
			13.6.1. The History of Incompatibility
			13.6.2. A Word about "Modern Browsers"
			13.6.3. Feature Testing
			13.6.4. Browser Testing
			13.6.5. Conditional Comments in Internet Explorer
		13.7 Accessibility 
		13.8 JavaScript Security
			13.8.1. What JavaScript Can't Do
			13.8.2. The Same-Origin Policy
				A script can read only the properties of windows and documents that have the same origin as the document that contains the script.
				The same-origin policy is necessary to prevent scripts from stealing proprietary information. 
			13.8.3. Scripting Plug-ins and ActiveX Controls
				There are security implications to being able to script ActiveX controls and plug-ins. 
			13.8.4. Cross-Site Scripting
				Cross-site scripting, or XSS, is a term for a category of security issues in which an attacker injects HTML tags or scripts into a target web site. Defending against XSS attacks is typically the job of server-side web developers. However, client-side JavaScript programmers must also be aware of, and defend against, cross-site scripting. 
				the way to prevent XSS attacks is to remove HTML tags from any untrusted data before using it to create dynamic document content.	
				or decodeURI(), decodeURIComponent(), escape()  
			13.8.5. Denial-of-Service Attacks
				The same-origin policy and other security restrictions described here do a good job of preventing malicious code from damaging your data or compromising your privacy. 
		13.9 Other Web-Related JavaScript Embeddings

    Chapter 14 Scripting Browser Windows  
		14.1 Timers 
			the global functions: setTimeout(), clearTimeout(), setInterval(), clearInterval()
		14.2 Browser Location and History
			This section discusses a Window's Location and History objects.	
		14.3 Obtaining Window, Screen, and Browser Information
			This section discusses a Window object, Screen object, and Navigator object. 
		14.4 Opening and Manipulating Windows
			This section discusses a Window object.
		14.5 Simple Dialog Boxes
			This section discusses alert(), confirm(), prompt() of the Window object.
		14.6 Scripting the Status Line
			This section discusses the status property of the Window object.
		14.7 Error Handing
			This section discusses onerror() of the Window object.
		14.8 Multiple Windows and Frames
			This section explains how to use JavaScript code to make windows or frames interact with one another.
		14.9 Example: A Navigation Bar in a Frame
			to demonstrate many of the most important window scripting techniques

    Chapter 15 Scripting Documents
		15.1 Dynamic Document Content
			This section discusses write(), writeln(), open() and close() of the Document object.
		15.2 Document Properties
			This section discusses legacy properties of the Document object.
		15.3 Legacy DOM: Document Object Collections
			Documents Object Collections are the heart of the legacy DOM, and they are the properties that give you access to certain special elements of the document.
		15.4 Overview of the W3C DOM
			The W3C DOM extends and replaces the simple legacy DOM.
			15.4.1. Representing Documents as Trees
			15.4.2. Nodes
			The Node Interface defines properties and methods for traversing and manipulating the tree.
			15.4.3. The DOM HTML API
			Furmore, the DOM defines tag-specific interfaces for many HTML elements. 
			the DOM represents an HTML document as a tree of Node objects.
			15.4.4. DOM Levels and Features
			15.4.5. DOM Conformance
		15.5 Traversing a Document
		15.6 Finding Elements in a Document
		15.7 Modifing a Document
		15.8 Adding Content to a Document
		15.9 Example: A Dynamically Created Table of Contents
		15.10 Querying Selected Text
		15.11 The IE 4 DOM

	Chapter 16 Cascading Style Sheets and Dynamic HTML  
		16.1 Overview of CSS	
		16.2 CSS for DHTML
		16.3 Scripting Inline Styles
		16.4 Scripting Computed Styles
		16.5 Scripting CSS Classes
		16.6 Scripting Stylesheets

	Chapter 17 Events and Event Handing 
		17.1 Basic Event Handling
		17.2 Advanced Handling with DOM Level 2
		17.3 The Internet Explorer Event Model
		17.4 Mouse Events
		17.5 Key Events
		17.6 The onload Event
		17.7 Synthetic Events

    Chapter 18 Forms and Form Elements  
		18.1 The Form Object
		18.2 Defining Form Elements
		18.3 Scripting Form Elements
		18.4 Form Verification Example

    Chapter 19 Cookies and Client-Side Persistence  
		19.1 An Overview of Cookies
		19.2 Storing Cookies
		19.3 Reading Cookies
		19.4 Cookie Example
		19.5 Cookie Alternatives
		19.5.1 IE userData Persistence
		19.5.2 Flash SharedObject Persistence
		19.6 Persistent Data and Security

    Chapter 20 Scripting HTTP 
		Here we consider how JavaScript code can communicate with a web server without causing the web browser to reload the currently displayed page.
		20.1 Using XMLHttpRequest
		20.2 XMLHttpRequest Examples and Utilities
		20.3 Ajax and Dynamic Scripting
		20.4 Scripting HTTP with <script> Tags
		
    Chapter 21 JavaScript and XML javascript和XML
		to explains how to use JavaScript to work with XML data
		21.1 Obtaining XML Documents	
			to obtain parsed XML data in the form of a Document object
			21.1.1. Creating a New Document
			21.1.2. Loading a Document from the Network
			21.1.3. Parsing XML Text
			21.1.4. XML Documents from Data Islands
		21.2 Manipulating XML with the DOM API
			21.2.1. XML Versus HTML DOM
				HTMLDocument and HTMLElement are extensions of the core XML Document and Element objects.	
			21.2.2. Example: Creating an HTML Table from XML Data
		21.3 Transforming XML with XSLT
			In the context of client-side JavaScript, XSLT is usually done to transform the XML document into HTML.
		21.4 Querying XML with XPath
			An XPath expression can refer to an XML element by its position in the document hierarchy or can select an element based on the value of (or simple presence of) an attribute. 
		21.5 Serializing XML
		21.6 Expanding HTML Templates with XML Data
			The XML be used with an automatic templating facility in which data from a data island is automatically inserted into HTML. This section applies the XML techniques seen earlier in the chapter and uses XPath and the DOM to create an improved templating facility that works in IE and Firefox.
		21.7 XML and Web Services
			In this section, I'll show you how to use the XMLHttpRequest object and XPath queries to make a simple SOAP request to a web service.
		21.8 E4X: ECMAScript for XML

    Chapter 22 Scripted Client-Side Graphics
		This chapter describes how to use JavaScript to manipulate graphics.
		22.1 Scripting Images
			to explain traditional JavaScript techniques for visual effects such as image rollovers 
		22.2 Graphics with CSS
			CSS can produce simple graphics: the background-color property "fills" a rectangle with a solid color, and the border property outlines a rectangle.
		22.3 SVG: Scalable Vector Graphics
			At the time of this writing, the only mainstream web browser to support SVG graphics natively is Firefox 1.5. 
		22.4 VML: Vector Markup Language
			VML is Microsoft's answer to SVG. Like SVG, VML is an XML grammar for describing drawings. VML is similar to SVG in many ways.
		22.5 Graphics in a <canvas>
			The <canvas> tag was introduced by Apple in the Safari 1.3 web browser.
			Firefox 1.5 and Opera 9 have followed Safari's lead. Both browsers also support the <canvas> tag. 
			You can even use the <canvas> tag in IE, with open source JavaScript code (initially from Google) that builds canvas compatibility on top of IE's VML support.An important difference between the <canvas> tag and SVG and VML is that <canvas> has a JavaScript-based drawing API while SVG and VML describe a drawing with an XML document. 			
		22.6 Graphics with Flash
		22.7 Graphics with Java

    Chapter 23 Scripting Java Applets and Flash Movies 

Part 3  Core JavaScript Reference javascript的核心语法的参考手册
Part 4  Client-Side JavaScript Reference javascript的客户端应用的语法的参考手册


*******

javascript 程序
通过函数和事（事用于动态的执行函数），
操纵HTMLDom对象，从而得到HTMLDom对象的动态效果或者动态功能；
操纵XMLDom对象，用于访问xml文；
操纵XMLHTTPRequest对象，用于和xml文件或者和后台文件传据信息。

操纵对象包括两种根本方式：
一种是改变对象的属性值
一种是运用对象自身的方法作用于它

HTML Dom, 分为两类：
一类是专用于javascript 函数的对象（共七个：Regular Expression，String，Array，Math，Date，Window，Document）
一类是对象化的html标签的对象。

调用函数的两个途径：
直接调用
通过事动态调用——其中在<a>标签中调用值得重视。

函数大体有两类：
一种是自己编写的函数，这种函数运用了对象的属性和函数
一种是对象里只用于自己使用的函数

ActiveXObject ()方法通过创建某个COM实例而得到DOM中的元素
new ActiveXObject(serverName.typeName: String[,location: String])
serverName  提供对象的应用程序名称，typeName  要创建的对象的类型或类
通常自动化服务器会提供至少一种自动化对象。
ActiveXObject对象不具有任何内部属性和方法：它允许访问自动化对象的属性和方法

*******

