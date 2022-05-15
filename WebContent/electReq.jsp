
<%@ page import="model.Electricity"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Electricity Connection Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Componets/jquery-3.2.1.min.js"></script>
<script src="Componets/electricities.js"></script>
 


</head> 
<body class=container>


<h1>New Electricity Connection Management</h1>
   <form id="formItem" name="formItem" method="post" action="elecReq.jsp">
		
		 Request ID:
		<input id="requestId" name="requestId" type="text"
		 class="form-control form-control-sm">
		<br>
		 Full name:
		<input id="fullName" name="fullName" type="text"
		 class="form-control form-control-sm">
		<br>NIC No:
		<input id="nationalIdentityCardNo" name="nationalIdentityCardNo" type="text"
		 class="form-control form-control-sm">
		<br> Phone Number:
		<input id="phoneNumber" name="phoneNumber" type="text"
		 class="form-control form-control-sm">
		<br>Email:
		<input id="email" name="email" type="text"
		 class="form-control form-control-sm">
		 <br> Service Connection Address:
		<input id="newElectricityConnectionAddress" name="newElectricityConnectionAddress" type="text"
		 class="form-control form-control-sm">
		 <br>Postal Code of Area:
		<input id="postalCodeOfArea" name="postalCodeOfArea" type="text"
		 class="form-control form-control-sm">
		 <br> Type of Service:
		<input id="serviceType" name="serviceType" type="text"
		 class="form-control form-control-sm">
		<br>Purpose of Electricity Usage:
		<input id="purpose" name="purpose" type="text"
		 class="form-control form-control-sm">
		<br>
		<input id="btnSave" name="btnSave" type="button" value="Save"
		 class="btn btn-primary">
		<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
  </form>

	<div id="alertSuccess" class="alert alert-success"></div>
    <div id="alertError" class="alert alert-danger"></div>
	
		<br> 
		<div id="divItemsGrid">
		 <%
		 
		 Electricity itemObj = new Electricity();
		 out.print(itemObj.readElectricityConnectionRequests());
		 
		 %>
		</div>

 
 
 
    </div>

</div>

</body>
</html>
