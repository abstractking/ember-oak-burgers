# AirSol

## Project Overview
Empty GitHub repository imported into Replit. A minimal Node.js HTTP server was created as a starter scaffold.

## Architecture
- **Frontend**: Static HTML served via Node.js built-in `http` module
- **Server**: `server.js` — serves files from the `public/` directory on port 5000
- **No external dependencies** — uses only Node.js built-ins

## Project Structure
```
├── server.js          # HTTP server (port 5000, host 0.0.0.0)
├── package.json       # npm config
├── public/
│   └── index.html     # Landing page
└── LICENSE            # MIT License
```

## Running the App
```
node server.js
```
The app listens on `0.0.0.0:5000`.

## Notes
- The original GitHub import was an empty repository (only a LICENSE file).
- This starter scaffold was added to make it runnable in the Replit environment.
