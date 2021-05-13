/**
 * 
 */

$.ajax(
		{
			url : "ItemsAPI",
			type : type, 
			data : $("#formItem").serialize(),
			dataType : "text", 
			complete : function(response, status) 
			{
				onItemSaveComplete(response.responseText, status); 
			}
		});

//hide the divisions used to show the status messages on the page load

$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();

});


//Add a click event handler for the Save button

$(document).on("click", "#btnSave", function(event)
{
	//Clear the status messages--------------------
	
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();



//Form Validation
var status = validateItemForm();

// if not valid

if(status != true)
{
	$("#alertError").text(status);
	$("#alertError").show();
	return;

}

// if valid

//Generate the card and append

var inventory = getInventoryCard($("#txtName").val().trim(), $('input[name="rdoType"]:checked').val(), $("#ddlQuantity").val());

	$("#colInventory").append(inventory);
	
	$("#alertSuccess").text("Saved successfully");
	$("#alertSuccess").show();
	
	$("#formInventory")[0].reset();

});

function validateItemForm()
{
	//NAME
	
	if ($("#txtName").val().trim() == ""){
		
		return "Insert name";
		
	}
	
	
	
	if ($('input[name="rdoType"]:checked').length === 0) 
	{
		
		return "Select Type";
		
	}
	
	
	
	if($("#ddlQuantity").val() == "0")
	{
		return "Select Quantity.";
	
	}
	
	
	return true;

}

function getStudentCard(name,type,quantity){
	
	var title = (type == "Heavy") ? "Mr." : "Ms.";
	
	var yearNumber = "";
	
	switch (year)
	{
	case "1":
		yearNumber = "1 Item";
		break;
		
	case "2":
		yearNumber = "2 Items";
		break;
		
	case "3":
		yearNumber = "3 Items";
		break;
		
	case "4":
		yearNumber = "4 Items";
		break;
	
	case "5":
		yearNumber = "5 Items";
		break;
		
	case "6":
		yearNumber = "6 Items";
		break;
		
	case "7":
		yearNumber = "7 Items";
		break;
		
	case "8":
		yearNumber = "8 Items";
		break;
		
	case "9":
		yearNumber = "9 Items";
		break;
		
	case "10":
		yearNumber = "10 Items";
		break;
	}
	 
	
	var inventory = "";
	
	inventory += "<div class=\"student card bg-light m-2\"" +
			"			style=\"max-width: 10rem; float: left;\">"; 
	inventory += "<div class=\"card-body\">";
	inventory += title + " " + name + ",";
	inventory + "<br>";
	inventory += yearNumber + " Items";
	inventory += "</div>";
	inventory += "<input type=\"button\" value-\"Remove\" class=\"btn btn-danger remove\">";
	
	inventory += "</div>";
	
	return inventory;
		
}

$(document).on("click", "#btnSave", function(event){
	
	// Clear alerts---------------------
	$("#alertSuccess").text(""); 
	$("#alertSuccess").hide(); 
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true)
		{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
		}
	
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
	
	$.ajax(
			{
				url : "ItemsAPI",
				type : type, 
				data : $("#formItem").serialize(), 
				dataType : "text",
				complete : function(response, status)
				{
					onItemSaveComplete(response.responseText, status);
				}
			});
	
});

var resultSet = JSON.parse(response);

if (resultSet.status.trim() == "success") 
	{
	
	$("#alertSuccess").text("Successfully saved."); 
	$("#alertSuccess").show(); 
	
	$("#divItemsGrid").html(resultSet.data); 
	
	} else if (resultSet.status.trim() == "error")
		{
		$("#alertError").text(resultSet.data); 
		$("#alertError").show(); 
		}


else if(status == "error"){
	
	$("#alertError").text("Error while saving."); 
	$("#alertError").show(); 
}else
	{
	$("#alertError").text("Unknown error while saving.."); 
	$("#alertError").show();
	}


function onItemSaveComplete(response, status)
{
	if (status == "success")
		{
		var resultSet = JSON.parse(response);
		
		if(resultSet.status.trim() == "success")
			{
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show(); 
			
			$("#divItemsGrid").html(resultSet.data);
			
			}else if (resultSet.status.trim() == "error") 
				{
				$("#alertError").text(resultSet.data); 
				$("#alertError").show(); 
				}
		
		} else if (status == "error") 
		{
			$("#alertError").text("Error while saving."); 
			$("#alertError").show(); 
		}
	else{
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show(); 
		}
	
	$("#hidItemIDSave").val(""); 
	$("#formItem")[0].reset(); 
}

$(document).on("click", ".btnUpdate", function(event)
		{
	
	$("#hidItemIDSave").val($(this).data("itemid")); 
	$("#itemCode").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#itemName").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#itemPrice").val($(this).closest("tr").find('td:eq(2)').text()); 
	("#itemDesc").val($(this).closest("tr").find('td:eq(3)').text()); 
	
		});

$(document).on("click", ".btnRemove", function(event)
		{
	$.ajax( 
			{
				url : "ItemsAPI", 
				type : "DELETE", 
				data : "itemID=" + $(this).data("itemid"),
				dataType : "text",
				complete : function(response, status)
				{
					onItemDeleteComplete(response.responseText, status); 
				}
			});
	});


function onItemDeleteComplete(response, status){
	
	if (status == "success"){
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") 
			{
			$("#alertSuccess").text("Successfully deleted."); 
			$("#alertSuccess").show();
			
			$("#divItemsGrid").html(resultSet.data);
			
			}else if (resultSet.status.trim() == "error") 
				{
				
				$("#alertError").text(resultSet.data); 
				$("#alertError").show();
				}
	} else if (status == "error") 
		{
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
		}else{
			
			$("#alertError").text("Unknown error while deleting.."); 
			$("#alertError").show(); 
		}
}






















