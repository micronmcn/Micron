// Google Apps Script backend functions for user registration and authentication

function registerUser(email, password) {
    // Function to register a new user in the Google Sheets database
    var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
    var data = sheet.getActiveSheet();
    var lastRow = data.getLastRow() + 1;
    data.getRange(lastRow, 1).setValue(email);
    data.getRange(lastRow, 2).setValue(password);
    return 'User registered successfully';
}

function authenticateUser(email, password) {
    // Function to authenticate a user against the Google Sheets database
    var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
    var data = sheet.getActiveSheet().getDataRange().getValues();
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] === email && data[i][1] === password) {
            return 'Authentication successful';
        }
    }
    return 'Authentication failed';
}