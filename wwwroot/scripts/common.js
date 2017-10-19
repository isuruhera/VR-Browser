$(function () {
    loadData();
    $("#dialog-formAdd").dialog({
        autoOpen: false,
        title: 'Add your URL',
        dialogClass: 'ppTitleClass',
        width: '400px'
        // height: '500px'

    });

    $("#dialog-formEdit").dialog({
        autoOpen: false,
        title: 'Edit your URL',
        dialogClass: 'ppTitleClass',
        width: '400px'
        // height: '500px'

    });

    $("#dialog-formSearch").dialog({
        autoOpen: false,
        title: 'Search your URL',
        dialogClass: 'ppTitleClass',
        width: '550px',
        // height:'700px'

    });

    
});


function initialCreate(jObj) {
    //var jObj = loadData();
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("SceneryCordinate", '');
        localStorage.setItem("GamesCordinate", '');
        localStorage.setItem("ArchitectureCordinate", '');
    }
    for (i = 0; i < jObj.length; i++) {

        generateCordinate(jObj[i].Category, jObj[i].Url);
    }
    

}


function generateCordinate(jObj,gUrl) {
    switch (jObj) {
        case "Scenery":

            if (typeof (Storage) !== "undefined") {
                var x, y, z, ct;
                var codinatejson = localStorage.getItem("SceneryCordinate");
                if (codinatejson == null || codinatejson == "") {
                    x = -4;
                    y = -3;
                    z = 2.1;
                } else {
                    obj = JSON.parse(codinatejson);
                    x = obj.x;
                    y = obj.y;
                    z = obj.z + 0.2;
                    ct = obj.count + 1;
                }


                addBookElement(x, y, z, ct, gUrl);

                gCodinateObj = { "x": x, "y": y, "z": z, "count": ct };
                gCodinateJSON = JSON.stringify(gCodinateObj);
                localStorage.setItem("SceneryCordinate", gCodinateJSON);
                console.log('Scenery');
            }

            break;

        case "Games":
            if (typeof (Storage) !== "undefined") {
                var x, y, z, ct;
                var codinatejson = localStorage.getItem("GamesCordinate");
                if (codinatejson == null || codinatejson == "") {

                    x = -3.8;
                    y = 4.8;
                    z = 2.1;
                    ct = 1;
                } else {
                    obj = JSON.parse(codinatejson);
                    x = obj.x;
                    y = obj.y;
                    z = obj.z + 0.2;
                    ct = obj.count + 1;
                }

                addBookElement(x, y, z, ct, gUrl);

                gCodinateObj = { "x": x, "y": y, "z": z, "count": ct };
                gCodinateJSON = JSON.stringify(gCodinateObj);
                localStorage.setItem("GamesCordinate", gCodinateJSON);
                console.log('Games');
            }


            break;

        case "Architecture":

            if (typeof (Storage) !== "undefined") {
                var x, y, z, ct;
                var codinatejson = localStorage.getItem("ArchitectureCordinate");
                if (codinatejson == null || codinatejson == "") {

                    x = 3.3;
                    y = -5;
                    z = 2.1;
                    ct = 1;
                } else {
                    obj = JSON.parse(codinatejson);
                    x = obj.x;
                    y = obj.y;
                    z = obj.z + 0.2;
                    ct = obj.count + 1;
                }

                addBookElement(x, y, z, ct, gUrl);
                gCodinateObj = { "x": x, "y": y, "z": z, "count": ct };
                gCodinateJSON = JSON.stringify(gCodinateObj);
                localStorage.setItem("ArchitectureCordinate", gCodinateJSON);
                console.log('Architecture');
            }


            break;

        default:
    }

}
function addBookElement(x, y, z, ct, gUrl) {
    
    var t = document.createElement('Transform');
    t.setAttribute("translation", x + " " + z + " " + y);

    var s = document.createElement("Shape");
    s.setAttribute("onclick", "window.open('http://" + gUrl + "', '_blank');");
    
    var app = document.createElement('Appearance');

    // Material Node
    var mat = document.createElement('Material');
    if (ct % 2 == 0) {
        mat.setAttribute("diffuseColor", "#990000");
    } else {
        mat.setAttribute("diffuseColor", "#bf4080");
    }
    

    app.appendChild(mat);

    s.appendChild(app);

    t.appendChild(s);
    var b = document.createElement('Box');
    b.setAttribute("size", "1.5 0.2 1");
    s.appendChild(b);

    var ot = document.getElementById('root');
    ot.appendChild(t);
}

function loadData() {
    $.ajax({
        type: 'GET',
        url: "/api/GuestBook/",
        dataType: 'json',
        async: false,
        success: function (data) {
            initialCreate(data.jsonObj);
            //return data.jsonObj;
            
        }
    });
}


function addNode() {
    var cat = $('#category').val();
    var url = $('#txtUrl').val();
    generateCordinate(cat,url);
}


function addNodePop() {
    $("#dialog-formAdd").dialog("open");
    $('#txtName').val('');
    $('#txtUrl').val('');
    $('#category').val('..Select..');
}

function OpenNodeUrl(ur) {
    window.open('+ur+', '_blank');

}

function searchNodePop() {
    $("#dialog-formSearch").dialog("open");

}

function addGuest() {
    var guestbook = {};
    guestbook.Name = $('#txtName').val();
    guestbook.Url = $('#txtUrl').val();
    guestbook.Category = $('#category').val();

    $.ajax({
        type: 'POST',
        url: "/api/GuestBook",
        contentType: "application/json",
        data: JSON.stringify(guestbook),
        success: function (data) {
            addNode();
            $("#dialog-formAdd").dialog("close");
            //alert("Done");
            
        }
    });

}

function SearchGuest() {
    var tstSearch = $('#txtSearch').val();
    $.ajax({
        type: 'GET',
        url: "/api/GuestBook/" + tstSearch,
        dataType: 'json',
        success: function (data) {
            $("#gTBody").empty();
            var table = '';
            for (x = 0; x < data.jsonObj.length; x++) {
                table += '<tr><td>' + (parseInt(x) + 1) + '</td><td>' + data.jsonObj[x].Name + '</td><td>' + data.jsonObj[x].Category + '</td><td>' + data.jsonObj[x].Url + '</td></tr>';
            }
            $('#gTBody').append(table);
        }
    });
}