window.onload = function () {



// Here we made "Scroll back to top button"


	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {
		scrollFunction();
	}


	function scrollFunction () {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("ScrollToTopButton").style.display = "block";
		} else {
			document.getElementById("ScrollToTopButton").style.display = "none";
		}
	}



	// When the user clicks on the button, scroll to the top of the document
	document.getElementById("ScrollToTopButton").onclick = function () {

			let scrolled;
			let timer;

			document.getElementById("ScrollToTopButton").onclick = function () {
				scrolled = window.pageYOffset; //display in console how much you scrolled down
		      scrollToTop();
			}


			function scrollToTop() {
				if (scrolled > 0){
					window.scrollTo(0, scrolled);      // Method "scrollTo" set automatic scroll webpage untill set coordinates 
					scrolled = scrolled - 450;      //100 - speed of scroll, you can change
					timer = setTimeout(scrollToTop, 100);
				}else{
					clearTimeout(timer);
					window.scrollTo(0,0);
				}
			}
		}



		document.getElementById("BlogButton").onclick = function () {
			// let scrolled = window.pageYOffset;
			// console.log(scrolled);
			window.scrollTo(0,5000);

		}















    }
