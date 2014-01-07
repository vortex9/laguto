/**
 * @author Vitaliy
 */


function hidden_info(hiddenID) {
	var eng = document.getElementById("footer").style.visibility="hidden";
var admin = 0;
var gamer = 0;
var apple = 0;
	/*document.getElementsByClassName("fa-cogs").style.visibility="hidden";
	document.getElementsByClassName("fa-crosshairs").style.visibility="hidden";
	document.getElementsByClassName("fa-apple").style.visibility="hidden";*/
	switch (hiddenID) {
	case admin: { document.getElementById("footer").style.visibility="hidden";
	break;}
	case eng: { document.getElementById("bg_block").style.visibility="hidden";
	break;}
	case gamer: { document.getElementById("bg_block_left").style.visibility="hidden";
	break;}
	case apple: { document.getElementById("bg_block_right").style.visibility="hidden";
	break;}
	}
		}