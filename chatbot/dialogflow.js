const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8082;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sherrymerry20@gmail.com',
        pass: 'czmhdelpnuehgoqd'
    }
});

let to, from, people, time, hotel, checkin, checkout, rooms, userEmail;

function booking(agent) {
    const parameters = agent.parameters;
    to = parameters.to;
    from = parameters.from;
    people = parameters.people;
    time = parameters.time;
    hotel = parameters.hotel;
    checkin = parameters.checkin;
    checkout = parameters.checkout;
    rooms = parameters.rooms;
    
    agent.add(`🌟 **Awesome!** Here's your booking summary:
        
🗺️ Destination: ${to}  
🌆 Departure from: ${from}  
👥 Traveling with: ${people} persons  
📅 Duration: ${time} days  
🏨 Hotel: ${hotel}  
📅 Check-in: at ${checkin}  
📅 Check-out: at ${checkout}  
🛏️ Rooms Needed: ${rooms} rooms  

Ready to make this trip unforgettable? 🚀✨

Do you confirm these details?`);
    agent.add(new Suggestion('Yes, confirm'));
    agent.add(new Suggestion('No, make changes'));
}

async function handlepurchase(agent) {
    const confirmation = agent.parameters.confirmation;
    userEmail = agent.parameters.email;

    if (confirmation && confirmation.toLowerCase() === 'yes') {
        if (!userEmail) {
            agent.add('Please provide your email address to send the booking confirmation✨');
            agent.context.set({ name: 'awaiting_email', lifespan: 1, parameters: {} });
        } else {
            agent.add('✅ Your booking has been confirmed! An email with the details will be sent shortly.');
            await sendConfirmationEmail(agent);
        }
    } else {
        agent.add('❌ Booking cancelled. Let us know if you need any changes or assistance!');
    }
}

async function handleEmailInput(agent) {
    userEmail = agent.parameters.email;
    agent.add('Thank you! We have received your email address.');
    await sendConfirmationEmail(agent);
}

async function sendConfirmationEmail(agent) {
    const emailHtml = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: auto;
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #4CAF50;
                }
                p {
                    font-size: 16px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                ul li {
                    background: #f4f4f9;
                    margin: 10px 0;
                    padding: 10px;
                    border-left: 4px solid #4CAF50;
                }
                ul li:nth-child(even) {
                    background: #e9e9f0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Travel Booking Confirmation🌟</h1>
                <p>Your booking details are as follows:</p>
                <ul>
                    <li><strong>Destination:</strong> ${to}</li>
                    <li><strong>Departure From:</strong> ${from}</li>
                    <li><strong>Traveling With:</strong> ${people} persons</li>
                    <li><strong>Duration:</strong> ${time} days</li>
                    <li><strong>Hotel:</strong> ${hotel}</li>
                    <li><strong>Check-in Date:</strong> ${checkin}</li>
                    <li><strong>Check-out Date:</strong> ${checkout}</li>
                    <li><strong>Rooms Needed:</strong> ${rooms}</li>
                </ul>
                <p>Thank you for booking with us! If you have any questions or need further assistance, feel free to contact us.</p>
            </div>
        </body>
        </html>
    `;

    const mailOptions = {
        from: 'sherrymerry20@gmail.com',
        to: userEmail,
        subject: 'Booking Confirmation',
        html: emailHtml
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        agent.add('📧 The confirmation email has been sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        agent.add('⚠️ There was an error sending the confirmation email. Please try again later.');
    }
}

function fallback(agent) {
    agent.add(`😔 I'm sorry, I didn't quite understand that. Could you please try again?`);
}

app.post("/webhook", (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    let intentMap = new Map();
    intentMap.set('Booking', booking);
    intentMap.set('Handle_Purchase', handlepurchase);
    intentMap.set('Ask_For_Email', handleEmailInput);
    intentMap.set('Send Confirmation Email', sendConfirmationEmail);
    intentMap.set('Default Fallback Intent', fallback);

    agent.handleRequest(intentMap);
});

app.listen(PORT, () => {
    console.log(`Dialogflow Webhook Server is running on port ${PORT}`);
});
