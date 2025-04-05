# Electron Idle Detection POC

A proof of concept application built with Electron.js that demonstrates user idle detection functionality.

## Features

- Real-time user activity monitoring
- Idle detection after 5 seconds of inactivity
- Visual status indicator (Active/Idle)
- Idle time counter

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the application with:
```bash
npm start
```

## How it Works

The application monitors mouse movement and keyboard activity. After 5 seconds of inactivity, the user status changes to "Idle" and begins counting idle time. Any mouse movement or keyboard activity will reset the status to "Active".