@echo off
REM Step 1: Start the server
cd back-end
start cmd /k "nodemon index.js"
timeout /t 3 /nobreak

REM Step 2: Start the client
cd ..
cd front-end
start cmd /k "npm run dev"
timeout /t 3 /nobreak

REM Step 3: Open in default browser and refresh
start "" "http://localhost:5173"
