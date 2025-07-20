$(document).ready(function () {
    resetForm();
});

const token = "90934975|-31949250759238360|90959568"; // Connection token
const dbName = "COLLEGE-DB"; // db name
const rel = "PROJECT-TABLE"; // relation name
const baseURL = "http://api.login2explore.com:5577"; //jpdb base URL
const endPointIrl = "/api/irl"; // Endpoint for irl requests
const endPointIml = "/api/iml"; // Endpoint for iml requests

// validating data from the form
let validateData = () => {
    let prjIdVal = $("#prjId").val();
    let prjNameVal = $("#prjName").val();
    let assignedToVal = $("#assignedTo").val();
    let deadlineVal = $("#deadline").val();
    let assignDateVal = $("#assignDate").val();

    if (prjIdVal === "") {
        alert("Please enter Project ID");
        $("#prjId").focus();
        return "";
    }
    if (prjNameVal === "") {
        alert("Please enter Project Name");
        $("#prjName").focus();
        return "";
    }
    if (assignedToVal === "") {
        alert("Please enter Assigned To");
        $("#assignedTo").focus();
        return "";
    }
    if (assignDateVal === "") {
        alert("Please enter Assignment Date");
        $("#assignDate").focus();
        return "";
    }
    if (deadlineVal === "") {
        alert("Please enter Deadline");
        $("#deadline").focus();
        return "";
    }

    let formData = {
        "Project-ID": prjIdVal,
        "Project-Name": prjNameVal,
        "Assigned-To": assignedToVal,
        "Assignment-Date": assignDateVal,
        "Deadline": deadlineVal
    }
    return JSON.stringify(formData);
}

// Function to get Project ID from the input field
let getPrjId = () => {
    let prjId = $("#prjId").val();
    return JSON.stringify({
        "Project-ID": prjId 
    });
}

// Function to fetch project data by Project ID
let getProject = () => {
    let prjIdJson = getPrjId(); 
    if (prjIdJson === "") { 
        return;
    }

    let getRequest = createGET_BY_KEYRequest(token, dbName, rel, prjIdJson); 
    jQuery.ajaxSetup({ async: false });
    let jsonRes = executeCommandAtGivenBaseUrl(getRequest, baseURL, endPointIrl);
    jQuery.ajaxSetup({ async: true });

    if (jsonRes.status === 400) {
        resetForm();
        let tempPrjId = JSON.parse(prjIdJson)["Project-ID"]; 
        $("#prjId").val(tempPrjId);
        $("#prjId").prop("disabled", false);

        $("#prjName").prop("disabled", false);
        $("#assignedTo").prop("disabled", false);
        $("#assignDate").prop("disabled", false);
        $("#deadline").prop("disabled", false);

        $("#prjSave").attr("disabled", false);
        $("#reset").attr("disabled", false);
        $("#prjName").focus();

    } else if (jsonRes.status === 200) {
        fillData(jsonRes);
        $("#prjId").prop("disabled", true); 

        $("#prjName").prop("disabled", false);
        $("#assignedTo").prop("disabled", false);
        $("#assignDate").prop("disabled", false);
        $("#deadline").prop("disabled", false);

        $("#prjUpdate").attr("disabled", false);
        $("#reset").attr("disabled", false);
        $("#prjSave").attr("disabled", true);
        $("#prjName").focus();

    } else {
        alert("Error fetching project data: " + jsonRes.message);
        resetForm();
    }
}

// Function to fill the form with project data
let fillData = (jsonRes) => {
    saveRecord2LS(jsonRes);

    let record = JSON.parse(jsonRes.data).record;
    $("#prjId").val(record['Project-ID']);
    $("#prjName").val(record['Project-Name']);
    $("#assignedTo").val(record['Assigned-To']);
    $("#deadline").val(record['Deadline']);
    $("#assignDate").val(record['Assignment-Date']);
}

// Function to save the project data
let saveProject = () => {
    let formData = validateData();
    if (formData === "") {
        return "";
    }

    let putRequest = createPUTRequest(token, formData, dbName, rel);
    jQuery.ajaxSetup({ async: false });
    let jsonRes = executeCommandAtGivenBaseUrl(putRequest, baseURL, endPointIml);
    jQuery.ajaxSetup({ async: true });

    if (jsonRes.status === 200) {
        alert("Project saved successfully");
    } else {
        alert("Error saving project: " + jsonRes.message);
    }
    resetForm();
}

// Function to reset the form
let resetForm = () => {
    $("#prjId").val("");
    $("#prjName").val("");
    $("#assignedTo").val("");
    $("#deadline").val("");
    $("#assignDate").val("");

    $("#prjName").prop("disabled", true);
    $("#assignedTo").prop("disabled", true);
    $("#assignDate").prop("disabled", true);
    $("#deadline").prop("disabled", true);
    $("#prjId").prop("disabled", false);

    $("#prjSave").attr("disabled", true);
    $("#prjUpdate").attr("disabled", true);
    $("#reset").attr("disabled", true);

    $("#prjId").focus();
}

// Function to save the record number to localStorage
let saveRecord2LS = (jsonRes) => {
    if (jsonRes && jsonRes.data) {
        try {
            let recordData = JSON.parse(jsonRes.data);
            if (recordData && recordData.rec_no) {
                localStorage.setItem("record", recordData.rec_no);
            } else {
                console.warn("JPDB response data did not contain rec_no.");
            }
        } catch (e) {
            console.error("Error parsing JSON response for saveRecord2LS:", e);
        }
    } else {
        console.warn("Invalid jsonRes or jsonRes.data for saveRecord2LS.");
    }
}

// Function to update the project data
let updateProject = () => {
    let formData = validateData();
    if (formData === "") {
        return;
    }

    let recordNo = localStorage.getItem("record");
    if (!recordNo) {
        alert("Record number not found for update. Please fetch the project first.");
        return;
    }

    // createUPDATERecordRequest also expects a JSON object for the primary key
    // with the primary key column name as the key
    let prjIdJson = JSON.stringify({ "Project-ID": $("#prjId").val() });

    let updateRequest = createUPDATERecordRequest(token, formData, dbName, rel, recordNo, prjIdJson);
    jQuery.ajaxSetup({ async: false });
    let jsonRes = executeCommandAtGivenBaseUrl(updateRequest, baseURL, endPointIml);
    jQuery.ajaxSetup({ async: true });

    console.log(jsonRes);
    if (jsonRes.status === 200) {
        alert("Project updated successfully");
    } else {
        alert("Error updating project: " + jsonRes.message);
    }
    resetForm();
}

