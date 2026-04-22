🏥 MeduraX – Doctor Appointment Booking System

MeduraX is a full-stack web application designed to simplify the process of booking doctor appointments. It ensures a smooth, secure, and efficient experience for both patients and doctors by managing appointments with real-time availability and controlled booking limits.

🚀 Features
👨‍⚕️ Doctor Appointment Booking System
Users can browse doctors and book appointments بسهولة.
📅 Limited Daily Bookings per Doctor
Prevents overbooking by restricting the number of appointments per day.
💳 Secure Payment Integration
Appointments are confirmed only after successful payment.
🔐 Authentication & Authorization
Secure user login and signup functionality.
📊 Admin Panel (Optional if included)
Manage doctors, appointments, and users.
⚡ Responsive UI
Built with modern design using TailwindCSS.
🛠️ Tech Stack

Frontend:

React.js
Tailwind CSS

Backend:

Node.js
Express.js

Database:

MongoDB

📁 Project Structure
MeduraX/
│── client/        # Frontend (React)
│── server/        # Backend (Node + Express)
│── models/        # Database models
│── routes/        # API routes
│── controllers/   # Business logic
│── config/        # DB & environment configs

⚙️ Installation & Setup
Clone the repository
git clone https://github.com/shami700/MeduraX.git
cd MeduraX
Install dependencies
cd client
npm install

cd ../server
npm install
Setup environment variables
Create a .env file in the server folder and add:
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
Run the application
# Start backend
cd server
npm start

# Start frontend
cd client
npm start


🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

📧 Contact
👤 Shami Arzoo
📩 Email: shamiarzoo6@gmail.com
🔗 GitHub: https://github.com/shami700
⭐ Support

If you like this project, please give it a ⭐ on GitHub!

