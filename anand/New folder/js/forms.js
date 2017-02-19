			var visible_dropdown;
			var name, room, starttime, endtime, reason, result;
			var gym_full;
			function dropdown(val) {
				if(val=='') {
					$("#default").show();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#pierce').hide();
					$('#mclean').hide();
				} else if(val=='burchard') {
					$("#default").hide();
					$("#burchard").show();
					visible_dropdown = $('#burchard option:selected').text();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#pierce').hide();
					$('#mclean').hide();
				} else if(val=='babbio') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").show();
					visible_dropdown = $('#babbio option:selected').text();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#mclean').hide();
					$('#pierce').hide();
				} else if(val=='carnegie') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').show();
					visible_dropdown = $('#carnegie option:selected').text();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#mclean').hide();
					$('#pierce').hide();
				} else if(val=='eas') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').show();
					visible_dropdown = $('#eas option:selected').text();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#mclean').hide();
					$('#pierce').hide();
				} else if(val=='kidde') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').show();
					visible_dropdown = $('#kidde option:selected').text();
					$('#lieb').hide();
					$('#morton').hide();
					$('#mclean').hide();
					$('#pierce').hide();
				} else if(val=='lieb') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').show();
					visible_dropdown = $('#lieb option:selected').text();
					$('#morton').hide();
					$('#mclean').hide();
					$('#pierce').hide();
				} else if(val=='morton') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').show();
					visible_dropdown = $('#morton option:selected').text();
					$('#mclean').hide();
					$('#pierce').hide();
				} else if(val=='mclean') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#mclean').show();
					visible_dropdown = $('#mclean option:selected').text();
					$('#pierce').hide();
				} else if(val=='pierce') {
					$("#default").hide();
					$("#burchard").hide();
					$("#babbio").hide();
					$('#carnegie').hide();
					$('#eas').hide();
					$('#kidde').hide();
					$('#lieb').hide();
					$('#morton').hide();
					$('#mclean').hide();
					$('#pierce').show();
					visible_dropdown = $('#pierce option:selected').text();
				}
			}
			
			function formData() {
				name = $('#name').val();
				room = visible_dropdown;
				alert(room);
				starttime = $('#starttime').val().split("T").join(" ");
				endtime = $('#endtime').val();
				reason = $('#reason').val();
				result = [name, room, starttime, endtime, reason];
				
				var complete=true;
				for(var i=0; i<result.length;i++){
					if (result[i]=="" || result[i] == "undefined" || $('#building').val() == 'empty'){
						alert("Please fill out all inputs.");
						complete=false;
						break;
					}
				}
				//alert(result);
				if(complete){
					updateTable();
				} else {
				return false;
				}
			}
			
			function getFormData() {
			//return an array of the submitted form data in the format [name, room, start time, end time, reason]
				return result;
			}
			
			function updateTable() {
				var data =  getFormData();
			    var table = document.getElementById("myTableData");
				var row = table.insertRow(1);
				for (var i=0; i<data.length;i++){
					var j = row.insertCell(i);
					j.innerHTML = data[i];
				}
			}
			
			function submitForm() {
				var selected = $('input[name=gym-full]:checked').val();
				if (selected=='yes'){
					gym_full = true;
				} else {
					gym_full = false;
				}
			}
			
			function postGymStatus() {
				
				var locate = window.location;
				var val = locate.substring(str.indexOf("=")+1);
				document.getElementById("gym-status").innerHTML = val;
			}