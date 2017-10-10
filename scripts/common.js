<script type="text/javascript">
    function addNode()
    {
		x = Math.random() * 1 - 0 ;
		//y = Math.random() * 6 - 3;
		y=1.5
		z = Math.random() * 1 - 0;
		s0 = Math.random() + 0.5;
		s1 = Math.random() + 0.5;
		s2 = Math.random() + 0.5;
        var t = document.createElement('Transform');
        t.setAttribute("translation", x + " " + y + " " + z );
        t.setAttribute("scale", s0 + " " + s1 + " " + s2 );
		var s = document.createElement('Shape');
		// Appearance Node
		var app = document.createElement('Appearance');
		// Material Node
		var mat = document.createElement('Material');
		app.appendChild(mat);
		s.appendChild(app);
        t.appendChild(s);
        var b = document.createElement('Box');
		b.setAttribute("size","0.2,0.2,0.2");
        s.appendChild(b);
        var ot = document.getElementById('root');
        ot.appendChild(t);
        return false;
    };

    function removeNode()
    {
        var ot = document.getElementById('root');
        for (var i = 0; i < ot.childNodes.length; i++) {
        	// check if we have a real X3DOM Node; not just e.g. a Text-tag
        	if (ot.childNodes[i].nodeType === Node.ELEMENT_NODE) {
        		ot.removeChild(ot.childNodes[i]);
  				break;
  			}
  		}
        return false;
    };
		$(document).ready(function() {
			$(function() {
				$("#dialog").dialog({
					autoOpen: false
				});
				$("#guestbook").on("click", function() {
					$("#dialog").dialog("open");
				});
			});
			// Validating Form Fields
			$("#submit").click(function(e) {
				var email = $("#url").val();
				var name = $("#name").val();
				if (email === '' || name === '') {
					alert("Please fill all fields!");
					e.preventDefault();
				}
				else {
					alert("Form Submitted Successfully.");
				}
			});
		});
	</script>