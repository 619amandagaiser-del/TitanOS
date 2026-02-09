const DRIVE_CONFIG = {
    clientId: '106130595767-2ai0d8mac2ard8q2ngthuuh5pahoutuv.apps.googleusercontent.com',
    // Leave API Key blank if you are only using OAuth2, or add yours from Google Console
    apiKey: 'YOUR_API_KEY_HERE', 
    scopes: 'https://www.googleapis.com/auth/drive.file',
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
};

// This variable will hold the session once you log in
let DRIVE_ACCESS_TOKEN = null;
