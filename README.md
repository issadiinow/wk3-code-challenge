# Flatdango

## Features

- View the first movie's details when the page loads, including:
  - Poster
  - Title
  - Runtime
  - Showtime
  - Available tickets (calculated from capacity minus tickets sold)
- Browse a menu of all available movies.
- Buy tickets for a movie, reducing the number of available tickets.
- Sold-out movies are clearly indicated, and ticket purchases are disabled for them.

---

## Requirements

To run this application, ensure you have the following installed on your system:

1. **Node.js** (Download from [Node.js](https://nodejs.org/))
2. **JSON Server** (Install globally via npm: `npm install -g json-server`)
3. A modern web browser (e.g., Chrome, Firefox, or Edge).

---

## Setup Instructions

Follow these steps to set up and run the application:

### Step 1: Clone the Repository

1. Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <your-repo-name>
   ```

### Step 2: Install JSON Server

1. Ensure that [Node.js](https://nodejs.org/) is installed on your system.
2. Install `json-server` globally:
   ```bash
   npm install -g json-server
   ```

### Step 3: Set Up the Database

1. Create a `db.json` file in the project directory and add the following data structure:
   ```json
   {
     "films": [
       {
         "id": "1",
         "title": "The Giant Gila Monster",
         "runtime": "108",
         "capacity": 30,
         "showtime": "04:00PM",
         "tickets_sold": 27,
         "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
       },
       {
         "id": "2",
         "title": "Manos: The Hands Of Fate",
         "runtime": "118",
         "capacity": 50,
         "showtime": "06:45PM",
         "tickets_sold": 44,
         "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
       },
       {
         "id": "3",
         "title": "Time Chasers",
         "runtime": "93",
         "capacity": 50,
         "showtime": "09:30PM",
         "tickets_sold": 31,
         "description": "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
       },
       {
         "id": "4",
         "title": "The Touch Of Satan",
         "runtime": "101",
         "capacity": 40,
         "showtime": "09:00PM",
         "tickets_sold": 31,
         "description": "A young man meets a farm girl who is actually a witch.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
       },
       {
         "id": "5",
         "title": "Santa Claus Conquers The Martians",
         "runtime": "96",
         "capacity": 50,
         "showtime": "03:30PM",
         "tickets_sold": 45,
         "description": "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
       }
     ]
   }
   ```
   > Note: Replace the `...` with additional movie objects as needed.

2. Save this file in the root of your project directory.

### Step 4: Start the JSON Server

1. Start the backend server by running:
   ```bash
   json-server --watch db.json
   ```
2. The server will run on `http://localhost:3000` by default.

### Step 5: Run the Application

1. Open the `index.html` file in your web browser. You can either:
   - Double-click the file to open it in your default browser, or
   - Serve it locally with a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code for better performance.

2. The application will load with the details of the first movie displayed and the list of movies on the left.

### Step 6: Interact with the Application

1. Browse the available movies and their details.
2. Purchase tickets using the "Buy Ticket" button and see the available ticket count decrease dynamically.
3. If tickets sell out, the button will display "Sold Out" and prevent further purchases.

---

## How to Use

1. Load the application in your browser.
2. Browse the movie list on the left.
3. View details of the first movie or click on any movie to view its details.
4. Buy tickets and watch the available ticket count decrease.
5. Sold-out movies are automatically marked and disabled for further purchases.

---

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the application.
- **JavaScript**: For dynamic DOM manipulation and event handling.
- **JSON Server**: For simulating a backend server.

---

## Project Structure

The project directory is structured as follows:

```
<project-root>/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet for the app
├── script.js        # JavaScript file for app functionality
├── db.json          # JSON file for simulating backend data
└── README.md        # Project documentation (this file)
```

---

