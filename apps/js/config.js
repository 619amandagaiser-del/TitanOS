const SystemApps = {
    // ... your other apps (stargate, tv, profile, ai)
    'drive': { 
        title: 'Google Drive', 
        url: 'apps/drive.html', 
        icon: 'cloud_queue', 
        color: '#4285F4' 
    }
};

// Google API Credentials (You'll need these from Google Cloud Console)
const DRIVE_CONFIG = {
    clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
    apiKey: 'YOUR_API_KEY',
    scopes: 'https://www.googleapis.com/auth/drive.file'
};
