# AI-Medical-Vending

A full-stack MERN application for an AI-powered medical vending machine that provides symptom-based diagnosis and medication dispensing.

## Project Structure

```
AI-Medical-Vending/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── App.jsx        # Main app with routing
│   │   └── index.js       # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js + Express backend
│   ├── controllers/       # Business logic
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
└── README.md
```

## Features

- **Symptom-based Diagnosis**: Enter symptoms, age, and duration to get AI-powered recommendations
- **Rule-based Logic**: Intelligent medication selection based on symptom analysis
- **Payment Integration**: Demo payment system with UPI, Card, and Cash options
- **Automated Dispensing**: Simulated medicine dispensing from designated compartments
- **Mobile-first Design**: Responsive UI built with TailwindCSS

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`

## API Endpoints

### POST `/api/diagnose`
Submit symptoms for diagnosis.

**Request Body:**
```json
{
  "symptoms": "fever and headache",
  "age": 25,
  "days": 2
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "tablet": "Paracetamol 500mg",
    "dosage": "1-0-1",
    "compartment": "C1",
    "message": "For fever (age >3)"
  }
}
```

### POST `/api/dispense`
Request medicine dispensing.

**Request Body:**
```json
{
  "compartment": "C1"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Dispensing medicine...",
  "compartment": "C1"
}
```

## Diagnosis Rules

The system uses rule-based logic to determine medication:

- **Fever (age > 3)**: Paracetamol 500mg → C1
- **Fever (age ≤ 3)**: Kids Fever Syrup 5ml → C5
- **Cold/Cough**: Cold Relief Tablet → C2
- **Dehydration/Thirst/Vomit**: ORS Packet → C3
- **Cut/Injury/Bleed**: Band-Aid / First Aid → C4
- **Headache**: Pain Relief Tablet 250mg → C1
- **Default**: General Analgesic 250mg → C1

## How to Connect to Arduino/NodeMCU

To integrate with physical hardware (Arduino or NodeMCU) for actual dispensing:

1. **Hardware Setup**:
   - Connect servo motors or stepper motors to control compartment doors
   - Use GPIO pins on NodeMCU/Arduino to trigger dispensing mechanisms
   - Implement sensors to detect when medicine is dispensed

2. **Communication**:
   - Use HTTP requests from Arduino/NodeMCU to call `/api/dispense` endpoint
   - Alternatively, use WebSocket or MQTT for real-time communication
   - NodeMCU can use ESP8266HTTPClient library to make POST requests

3. **Backend Integration**:
   - Modify `dispenseController.js` to send signals to Arduino/NodeMCU
   - Use serial communication (Serial port) or HTTP client libraries
   - Add hardware status feedback to confirm successful dispensing

4. **Example Flow**:
   ```
   Frontend → Backend API → Serial/USB/HTTP → Arduino/NodeMCU → Motor Control → Dispense
   ```

5. **Libraries for NodeMCU**:
   - ESP8266HTTPClient for HTTP requests
   - ArduinoJson for JSON parsing
   - Servo library for motor control

**Note**: Hardware integration code is not included in this repository. Implement based on your specific hardware configuration and requirements.

## Technologies Used

- **Frontend**: React, React Router, TailwindCSS, Axios
- **Backend**: Node.js, Express, CORS
- **Development**: Create React App

## License

ISC

