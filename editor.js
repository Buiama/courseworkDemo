var editor1 = ace.edit("pretext");
e(editor1,0);

editor2 = ace.edit("code"); //редактор коду
e(editor2,1);

editor3=ace.edit("aftertext");
e(editor3,0)


editor11 = ace.edit("pretext1");
e(editor11,0);

editor21 = ace.edit("code1"); //редактор коду
e(editor21,1);

editor31=ace.edit("aftertext1");
e(editor31,0)

function e(editor,flag){
	editor.setTheme("ace/theme/textmate");//twilight
	editor.getSession().setMode("ace/mode/c_cpp");
	editor.setShowPrintMargin(false);
	editor.setOptions({
	  maxLines: Infinity,
	  fontSize:"12pt",
	});
	editor.$blockScrolling=Infinity;
	if(!flag) {
		editor.setReadOnly(true);
	}
}