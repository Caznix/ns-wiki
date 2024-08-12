"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[4896],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=r,g=u["".concat(i,".").concat(y)]||u[y]||d[y]||s;return a?t.createElement(g,l(l({ref:n},p),{},{components:a})):t.createElement(g,l({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},6840:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var t=a(8168),r=(a(6540),a(5680));const s={},l="Classes",o={unversionedId:"source/squirrel/class",id:"source/squirrel/class",isDocsHomePage:!1,title:"Classes",description:"Note",source:"@site/docs/source/squirrel/class.md",sourceDirName:"source/squirrel",slug:"/source/squirrel/class",permalink:"/ns-wiki/docs/source/squirrel/class",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/squirrel/class.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Threads, Signals and Flags",permalink:"/ns-wiki/docs/source/squirrel/async"},next:{title:"C++ Interface",permalink:"/ns-wiki/docs/source/squirrel/cpp_api/index"}},i=[{value:"Declaring Classes",id:"declaring-classes",children:[]},{value:"Declaring Functions of Classes",id:"declaring-functions-of-classes",children:[]},{value:"Inserting Properties Into Classes",id:"inserting-properties-into-classes",children:[]},{value:"Instantiating Objects",id:"instantiating-objects",children:[]},{value:"Cloning Instances",id:"cloning-instances",children:[]},{value:"Emulating Namespaces",id:"namespaces",children:[]}],c={toc:i},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"classes"},"Classes"),(0,r.yg)("p",null,":::: note\n::: title\nNote\n:::"),(0,r.yg)("p",null,"The version Respawn is using differs in some places from classes that\nare in use in Squirrel 3.x"),(0,r.yg)("p",null,"This is by no means complete. Please add anything you know.\n::::"),(0,r.yg)("h2",{id:"declaring-classes"},"Declaring Classes"),(0,r.yg)("p",null,"To declare a class, first add the ",(0,r.yg)("inlineCode",{parentName:"p"},"untyped")," keyword and the class as a\nvariable at file level."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"untyped\nvar ExampleClass\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"untyped")," declaration is required because instances have an unknown\ntype and it\\'s not possible to use classes as types."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"var [classname]")," represents the class. After declaring the class inside\nof a function you can use it in the script. You can use any type that\ncan hold vars to store classes. Refer to ",(0,r.yg)("a",{parentName:"p",href:"#namespaces"},"Namespaces")," for\nmore info."),(0,r.yg)("p",null,"If needed, add the global keyword for the variable to make the class\nusable everywhere in the vm."),(0,r.yg)("p",null,"It\\'s not possible to declare classes on local variables. It\\'s required\nto declare the class inside of a function."),(0,r.yg)("p",null,"Most classes use a constructor. A constructor is a function of the\ninstance that gets executed on object creation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'void function initClient() {\n    class ExampleClass {\n        constructor(){print("Instance of ExampleClass created");}\n    }\n}\n')),(0,r.yg)("p",null,"You can require parameters in the constructor. Keep in mind that you\nhave to pass those when creating an object."),(0,r.yg)("p",null,"Function parameters are passed as type ",(0,r.yg)("inlineCode",{parentName:"p"},"var"),", but the type keyword is\nnot required. ",(0,r.yg)("inlineCode",{parentName:"p"},"constructor( parameter ){}; func( parameter ){};")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"constructor( var parameter ){}; func( var parameter ){};")," are both\ncorrect."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'class ExampleClass {\n        propertyString = null // Actual type is var\n        propertyInt = null // Actual type is var\n        constructor( var pString, var pInt ) {\n            this.propertyString = expect string(pString);\n            this.propertyInt = expect int(pInt);\n        }\n}\n\n// See section "Declaring Objects" for more information on object creation\nvar obj = ExampleClass( "foo", 1 );\nprintt(obj.propertyString, obj.propertyString ) // foo, 1\nvar lObj = ExampleClass(); tObj = ExampleClass( "" , 0 , 0); // Both throw an error compile time because parameters don\'t match with the constructor\n')),(0,r.yg)("p",null,"Usually objects have properties. To define them, just add their\nidentifier into the class without type declaration. The properties will\nbe of type ",(0,r.yg)("inlineCode",{parentName:"p"},"var"),". However, you are required to set a default value of a\nproperty. This may be ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("p",null,"Every object has a reference to itself called ",(0,r.yg)("inlineCode",{parentName:"p"},"this"),". You can change\nparameters of an object by reference."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"void function initClient() {\n    class ExampleClass {\n        property = null\n        constructor( var parameter ) {\n            this.property = expect int(parameter);\n        }\n    }\n}\n")),(0,r.yg)("p",null,"You can\\'t use the class name as a type. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"var")," instead. You can\\'t\n",(0,r.yg)("inlineCode",{parentName:"p"},"expect")," them either."),(0,r.yg)("h2",{id:"declaring-functions-of-classes"},"Declaring Functions of Classes"),(0,r.yg)("p",null,"Functions of a class have to return a value of type ",(0,r.yg)("inlineCode",{parentName:"p"},"var"),". This may be\n",(0,r.yg)("inlineCode",{parentName:"p"},"null"),". Define functions like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"global var ExampleClass;\nvoid function initClassF(){\n    class ExampleClass {\n        variable = \"default value\"\n\n        // Set field 'variable' of this instance to passed parameter\n        function setV( pV ){\n            this.variable = pV\n        }\n\n        // Return field 'variable' of this instance\n        function getV(){\n            return this.variable; // return value can be of any type\n        }\n    }\n    var inst = ExampleClass();\n    print(inst.getV()); // -> default value\n    inst.setV(\"new value\");\n    print(inst.getV()); // -> new value\n}\n")),(0,r.yg)("h2",{id:"inserting-properties-into-classes"},"Inserting Properties Into Classes"),(0,r.yg)("p",null,"It\\'s possible to insert more properties into a class at runtime. To\nachieve this, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"<-")," operator."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'// Using ``ExampleClass`` and ``exampleObject`` from example above\nExampleClass.newProperty <- "New property in class"\n// The value of the new index may be of any type.\nExampleClass.newFunc <- function(){return "Function return value";}\n')),(0,r.yg)("p",null,":::: note\n::: title\nNote\n:::"),(0,r.yg)("p",null,"It is not possible to insert new fields into an instance or a class\n",(0,r.yg)("em",{parentName:"p"},"after instantiation")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'var ExampleErrorClass;\n\nfunc(){\n    class ExampleErrorClass {};\n    var eInst = ExampleErrorClass()\n    eInst.e <- "Instance error value"; // Asserts error: class instances do not support the new slot operator\n    ExampleErrorClass.e <- "Class error value"; // Fails because an instance of class ExampleErrorClass has already been created. Asserts error: trying to modify a class that has already been instantiated\n}\n')),(0,r.yg)("p",null,"::::"),(0,r.yg)("p",null,"Inserting functions is also possible using the ",(0,r.yg)("inlineCode",{parentName:"p"},"::")," operator"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"function ExampleClass::AddOne( var param /* parameters have to be var */ ){ return expect int( param ) + 1 }\nvar e = ExampleClass()\nprint( expect int( e.AddOne( 1 ) ) ) // prints 2\n")),(0,r.yg)("p",null,"This allows mods to extend functionality of classes declared in the base\ngame and other mods that have already been loaded."),(0,r.yg)("p",null,"For example, extending functionality of the CPlayer class might look\nlike this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'global function InitCPlayerInsert\n\nvoid function InitCPlayerInsert()\n{\n        CPlayer.afkCount <- 0 // Insert new property into the CPlayer class\n        CPlayer.maxAFKCount <- 3\n        function CPlayer::AFK(){ // Kick a player when they are afk multiple times in a match\n                if ( this.afkCount >= this.maxAFKCount )\n                        ClientCommand( this, "disconnect You have been AFK too often in a match")\n                else\n                {\n                        this.afkCount++\n                        SendHudMessage( this, format( "You are AFK!\\nYou will get kicked after %i more violations", this.maxAFKCount - this.afkCount ), -1, 0.4, 255, 255, 255, 0, 0.5, 5, 0.9 )\n                }\n        }\n\n        // To trigger the method, do GetPlayerArray()[0].AFK()\n}\n')),(0,r.yg)("p",null,"This will allow scripts to run the ",(0,r.yg)("inlineCode",{parentName:"p"},"AFK")," method on CPlayer entities,\nwhich will kick a player after 3"),(0,r.yg)("p",null,"Make sure to load this script ",(0,r.yg)("strong",{parentName:"p"},"after")," the class has been declared and\n",(0,r.yg)("strong",{parentName:"p"},"before")," it\\'s instantiated!"),(0,r.yg)("p",null,"Note that any properties added to classes don\\'t apply to other classes\nthat are inherited from a modified class."),(0,r.yg)("h2",{id:"instantiating-objects"},"Instantiating Objects"),(0,r.yg)("p",null,"To create an instance, do:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"class ExampleClass {\n    property = null\n    constructor( var parameter ) {\n        this.property = expect int(parameter);\n    }\n}\n\nvar exampleObject = ExampleClass(1);\nint n = exampleObject.property // n = 1\nexampleObject.property++;\nn = exampleObject.property // n = 2\n")),(0,r.yg)("p",null,"It\\'s also possible to create an instance without calling the\nconstructor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"// Using 'ExampleClass' from previous examples\nvar e = ExampleClass.instance()\ne.constructor(1) // Constructor is a normal function so you can call it manually.\n")),(0,r.yg)("p",null,"Like the example above shows you can manipulate properties of a class\ndirectly. There is no way to make a private property."),(0,r.yg)("p",null,"Methods from a class can be accessed without an instance. Note that the\nclass itself doesn\\'t have a reference to itself, meaning that the\n",(0,r.yg)("inlineCode",{parentName:"p"},"this")," keyword refers to the root table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"var class = ExampleClass\nvar instance = class.constructor()\n")),(0,r.yg)("h2",{id:"cloning-instances"},"Cloning Instances"),(0,r.yg)("p",null,"Unlike other types, passing an object does not pass a copy of the\nobject, but a reference to itself. This means that any modifications\ninside of a function are applied to the original object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'void function initClass(){\n    class Container {\n        content = null\n        constructor ( var pString ) {\n            this.content = expect string(pString);\n        }\n    }\n    var con = Container("original string")\n    manipulateContainer( con )\n    print(con.content) // -> manipulated string\n}\n\nvoid function manipulateContainer( var con ){\n    con.content = "manipulated string";\n}\n')),(0,r.yg)("p",null,"You can avoid this by using cloned objects. Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"clone")," keyword to\ncreate a copy of an object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'// Assumes the \'Container\' class from the previous example has already been declared\nvoid function initClass(){\n    var originalObj = Container("original string")\n    var clonedObj = clone originalObj\n    manipulateContainer( clonedObj )\n    printt(orignalObj.content, clonedObj.content) // -> original string, manipulated string\n}\n\nvoid function manipulateContainer( var con ){\n    con.content = "manipulated string";\n}\n')),(0,r.yg)("h2",{id:"namespaces"},"Emulating Namespaces"),(0,r.yg)("p",null,"Instead of declaring classes as a global var, you can use other types\nsuch as tables to hold multiple class objects that emulate the behaviour\nof namespaces to a certain extend."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"global table<string, var> fakeNamespace = {\n        class1 = null,\n        class2 = null\n}\n")),(0,r.yg)("p",null,"This allows you to group classes together in a single global variable."),(0,r.yg)("p",null,"You can use the classes inside of the table like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'// Create a class object in field\nclass fakeNamespace.class1 { constructor(){ print("constructing instance of class1") } }\nclass fakeNamespace.class2 { constructor(){ print("constructing instance of class2") } }\n\n// Access class object in field\nvar c1 = fakeNamespace.class1()\nvar c2 = fakeNamespace.class2()\n\n// Insert functions into class object in field\nfakeNamespace.class1.testfunc <- var function(){ print( "inserted function in class1" ) }\n')),(0,r.yg)("p",null,"You can also declare classes in an array:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'array<var> classes // This has to be at file level\n\n// This has to be inside of a function:\nclasses.append( class { constructor(){ print( "inline constructor" ) } )\nvar instance = classes[0]()\n')),(0,r.yg)("p",null,"And in a similar fashion in structs:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'struct {\n        var class1 = null\n        var class2 = null\n} classes // This has to be at file level\n\n// This has to be inside of a function:\nclasses.class1 = class { constructor(){ print( "inline constructor" ) } )\nclasses.class2 = class { constructor(){ print( "inline constructor" ) } )\nvar c1 = classes.class1()\nvar c2 = classes.class2()\n')),(0,r.yg)("p",null,":::: warning\n::: title\nWarning\n:::"),(0,r.yg)("p",null,"Respawn\\'s fork doesn\\'t appear to support inheritance. Using the\n",(0,r.yg)("inlineCode",{parentName:"p"},"extend")," keyword won\\'t compile."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"class Child extends Parent{}\n")),(0,r.yg)("p",null,"::::"),(0,r.yg)("p",null,"Make sure you check out the squirrel documentation on\n",(0,r.yg)("a",{parentName:"p",href:"http://www.squirrel-lang.org/squirreldoc/reference/language/classes.html"},"classes"),"\nand built in ",(0,r.yg)("a",{parentName:"p",href:"http://www.squirrel-lang.org/squirreldoc/reference/language/builtin_functions.html#class-instance"},"class\ninstance"),"\nmethods for more information."))}u.isMDXComponent=!0}}]);