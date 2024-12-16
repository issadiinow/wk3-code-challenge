# Flatdango Movie Ticket App

## Overview
Flatdango is a simple web application that allows users to view movie details and purchase tickets for various films.

## Features
- Browse a list of movies
- View detailed information about each movie
- Purchase tickets for available shows
- Real-time ticket availability updates

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flatdango-movie-app.git
cd flatdango-movie-app
```

2. Install dependencies:
```bash
npm init -y
npm install json-server live-server concurrently
```
3. Set Up the Database
Create a `db.json` file in the project directory and add the following data structure from thhe  link provided:
[db.json](https://docs.google.com/document/d/1KKqnHX4woJXQD1DSARTOcFD66uniLy0qwJFoHmmQDbA/edit?tab=t.0)

## Running the Application

### Option 1: Concurrent Server Startup
To start both the JSON server and live server simultaneously, add the following scripts to your `package.json`:

```json
"scripts": {
  "start": "concurrently \"json-server --watch db.json\" \"live-server\""
}
```

Then run:
```bash
npm start
```

### Option 2: Manual Startup
If you prefer to start servers separately:

1. Start JSON Server (Backend):
```bash
npx json-server --watch db.json
```
- This will start the JSON server on `http://localhost:3000`
- Serves the movie data from `db.json`

2. Start Live Server (Frontend):
```bash
npx live-server
```
- This will start the frontend on `http://localhost:8080`

## Application Structure
- `index.html`: Main HTML page
- `index.js`: JavaScript logic for fetching and displaying movies
- `style.css`: Styling for the application
- `db.json`: JSON database containing movie information

## How to Use
1. The app loads with the first movie's details displayed
2. Click on movie cards in the left panel to view their details
3. Click "Buy Ticket" to purchase a ticket
4. Tickets are limited and will show "Sold Out" when unavailable

## Troubleshooting
- Ensure both servers are running
- Check browser console for any error messages
- Verify that `db.json` is in the correct location

