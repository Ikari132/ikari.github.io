var Note = function (containerId,url) {
	var songArr;
	var cont = document.getElementById(containerId);
	this.songNameCont = document.getElementById("name");
	var that = this;
	var notesGlossary = {
	"key":"&#38;",
	"|":"&#39;",
	"|;":"&#33;",
	"||":"&#34;",
	"|:":"&#40;",
	":|":"&#41;",
	"||;":"&#46;",
	"4/4":"&#52;",
	" ":"=",
	"C/8":"C",
	"C/4":"c",
	"A":"&#119;",
	"A/2":"&#103;",
	"A/4":"&#87;",
	"A/8":"&#71;",
	"A/16":"&#199;",
	"B":"&#120;",
	"B/2":"&#104;",
	"B/4":"&#95;",
	"B/8":"&#72;",
	"B/16":"&#200;",
	"C":"&#114;",
	"C/2":"&#98;",
	"C/4":"&#82;",
	"C/8":"&#66;",
	"C/16":"&#194;",
	"D":"&#115;",
	"D/2":"&#99;",
	"D/4":"&#83;",
	"D/8":"&#67;",
	"D/16":"&#195;",
	"E":"&#116;",
	"E/2":"&#100;",
	"E/4":"&#84;",
	"E/8":"&#68;",
	"E/16":"&#196;",
	"F":"&#117;",
	"F/2":"&#101;",
	"F/4":"&#85;",
	"F/8":"&#69;",
	"F/16":"&#197;",
	"G":"&#118;",
	"G/2":"&#102;",
	"G/4":"&#86;",
	"G/8":"&#70;",
	"G/16":"&#198;",
	"c":"&#121;",
	"c/2":"&#105;",
	"c/4":"&#89;",
	"c/8":"&#73;",
	"c/16":"&#201;",
	"d":"&#122;",
	"d/2":"&#106;",
	"d/4":"&#90;",
	"d/8":"&#74;",
	"d/16":"&#202;",
	"e":"&#123;",
	"e/2":"&#107;",
	"e/4":"&#91;",
	"e/8":"&#75;",
	"e/16":"&#203;",
	"f":"&#124;",
	"f/2":"&#108;",
	"f/4":"&#92;",
	"f/8":"&#76;",
	"f/16":"&#204;",
	"g":"&#125;",
	"g/2":"&#109;",
	"g/4":"&#93;",
	"g/8":"&#77;",
	"g/16":"&#205;",
	"a":"&#126;",
	"a/2":"&#110;",
	"a/4":"&#94;",
	"a/8":"&#78;",
	"a/16":"&#206;",
	"b":"&#127;",
	"b/2":"&#111;",
	"b/4":"&#95;",
	"b/8":"&#79;",
	"b/16":"&#207;",
	};
	
	function getJSON(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
		  var status = xhr.status;
		  if (status == 200) {
			callback(null, xhr.response);
		  } else {
			callback(status);
		  }
		};
		xhr.send();
	};

	this.drawNotes = function(){
		getJSON(url, function(err, data) {
			if (err != null) {
				alert('Something went wrong: ' + err);
			} else {
				songArr = data;
				compareWithGlossary();
			}
		});
	};

	function compareWithGlossary(){
		var row = songArr.song.split(' ');

		row.forEach(function(item){
			var note = notesGlossary[item];
			note = addGaps(note);
			encodedNote = decodeHtml(note);
			insertNotes(encodedNote,row.length);
		});

	};

	function addGaps(note){
		var symbolsMap = {
		"&#38;":"key",
		"&#39;":"|",
		"&#33;":"|;",
		"&#34;":"||",
		"&#40;":"|:",
		"&#41;":":|",
		"&#46;":"||;"
		};

		if(note === undefined){
			return "="
		}
		if(symbolsMap[note]){
			return "="+note;
		}else{
			return "="+note+"=";
		}
	};
//convert entity number to letter
	function decodeHtml(html){
		var txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value;
	};

	var count = (function () {
		var counter = 0;
		return function () {return counter += 1;}
	})();

	var row = document.createElement("div");
	row.className = 'row';	

	function insertNotes (note,notesLength){
		var noteWrap = document.createElement("span"); 
		noteWrap.className = "note";                
		var textnode = document.createTextNode( note );         
		noteWrap.appendChild(textnode); 

		row.appendChild(noteWrap);
		var counter = count();

		if(counter%20 == 0 && counter != 0){
			cont.appendChild(row);
			row = document.createElement("div");
			row.className = "row";
		}else if(notesLength == counter){
			console.log("ready");
			cont.appendChild(row);
			row = document.createElement("div");
			row.className = "row";
			that.songNameCont.innerHTML = songArr.name;
			setClickHandler();
		}
	};

	function setClickHandler(){
		var notes = document.getElementsByClassName('note');
		for(var i = 0; i < notes.length; i++){
			notes[i].onclick = function(){
				console.log('click');
				this.innerHTML = '===';
			};
		}
	}

};

var note = new Note("cont","song.json");
note.drawNotes();
