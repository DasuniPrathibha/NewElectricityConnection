$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	 {
	 $("#alertSuccess").hide();
	 }
	 $("#alertError").hide();
});



 // SAVE ============================================
   
$(document).on("click", "#btnSave", function(event)
	{
		
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
				 url : "ElectricityAPI", 
				 type : type, 
				 data : $("#formItem").serialize(), 
				 dataType : "text", 
				 complete : function(response, status) 
			 { 
				 onItemSaveComplete(response.responseText, status); 
			 } 
		});
		
	});
	
	
	
	//itemssavecomplefunction
	

	function onItemSaveComplete(response, status) 
	{ 
	  if (status == "success") 
	   { 
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
		 
		 } else if (status == "error") 
		 
		 { 
			 $("#alertError").text("Error while saving."); 
			 $("#alertError").show(); 
			 
		 } else
		 
		 { 
			 $("#alertError").text("Unknown error while saving.."); 
			 $("#alertError").show(); 
			 
		 } 
		
	
		 $("#hidItemIDSave").val(""); 
		 $("#formItem")[0].reset(); 
	}
	

	
	
// update
	
	$(document).on("click", ".btnUpdate", function(event) 
	{ 
		 $("#hidItemIDSave").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#requestId").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#fullName").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#nationalIdentityCardNo").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#phoneNumber").val($(this).closest("tr").find('td:eq(3)').text()); 
		 $("#email").val($(this).closest("tr").find('td:eq(4)').text()); 
		 $("#newElectricityConnectionAddress").val($(this).closest("tr").find('td:eq(5)').text()); 
		 $("#postalCodeOfArea").val($(this).closest("tr").find('td:eq(6)').text()); 
		 $("#serviceType").val($(this).closest("tr").find('td:eq(7)').text()); 
		 $("#purpose").val($(this).closest("tr").find('td:eq(8)').text()); 
	});
	
	
	
//delete
	
$(document).on("click", ".btnRemove", function(event) 
	{ 
		 $.ajax( 
			 { 
					 url : "ElectricityAPI", 
					 type : "DELETE", 
					 data : "id=" + $(this).data("id"),
					 dataType : "text", 
					 complete : function(response, status) 
				 { 
			     onItemDeleteComplete(response.responseText, status); 
			     } 
		 }); 
	});
	


//deletecompletion

function onItemDeleteComplete(response, status) 
{ 
	  if (status == "success") 
	 { 
		 var resultSet = JSON.parse(response); 
		 
			 if (resultSet.status.trim() == "success") 
				 { 
					 $("#alertSuccess").text("Successfully deleted."); 
					 $("#alertSuccess").show(); 
					 
					 $("#divItemsGrid").html(resultSet.data); 
			 } else if (resultSet.status.trim() == "error") 
				 
			 { 
				 $("#alertError").text(resultSet.data); 
				 $("#alertError").show(); 
			 } 
			 
	} else if (status == "error") 
			 
	{ 
	     $("#alertError").text("Error while deleting."); 
		 $("#alertError").show(); 
	} else
			 
	 { 
	     $("#alertError").text("Unknown error while deleting.."); 
		 $("#alertError").show(); 
	 } 
		
		
	}	
		
	// CLIENT-MODEL================================================================
	
	function validateItemForm()
	{
	
	// fullName
	
	if ($("#fullName").val().trim() == "")
	 {
		 return "Insert full name.";
	 }
	// NAME
	
	if ($("#nationalIdentityCardNo").val().trim() == "")
	 {
	 	return "Insert NIC No.";
	 }
	 
	 
	// PRICE-------------------------------
	
	if ($("#phoneNumber").val().trim() == "")
	 {
		 return "Insert Phone Number.";
	 }
	 
	 
	// DESCRIPTION------------------------
	
	if ($("#email").val().trim() == "")
	 {
	 	return "Insert email.";
	 }
	 
	  
	// PRICE-------------------------------
	
	if ($("#newElectricityConnectionAddress").val().trim() == "")
	 {
		 return "Insert address.";
	 }
	 
	  
	// PRICE-------------------------------
	
	if ($("#postalCodeOfArea").val().trim() == "")
	 {
		 return "Insert postal Code Of Area.";
	 }
	 
	  
	// PRICE-------------------------------
	
	if ($("#serviceType").val().trim() == "")
	 {
		 return "Insert service Type.";
	 }
	 
	  
	// PRICE-------------------------------
	
	if ($("#purpose").val().trim() == "")
	 {
		 return "Insert purpose.";
	 }
	 
	return true;
	


}	

