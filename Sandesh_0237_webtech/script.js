// Question 1
function cellValidator(){
		document.write("Sample Cell no : +97798********");
		var cellNum = prompt("Enter cell phone number to check:");
		var validate = /^(\+97798)([0-9]{8})$/; 		// RE to check the number that starts with +97798 and having 8 digits after that.
		document.write("<br>The no you entered is  <b>"+cellNum+"</b>");
		if(cellNum.match(validate)){
			document.write("<br><br> The phone number you entered is valid");
		}
		else{
			document.write("<br><br> The phone number you entered is invalid");
		}
	}
	
// Question 2
function domainChecker(){
		document.write("<h1>Domain Name Checker</h1>");
		var domainName = prompt("Enter domain name to check:");
		var domainCheck = /((w{3}).)?([a-z0-9\-])+((.com)|(.net)|(.edu))$/; 		// RE to checks domain name.
		document.write("<br>The domain name you entered is <b>"+domainName+"</b>");
		if(domainCheck.test(domainName)){
			document.write("<br><br>The domain name you entered is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>The domain name you entered is<b>INVALID.</b>");
		}
	}
	
// Question 3	
function stringChecker(){
		document.write("THE STRING must have A-Z, a-z, - or _:<br>");
		var stringName = prompt("Please Enter any string to check containing A-Z, a-z, -, _:");
		var stringCheck = /((a-zA-Z)|_|-)/;  // Regular Expression to check whether the string contains alpha dash and underscore in it. 
		document.write("<br>The String you entered is "+stringName);
		if(stringCheck.test(stringName)){
			document.write("<br><br>The String you entered is VALID.");
		}
		else{
			document.write("<br><br>The string you entered is INVALID.");
		}
	}
	
// Question 4	
function dateChecker(){
		document.write("Date Checker");
		var dateEntered = prompt("Enter date to check:");
		var dateCheck = /^(1[0-2]|[1-9])\/([1-9]|[1-2][0-9]|3[0-2])\/([0-9]{4})$/;	  // RE to checks date with patterns mm/dd/yyyy, m/dd/yyyy, mm/d/yyyy, m/d/yyyy.
		document.write("<br>You entered <b>"+dateEntered+"</b>");
		if(dateCheck.test(dateEntered)){
			document.write("<br><br>The date you entered is VALID.</b>");
		}
		else{
			document.write("<br><br>The date you entered is INVALID.</b>");
		}
	}
	
// Question 5	
function timeChecker(){
		document.write("<h1> Time Checker </h1>");
		var timeEntered = prompt("Enter time to check:");
		var timeCheck = /^(2[0-3]|1[0-9]|[0-9]):([0-9]|[1-5][0-9]):([0-9]|[1-5][0-9])$/;	// RE to checks time with patterns hh:mm:ss, h:mm:ss.
		document.write("<br>The time you entered is <b>"+timeEntered+"</b>");
		if(timeCheck.test(timeEntered)){
			document.write("<br><br>Entered time is VALID.");
		}
		else{
			document.write("<br><br>Entered time is INVALID.");
		}
	}
	
// Question 6	
function hexvalueChecker(){
		document.write("Hex Color Checker");
		var hexEntered = prompt("Enter hex color value to check:");
		var hexCheck = /^#([0-9]|[a-f]|[A-F]){1,6}$/;	// RE to check hex color with first character starting with # and then consists of hex value of atleast 1 to 6 characters.
		document.write("<br>You entered <b>"+hexEntered+"</b>");
		if(hexCheck.test(hexEntered)){
			document.write("<br><br>Entered hex color value is VALID.");
		}
		else{
			document.write("<br><br>Entered hex color value is INVALID.");
		}
	}