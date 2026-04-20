const questions = [
  { question: `1. What will this JavaScript code print?
let x = 10;
if (x > 5) { x += 2; }
console.log(x);`, options: ["10", "12", "15", "8"], correct: "12" },
  { question: "2. Which DOM method selects an element by its id 'box'?", options: ["document.querySelectorAll('#box')", "document.getElementById('box')", "document.getElementsByClassName('box')", "document.find('box')"], correct: "document.getElementById('box')" },
  { question: "3. What does event.preventDefault() do in a form submit handler?", options: ["Stops the default browser action", "Stops bubbling only", "Deletes the form", "Refreshes the page"], correct: "Stops the default browser action" },
  { question: `4. What is the output?
console.log([1, 2, 3].length);`, options: ["2", "3", "4", "1"], correct: "3" },
  { question: "5. Which HTML tag is used for the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<title>"], correct: "<h1>" },
  { question: "6. Which CSS property changes the text color?", options: ["font-color", "text-color", "color", "foreground"], correct: "color" },
  { question: "7. What does display: flex do?", options: ["Turns elements into flex items inside a flex container", "Hides the element", "Makes text bold", "Creates a table"], correct: "Turns elements into flex items inside a flex container" },
  { question: `8. What is the output?
console.log(typeof []);`, options: ["array", "object", "undefined", "string"], correct: "object" },
  { question: "9. Which JavaScript method adds an item to the end of an array?", options: ["pop()", "push()", "shift()", "slice()"], correct: "push()" },
  { question: "10. What does querySelector('.card') return?", options: ["All elements with class card", "The first element matching .card", "Only ids", "A string"], correct: "The first element matching .card" },
  { question: "11. What is the purpose of the alt attribute on an image?", options: ["Set image size", "Improve accessibility with alternative text", "Add animation", "Create a border"], correct: "Improve accessibility with alternative text" },
  { question: `12. What will this code print?
console.log(2 + '3');`, options: ["5", "23", "Error", "nan"], correct: "23" },
  { question: "13. Which CSS property controls space inside an element?", options: ["margin", "padding", "border", "opacity"], correct: "padding" },
  { question: `14. What is the output?
console.log(true && false);`, options: ["true", "false", "1", "0"], correct: "false" },
  { question: "15. Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], correct: "<a>" },
  { question: "16. What does classList.add('active') do?", options: ["Removes the class active", "Adds the class active", "Changes the id", "Deletes the element"], correct: "Adds the class active" },
  { question: "17. What does useState() return in React?", options: ["A single value", "A state value and setter function", "A DOM node", "A CSS rule"], correct: "A state value and setter function" },
  { question: `18. What is the output?
console.log('Hello'.toUpperCase());`, options: ["hello", "HELLO", "Hello", "Error"], correct: "HELLO" },
  { question: "19. Which HTML attribute is used to provide placeholder text in an input?", options: ["hint", "placeholder", "label", "value"], correct: "placeholder" },
  { question: "20. What does box-sizing: border-box do?", options: ["Includes padding and border inside the set width/height", "Makes the box invisible", "Removes borders", "Adds shadows"], correct: "Includes padding and border inside the set width/height" },
  { question: "21. What does useRef() commonly help with?", options: ["Tracking a DOM element reference", "Creating SQL queries", "Hashing passwords", "Connecting APIs"], correct: "Tracking a DOM element reference" },
  { question: "22. Which JavaScript method converts JSON text into an object?", options: ["JSON.stringify()", "JSON.parse()", "Object.json()", "parseJSON()"], correct: "JSON.parse()" },
  { question: `23. What is the output?
console.log(5 % 2);`, options: ["2", "1", "0", "3"], correct: "1" },
  { question: "24. Which CSS property changes spacing outside an element?", options: ["padding", "margin", "gap", "font-size"], correct: "margin" },
  { question: "25. What does the 'checked' attribute do on a checkbox?", options: ["Makes it selected by default", "Makes it hidden", "Makes it readonly", "Changes its color"], correct: "Makes it selected by default" },
  { question: `26. What is the output?
const [a, b] = [10, 20];
console.log(b);`, options: ["10", "20", "undefined", "Error"], correct: "20" },
  { question: "27. Which React prop is used to pass data from parent to child?", options: ["state", "props", "ref", "hook"], correct: "props" },
  { question: "28. What does the CSS selector '.box' target?", options: ["An element with id box", "An element with class box", "All boxes on page", "A box tag"], correct: "An element with class box" },
  { question: `29. What is the output?
console.log(10 / 2);`, options: ["2", "5", "10", "20"], correct: "5" },
  { question: "30. What does the 'required' attribute do in a form input?", options: ["Makes the field mandatory", "Makes it hidden", "Changes its value", "Prevents focus"], correct: "Makes the field mandatory" },
  { question: "31. What is the purpose of useCallback()?", options: ["Memoizes a function between renders", "Stores DOM nodes", "Creates CSS classes", "Loads images"], correct: "Memoizes a function between renders" },
  { question: "32. Which HTML tag is used for a line break?", options: ["<br>", "<lb>", "<break>", "<newline>"], correct: "<br>" },
  { question: `33. What is the output?
console.log('5' - 2);`, options: ["3", "52", "Error", "nan"], correct: "3" },
  { question: "34. What does justify-content do in flexbox?", options: ["Aligns items on the main axis", "Changes font size", "Adds margins", "Creates a grid"], correct: "Aligns items on the main axis" },
  { question: "35. Which JavaScript keyword declares a block-scoped variable?", options: ["var", "let", "define", "static"], correct: "let" },
  { question: "36. What does an input of type='password' do?", options: ["Shows characters as typed", "Hides typed characters", "Accepts only numbers", "Makes the input readonly"], correct: "Hides typed characters" },
  { question: `37. What is the output?
console.log(Boolean(''));`, options: ["true", "false", "undefined", "Error"], correct: "false" },
  { question: "38. What is the purpose of the key prop in React lists?", options: ["Styling each item", "Helping React identify items efficiently", "Connecting to a database", "Creating hooks"], correct: "Helping React identify items efficiently" },
  { question: "39. Which CSS property rounds the corners of an element?", options: ["border-radius", "corner-style", "radius-box", "curve-border"], correct: "border-radius" },
  { question: "40. What does document.createElement('div') do?", options: ["Finds an existing div", "Creates a new div element", "Deletes a div", "Styles a div"], correct: "Creates a new div element" },
  { question: `41. What is the output?
console.log([1,2,3].includes(2));`, options: ["false", "true", "undefined", "Error"], correct: "true" },
  { question: "42. Which HTML tag is used for a paragraph?", options: ["<p>", "<para>", "<text>", "<section>"], correct: "<p>" },
  { question: "43. What does the CSS property 'position: relative' allow you to do?", options: ["Move element relative to its normal position", "Hide the element", "Make it fixed on screen", "Create a grid"], correct: "Move element relative to its normal position" },
  { question: `44. What is the output?
console.log('abc'.length);`, options: ["2", "3", "4", "1"], correct: "3" },
  { question: "45. Which React hook is best for storing mutable values without rerendering?", options: ["useState()", "useRef()", "useEffect()", "useMemo()"], correct: "useRef()" },
  { question: "46. What does the 'disabled' attribute do on a button?", options: ["Makes it clickable", "Prevents interaction", "Adds a border", "Submits the form automatically"], correct: "Prevents interaction" },
  { question: `47. What is the output?
let x = 1; x++; console.log(x);`, options: ["1", "2", "3", "0"], correct: "2" },
  { question: "48. Which CSS property controls font thickness?", options: ["font-weight", "font-style", "font-variant", "font-size"], correct: "font-weight" },
  { question: "49. What does 'overflow: hidden' do?", options: ["Shows content outside the box", "Hides overflowing content", "Adds a scrollbar always", "Changes color"], correct: "Hides overflowing content" },
  { question: `50. What is the output?
console.log(typeof function(){});`, options: ["object", "function", "undefined", "string"], correct: "function" },
  { question: "51. Which HTML tag is used to create an ordered list?", options: ["<ul>", "<ol>", "<list>", "<li>"], correct: "<ol>" },
  { question: "52. What does event.target refer to?", options: ["The element that triggered the event", "The whole page", "The first button only", "The browser window"], correct: "The element that triggered the event" },
  { question: "53. Which CSS unit is relative to the root font size?", options: ["px", "rem", "vh", "%"], correct: "rem" },
  { question: `54. What is the output?
console.log([].length);`, options: ["1", "0", "undefined", "Error"], correct: "0" },
  { question: "55. What does useEffect() commonly handle?", options: ["Side effects like data fetches or subscriptions", "CSS animations only", "Password hashing", "SQL queries"], correct: "Side effects like data fetches or subscriptions" },
  { question: "56. Which HTML input type is best for email addresses?", options: ["text", "email", "password", "tel"], correct: "email" },
  { question: `57. What is the output?
console.log('10' == 10);`, options: ["true", "false", "Error", "undefined"], correct: "true" },
  { question: "58. What does the CSS property 'display: none' do?", options: ["Removes the element from layout display", "Makes it transparent", "Moves it left", "Adds padding"], correct: "Removes the element from layout display" },
  { question: "59. Which React syntax renders a component named Header?", options: ["<Header />", "Header() only", "{Header}", "render Header"], correct: "<Header />" },
  { question: "60. What does the 'maxlength' attribute control?", options: ["Maximum number of characters in input", "Maximum width of the page", "Maximum number of buttons", "Maximum height of form"], correct: "Maximum number of characters in input" },
  { question: `61. What is the output?
console.log(3 * '2');`, options: ["32", "6", "Error", "nan"], correct: "6" },
  { question: "62. What does the CSS property 'text-align: center' do?", options: ["Centers text horizontally", "Makes text bold", "Changes text color", "Moves text to bottom"], correct: "Centers text horizontally" },
  { question: "63. Which array method returns a new array after changing each item?", options: ["filter()", "map()", "push()", "pop()"], correct: "map()" },
  { question: "64. What does the 'readonly' attribute do?", options: ["Prevents editing of the field", "Hides the field", "Makes it required", "Submits automatically"], correct: "Prevents editing of the field" },
  { question: `65. What is the output?
console.log(2 ** 3);`, options: ["6", "8", "9", "5"], correct: "8" },
  { question: "66. Which CSS property adds space between grid items?", options: ["gap", "margin", "padding", "space"], correct: "gap" },
  { question: "67. What does a controlled input in React use?", options: ["State", "A database", "A cookie", "A route param"], correct: "State" },
  { question: "68. Which HTML element is used for navigation sections?", options: ["<nav>", "<section>", "<footer>", "<article>"], correct: "<nav>" },
  { question: `69. What is the output?
console.log('hello'.slice(1, 4));`, options: ["hel", "ell", "llo", "hello"], correct: "ell" },
  { question: "70. What does CSS flex-wrap: wrap do?", options: ["Forces items onto new lines if needed", "Hides extra items", "Makes items clickable", "Adds borders"], correct: "Forces items onto new lines if needed" },
  { question: "71. Which React hook memoizes a function reference?", options: ["useState()", "useCallback()", "useRef()", "useEffect()"], correct: "useCallback()" },
  { question: `72. What is the output?
console.log(Boolean(' '));`, options: ["false", "true", "undefined", "Error"], correct: "true" },
  { question: "73. Which HTML tag is used to make a button?", options: ["<button>", "<click>", "<btn>", "<input-button>"], correct: "<button>" },
  { question: "74. What does the CSS property 'z-index' affect?", options: ["Stacking order of positioned elements", "Text size", "Image quality", "Line spacing"], correct: "Stacking order of positioned elements" },
  { question: `75. What is the output?
console.log('5' + 5);`, options: ["10", "55", "Error", "nan"], correct: "55" },
  { question: "76. What does a form 'action' attribute specify?", options: ["Where the form data is sent", "The color of the form", "The form width", "The type of input"], correct: "Where the form data is sent" },
  { question: "77. Which React prop is commonly used to pass text into a button component?", options: ["children", "state", "ref", "key"], correct: "children" },
  { question: "78. What does cursor: pointer indicate?", options: ["Text cannot be selected", "Shows a hand cursor, usually for clickable items", "Hides the cursor", "Adds an outline"], correct: "Shows a hand cursor, usually for clickable items" },
  { question: `79. What is the output?
console.log(['a','b'].join('-'));`, options: ["ab", "a-b", "a,b", "Error"], correct: "a-b" },
  { question: "80. Which HTML tag is used to define a list item?", options: ["<li>", "<ul>", "<ol>", "<item>"], correct: "<li>" },
  { question: "81. What does margin:auto often help with on a block element?", options: ["Centering horizontally when width is set", "Making text bold", "Adding shadow", "Changing line height"], correct: "Centering horizontally when width is set" },
  { question: `82. What is the output?
console.log(0 == false);`, options: ["true", "false", "Error", "undefined"], correct: "true" },
  { question: "83. What does the React fragment shorthand <>...</> do?", options: ["Wraps elements without adding extra DOM nodes", "Creates a route", "Creates a state variable", "Adds CSS classes"], correct: "Wraps elements without adding extra DOM nodes" },
  { question: "84. Which CSS property affects the size of text?", options: ["font-size", "text-weight", "font-border", "letter-size"], correct: "font-size" },
  { question: `85. What is the output?
console.log(typeof 'text');`, options: ["string", "text", "object", "undefined"], correct: "string" },
  { question: "86. Which HTML tag is used for the main content of the page?", options: ["<main>", "<body>", "<div>", "<section>"], correct: "<main>" },
  { question: "87. What does the 'value' attribute do for an input?", options: ["Sets the current input value", "Changes font color", "Makes the input required", "Adds a placeholder"], correct: "Sets the current input value" },
  { question: "88. Which React hook should be used for side effects after render?", options: ["useEffect()", "useState()", "useRef()", "useCallback()"], correct: "useEffect()" },
  { question: `89. What is the output?
console.log(10 % 3);`, options: ["1", "2", "3", "0"], correct: "1" },
  { question: "90. What does 'align-items: center' do in flexbox?", options: ["Centers items on the cross axis", "Centers text only", "Adds margins", "Creates columns"], correct: "Centers items on the cross axis" },
  { question: "91. Which HTML tag is used to embed an image?", options: ["<img>", "<image>", "<src>", "<pic>"], correct: "<img>" },
  { question: "92. What does 'required' do for an email field?", options: ["Makes it mandatory before submit", "Makes it optional", "Changes the email format", "Auto-fills the field"], correct: "Makes it mandatory before submit" },
  { question: `93. What is the output?
console.log('7' - 2);`, options: ["5", "72", "Error", "nan"], correct: "5" },
  { question: "94. What does the CSS property 'visibility: hidden' do?", options: ["Hides the element but keeps its space", "Removes the element from layout", "Makes it bold", "Changes font size"], correct: "Hides the element but keeps its space" },
  { question: "95. Which React feature is used to render a list of items efficiently?", options: ["map() with a key prop", "forEach() only", "filter() only", "useRef() only"], correct: "map() with a key prop" },
  { question: `96. What is the output?
console.log('ABC'.toLowerCase());`, options: ["abc", "ABC", "Abc", "Error"], correct: "abc" },
  { question: "97. What does the HTML 'type' attribute on input specify?", options: ["The kind of input field", "The CSS class", "The page title", "The image source"], correct: "The kind of input field" },
  { question: "98. Which CSS property is used to add rounded corners?", options: ["border-radius", "corner-radius", "round-border", "radius"], correct: "border-radius" },
  { question: "99. What does a React component usually return?", options: ["JSX", "A SQL query", "A JWT token", "A file path"], correct: "JSX" },
  { question: `100. What is the output?
console.log(['x','y','z'][0]);`, options: ["x", "y", "z", "undefined"], correct: "x" },
  { question: "101. Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<nav>"], correct: "<a>" },
  { question: "102. Which HTML element is used for the largest heading?", options: ["<h1>", "<h6>", "<heading>", "<head>"], correct: "<h1>" },
  { question: "103. What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], correct: "Hyper Text Markup Language" },
  { question: "104. Choose the correct HTML element to define important text", options: ["<strong>", "<important>", "<b>", "<i>"], correct: "<strong>" },
  { question: "105. Choose the correct HTML element to define emphasized text", options: ["<i>", "<italic>", "<em>", "<emp>"], correct: "<em>" },
  { question: "106. Which character is used to indicate an end tag?", options: ["/", "<", "*", "^"], correct: "/" },
  { question: "107. How can you make a numbered list?", options: ["<ol>", "<ul>", "<dl>", "<list>"], correct: "<ol>" },
  { question: "108. How can you make a bulleted list?", options: ["<ul>", "<ol>", "<dl>", "<list>"], correct: "<ul>" },
  { question: "109. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["alt", "title", "src", "longdesc"], correct: "alt" },
  { question: "110. Which HTML element defines the title of a document?", options: ["<title>", "<meta>", "<head>", "<header>"], correct: "<title>" },
  { question: "111. Which attribute is used to specify that an input field must be filled out?", options: ["required", "validate", "placeholder", "formvalidate"], correct: "required" },
  { question: "112. Which input type defines a slider control?", options: ["range", "slider", "controls", "search"], correct: "range" },
  { question: "113. Which HTML element is used to specify a header for a document or section?", options: ["<header>", "<section>", "<top>", "<head>"], correct: "<header>" },
  { question: "114. Which HTML element is used to display a scalar measurement within a known range?", options: ["<meter>", "<gauge>", "<measure>", "<range>"], correct: "<meter>" },
  { question: "115. In HTML, what does the <aside> element define?", options: ["Content aside from the page content", "A navigation list", "The ASCII character-set", "A sidebar"], correct: "Content aside from the page content" },
  { question: "116. Which HTML element defines navigation links?", options: ["<nav>", "<navigate>", "<navigation>", "<links>"], correct: "<nav>" },
  { question: "117. Which HTML element is used to specify a footer for a document or section?", options: ["<footer>", "<bottom>", "<section>", "<end>"], correct: "<footer>" },
  { question: "118. What is the correct HTML for adding a background color?", options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<body color='yellow'>"], correct: "<body style='background-color:yellow;'>" },
  { question: "119. Choose the correct HTML to left-align the content inside a table cell", options: ["<td style='text-align:left;'>", "<td align='left'>", "<td valign='left'>", "<td leftalign>"], correct: "<td style='text-align:left;'>" },
  { question: "120. What is the correct HTML for making a drop-down list?", options: ["<select>", "<list>", "<input type='dropdown'>", "<input type='list'>"], correct: "<select>" },
  { question: "121. What is the correct HTML for making a text area?", options: ["<textarea>", "<input type='textarea'>", "<input type='textbox'>", "<text>"], correct: "<textarea>" },
  { question: "122. Which HTML element is used to define description data?", options: ["<dd>", "<dt>", "<dl>", "<desc>"], correct: "<dd>" },
  { question: "123. What does the <canvas> element in HTML5 do?", options: ["Draw graphics", "Display database records", "Create drag and drop elements", "Manipulate data"], correct: "Draw graphics" },
  { question: "124. Which HTML attribute is used to define inline styles?", options: ["style", "class", "font", "styles"], correct: "style" },
  { question: "125. Which is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<newline>"], correct: "<br>" },
  { question: "126. What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], correct: "Cascading Style Sheets" },
  { question: "127. Where in an HTML document is the correct place to refer to an external style sheet?", options: ["In the <head> section", "In the <body> section", "At the end of the document", "Anywhere"], correct: "In the <head> section" },
  { question: "128. Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], correct: "<style>" },
  { question: "129. Which is the correct CSS syntax?", options: ["body {color: black;}", "{body;color:black;}", "{body:color=black;}", "body:color=black;"], correct: "body {color: black;}" },
  { question: "130. How do you insert a comment in a CSS file?", options: ["/* this is a comment */", "// this is a comment", "// this is a comment //", "' this is a comment"], correct: "/* this is a comment */" },
  { question: "131. Which property is used to change the background color?", options: ["background-color", "color", "bgcolor", "background"], correct: "background-color" },
  { question: "132. How do you add a background color for all <h1> elements?", options: ["h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1 {bgcolor:#FFFFFF;}"], correct: "h1 {background-color:#FFFFFF;}" },
  { question: "133. Which CSS property is used to change the text color of an element?", options: ["color", "text-color", "fgcolor", "font-color"], correct: "color" },
  { question: "134. Which CSS property controls the text size?", options: ["font-size", "text-style", "text-size", "font-style"], correct: "font-size" },
  { question: "135. What is the correct CSS syntax for making all the <p> elements bold?", options: ["p {font-weight:bold;}", "<p style='font-size:bold;'>", "p {text-size:bold;}", "p {font:bold;}"], correct: "p {font-weight:bold;}" },
  { question: "136. How do you display hyperlinks without an underline?", options: ["a {text-decoration:none;}", "a {text-decoration:no-underline;}", "a {underline:none;}", "a {decoration:no-underline;}"], correct: "a {text-decoration:none;}" },
  { question: "137. How do you make each word in a text start with a capital letter?", options: ["text-transform:capitalize;", "text-transform:uppercase;", "text-style:capitalize;", "transform:capitalize;"], correct: "text-transform:capitalize;" },
  { question: "138. Which property is used to change the font of an element?", options: ["font-family", "font-weight", "font-style", "font-type"], correct: "font-family" },
  { question: "139. How do you make the text bold?", options: ["font-weight:bold;", "style:bold;", "font:bold;", "text:bold;"], correct: "font-weight:bold;" },
  { question: "140. How do you display a border like this: top 10px, bottom 5px, left 20px, right 1px?", options: ["border-width:10px 1px 5px 20px;", "border-width:10px 20px 5px 1px;", "border-width:5px 20px 10px 1px;", "border-width:10px 5px 20px 1px;"], correct: "border-width:10px 1px 5px 20px;" },
  { question: "141. Which property is used to change the left margin of an element?", options: ["margin-left", "padding-left", "indent", "margin"], correct: "margin-left" },
  { question: "142. When using the padding property; are you allowed to use negative values?", options: ["No", "Yes", "Depends on browser", "Only in px"], correct: "No" },
  { question: "143. How do you make a list that lists its items with squares?", options: ["list-style-type: square;", "list-type: square;", "list: square;", "list-style: square;"], correct: "list-style-type: square;" },
  { question: "144. How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correct: "#demo" },
  { question: "145. How do you select elements with class name 'test'?", options: [".test", "#test", "test", "*test"], correct: ".test" },
  { question: "146. How do you select all p elements inside a div element?", options: ["div p", "div + p", "div ~ p", "div.p"], correct: "div p" },
  { question: "147. How do you group selectors?", options: ["Separate each selector with a comma", "Separate each selector with a space", "Separate each selector with a plus sign", "Separate each selector with a dot"], correct: "Separate each selector with a comma" },
  { question: "148. What is the default value of the position property?", options: ["static", "relative", "fixed", "absolute"], correct: "static" },
  { question: "149. Which CSS property specifies the stack order of an element?", options: ["z-index", "overlap", "stack", "position"], correct: "z-index" },
  { question: "150. What does display: none; do?", options: ["Hides the element and it takes up no space", "Hides the element but keeps its space", "Makes it transparent", "Deletes it from DOM"], correct: "Hides the element and it takes up no space" },
  { question: "151. Inside which HTML element do we put the JavaScript?", options: ["<script>", "<javascript>", "<js>", "<scripting>"], correct: "<script>" },
  { question: "152. Where is the correct place to insert a JavaScript?", options: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section", "The <footer> section"], correct: "Both the <head> section and the <body> section are correct" },
  { question: "153. What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "<link src='xxx.js'>"], correct: "<script src='xxx.js'>" },
  { question: "154. The external JavaScript file must contain the <script> tag.", options: ["False", "True", "Depends on browser", "Only if using ES6"], correct: "False" },
  { question: "155. How do you write 'Hello World' in an alert box?", options: ["alert('Hello World');", "msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');"], correct: "alert('Hello World');" },
  { question: "156. How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create myFunction()"], correct: "function myFunction()" },
  { question: "157. How do you call a function named 'myFunction'?", options: ["myFunction()", "call myFunction()", "call function myFunction()", "myFunction(call)"], correct: "myFunction()" },
  { question: "158. How to write an IF statement in JavaScript?", options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"], correct: "if (i == 5)" },
  { question: "159. How to write an IF statement for executing some code if 'i' is NOT equal to 5?", options: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"], correct: "if (i != 5)" },
  { question: "160. How does a WHILE loop start?", options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while (i = 0)"], correct: "while (i <= 10)" },
  { question: "161. How does a FOR loop start?", options: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5"], correct: "for (i = 0; i <= 5; i++)" },
  { question: "162. How can you add a comment in a JavaScript?", options: ["//This is a comment", "'This is a comment", "<!--This is a comment-->", "*This is a comment"], correct: "//This is a comment" },
  { question: "163. How to insert a comment that has more than one line?", options: ["/*This comment has more than one line*/", "//This comment has more than one line//", "<!--This comment has more than one line-->", "#This comment has more than one line"], correct: "/*This comment has more than one line*/" },
  { question: "164. What is the correct way to write a JavaScript array?", options: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green')", "var colors = (1:'red', 2:'green')"], correct: "var colors = ['red', 'green', 'blue']" },
  { question: "165. How do you round the number 7.25, to the nearest integer?", options: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"], correct: "Math.round(7.25)" },
  { question: "166. How do you find the number with the highest value of x and y?", options: ["Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)", "ceil(x, y)"], correct: "Math.max(x, y)" },
  { question: "167. What is the correct JavaScript syntax for opening a new window called 'w2'?", options: ["w2 = window.open('http://www.w3schools.com');", "w2 = window.new('http://www.w3schools.com');", "w2 = window.openNew('http://www.w3schools.com');", "w2 = window.load('http://www.w3schools.com');"], correct: "w2 = window.open('http://www.w3schools.com');" },
  { question: "168. JavaScript is the same as Java.", options: ["False", "True", "Yes but simplified", "Yes for web"], correct: "False" },
  { question: "169. How can you detect the client's browser name?", options: ["navigator.appName", "browser.name", "client.navName", "window.browser"], correct: "navigator.appName" },
  { question: "170. Which event occurs when the user clicks on an HTML element?", options: ["onclick", "onchange", "onmouseclick", "onmouseover"], correct: "onclick" },
  { question: "171. How do you declare a JavaScript variable?", options: ["var carName;", "v carName;", "variable carName;", "car carName;"], correct: "var carName;" },
  { question: "172. Which operator is used to assign a value to a variable?", options: ["0", "*", "X", "-"], correct: "0" },
  { question: "173. What will the following code return: Boolean(10 > 9)?", options: ["true", "false", "nan", "undefined"], correct: "true" },
  { question: "174. Is JavaScript case-sensitive?", options: ["Yes", "No", "Only in strict mode", "Only variables"], correct: "Yes" },
  { question: "175. Which keyword is used to declare a block-scoped variable?", options: ["let", "var", "set", "const (only)"], correct: "let" },
  { question: "176. What is React?", options: ["A JavaScript library for building user interfaces", "A framework for backend development", "A database management system", "A CSS preprocessor"], correct: "A JavaScript library for building user interfaces" },
  { question: "177. Who developed React?", options: ["Facebook", "Google", "Microsoft", "Twitter"], correct: "Facebook" },
  { question: "178. What is JSX?", options: ["A syntax extension for JavaScript", "A new programming language", "A database query language", "A CSS framework"], correct: "A syntax extension for JavaScript" },
  { question: "179. How do you pass data to a React component?", options: ["Props", "State", "Context", "Hooks"], correct: "Props" },
  { question: "180. What is a state in React?", options: ["An internal data store for components", "External data passed to components", "A CSS style", "A database"], correct: "An internal data store for components" },
  { question: "181. Which hook is used to manage state in functional components?", options: ["useState", "useEffect", "useContext", "useReducer"], correct: "useState" },
  { question: "182. What is the purpose of useEffect?", options: ["To perform side effects in functional components", "To manage component state", "To style components", "To handle events"], correct: "To perform side effects in functional components" },
  { question: "183. How do you conditionally render a component in React?", options: ["Using ternary operators or logical &&", "Using if-else inside JSX tags", "Using a switch statement in JSX", "You cannot conditionally render"], correct: "Using ternary operators or logical &&" },
  { question: "184. What is a key in React lists?", options: ["A unique identifier for list items", "The index of the array", "A secret password", "A component prop"], correct: "A unique identifier for list items" },
  { question: "185. Why are keys important in React?", options: ["They help React identify which items changed", "They style the list", "They define the data type", "They secure the data"], correct: "They help React identify which items changed" },
  { question: "186. What is a React component?", options: ["A reusable piece of UI", "A function that returns HTML strings", "A database model", "A CSS style block"], correct: "A reusable piece of UI" },
  { question: "187. How do you handle events in React?", options: ["onClick={myFunction}", "onclick='myFunction()'", "on-click={myFunction}", "onClick={myFunction()}"], correct: "onClick={myFunction}" },
  { question: "188. What is the virtual DOM?", options: ["A lightweight copy of the real DOM", "The actual browser DOM", "A database structure", "A backend server"], correct: "A lightweight copy of the real DOM" },
  { question: "189. Why is the virtual DOM fast?", options: ["It minimizes direct manipulation of the real DOM", "It uses hardware acceleration", "It runs on a separate thread", "It bypasses the browser entirely"], correct: "It minimizes direct manipulation of the real DOM" },
  { question: "190. What is React Router used for?", options: ["Navigating between different views/pages in a React app", "Managing state", "Fetching data from APIs", "Styling components"], correct: "Navigating between different views/pages in a React app" },
  { question: "191. How do you create a React app using the official CLI?", options: ["npx create-react-app my-app", "npm install react-app", "create-react my-app", "react new my-app"], correct: "npx create-react-app my-app" },
  { question: "192. What is the default export from a React component file?", options: ["The component function or class", "The state object", "The JSX", "The CSS module"], correct: "The component function or class" },
  { question: "193. How do you import a default export from a file named MyComponent.js?", options: ["import MyComponent from './MyComponent';", "import { MyComponent } from './MyComponent';", "import MyComponent.js;", "include MyComponent;"], correct: "import MyComponent from './MyComponent';" },
  { question: "194. What is a fragment in React?", options: ["A way to group multiple elements without adding an extra node to the DOM", "A broken component", "A piece of state", "A database chunk"], correct: "A way to group multiple elements without adding an extra node to the DOM" },
  { question: "195. How do you write a React Fragment?", options: ["<>...</> or <React.Fragment>...</React.Fragment>", "<fragment>...</fragment>", "<group>...</group>", "<wrapper>...</wrapper>"], correct: "<>...</> or <React.Fragment>...</React.Fragment>" },
  { question: "196. What is Context API used for?", options: ["Passing data deeply through the component tree without prop drilling", "Managing local component state", "Fetching data", "Styling components"], correct: "Passing data deeply through the component tree without prop drilling" },
  { question: "197. Which hook is used to consume context?", options: ["useContext", "useState", "useEffect", "useReducer"], correct: "useContext" },
  { question: "198. What is a higher-order component (HOC)?", options: ["A function that takes a component and returns a new component", "A component that renders other components", "A stateful component", "A functional component"], correct: "A function that takes a component and returns a new component" },
  { question: "199. What does the `npm start` command do in a create-react-app project?", options: ["Starts the development server", "Builds the app for production", "Installs dependencies", "Runs tests"], correct: "Starts the development server" },
  { question: "200. How do you update the state variable 'count' when using useState like `const [count, setCount] = useState(0)`?", options: ["setCount(count + 1);", "count = count + 1;", "setCount = count + 1;", "updateCount(1);"], correct: "setCount(count + 1);" }
];

// DOM Elements
const paletteGrid = document.getElementById('question-palette');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressIndicator = document.getElementById('progress-indicator');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Result Elements
const scoreEl = document.getElementById('score');
const totalQuestionsEl = document.getElementById('total-questions');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const restartBtn = document.getElementById('restart-btn');

// Game State
let currentQuestionIndex = 0;
// We store the user's selected text in userAnswers array
let userAnswers = new Array(questions.length).fill(null);

// Initialize Quiz
function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    
    quizScreen.classList.add('active');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    resultScreen.classList.remove('active');
    
    totalQuestionsEl.textContent = questions.length;
    
    renderPalette();
    loadQuestion();
}

// Render the 200 question boxes
function renderPalette() {
    paletteGrid.innerHTML = '';
    questions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'palette-btn';
        btn.textContent = index + 1;
        btn.onclick = () => {
            currentQuestionIndex = index;
            loadQuestion();
        };
        paletteGrid.appendChild(btn);
    });
}

// Load Question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const savedAnswer = userAnswers[currentQuestionIndex];
    
    // Manage Next/Prev Buttons
    if (currentQuestionIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (savedAnswer) {
        nextBtn.classList.remove('hidden');
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = 'Finish Quiz';
        } else {
            nextBtn.textContent = 'Next Question';
        }
    } else {
        nextBtn.classList.add('hidden');
    }
    
    // Update Text
    questionText.textContent = currentQuestion.question;
    progressIndicator.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    
    // Update Progress Bar
    const answeredCount = userAnswers.filter(ans => ans !== null).length;
    const progressPercent = (answeredCount / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update Palette Active State
    const paletteBtns = paletteGrid.children;
    Array.from(paletteBtns).forEach((btn, idx) => {
        btn.classList.remove('active');
        if (idx === currentQuestionIndex) {
            btn.classList.add('active');
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    // Clear Options
    optionsContainer.innerHTML = '';

    // Render Options
    currentQuestion.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        
        const prefix = String.fromCharCode(65 + index); // A, B, C, D
        const safeOptionText = optionText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        button.innerHTML = `<span><b>${prefix}.</b> ${safeOptionText}</span>`;
        
        // If an answer was already selected for this question
        if (savedAnswer) {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
            
            const isCorrect = optionText === currentQuestion.correct;
            const isSelected = optionText === savedAnswer;
            
            if (isSelected) {
                if (isCorrect) button.classList.add('correct');
                else button.classList.add('wrong');
            }
            if (isCorrect && savedAnswer !== currentQuestion.correct) {
                // highlight the correct one if they selected the wrong one
                button.classList.add('correct');
            }
        } else {
            button.onclick = () => selectOption(button, optionText);
        }
        
        optionsContainer.appendChild(button);
    });
}

// Handle Option Selection
function selectOption(selectedBtn, selectedText) {
    // Save answer
    userAnswers[currentQuestionIndex] = selectedText;
    const currentQuestion = questions[currentQuestionIndex];
    
    const allOptions = optionsContainer.children;
    const isCorrect = selectedText === currentQuestion.correct;
    const paletteBtn = paletteGrid.children[currentQuestionIndex];
    
    // Check answer and style buttons
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        paletteBtn.classList.add('answered-correct');
    } else {
        selectedBtn.classList.add('wrong');
        paletteBtn.classList.add('answered-wrong');
        
        // Find and highlight correct answer
        Array.from(allOptions).forEach((btn, index) => {
            const optionText = currentQuestion.options[index];
            if (optionText === currentQuestion.correct) {
                btn.classList.add('correct');
            }
        });
    }

    // Disable all buttons
    Array.from(allOptions).forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });
    
    // Update Progress Bar immediately when answered
    const answeredCount = userAnswers.filter(ans => ans !== null).length;
    const progressPercent = (answeredCount / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Show Next Button
    nextBtn.classList.remove('hidden');
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    } else {
        nextBtn.textContent = 'Next Question';
    }
}

// Handle Previous Button Click
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Handle Next Button Click
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
});

// Show Results
function showResults() {
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');
    
    // Calculate final score
    let score = 0;
    userAnswers.forEach((ans, index) => {
        if (ans === questions[index].correct) {
            score++;
        }
    });
    
    scoreEl.textContent = score;
    correctCountEl.textContent = score;
    incorrectCountEl.textContent = questions.length - score;
}

// Handle Restart
restartBtn.addEventListener('click', initQuiz);

// Start on load
window.onload = initQuiz;
