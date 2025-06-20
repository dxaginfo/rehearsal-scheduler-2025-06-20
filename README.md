# Rehearsal Scheduler

A web application for automatically scheduling band rehearsals, sending reminders, tracking attendance, and suggesting optimal rehearsal times based on member availability.

## 🎵 Features

- **User Authentication and Management**
  - Secure login, registration, and profile management
  - Role-based permissions (band leader, member)

- **Band/Group Management**
  - Create and manage multiple bands/groups
  - Invite members and assign roles

- **Availability Management**
  - Set recurring weekly availability
  - Mark specific dates as unavailable
  - Calendar integration (Google, Apple, Microsoft)

- **Rehearsal Scheduling**
  - Manual scheduling
  - AI-assisted scheduling based on member availability
  - Recurring rehearsal setup

- **RSVP and Attendance Tracking**
  - Confirm or decline rehearsal invitations
  - Track attendance history
  - Generate reports

- **Notifications and Reminders**
  - Email, in-app, and SMS notifications
  - Customizable notification preferences
  - Automated rehearsal reminders

- **Rehearsal Resources**
  - Attach notes and resources to events
  - Share rehearsal recordings
  - Track songs practiced

- **Analytics and Insights**
  - Attendance patterns
  - Optimal rehearsal time suggestions
  - Rehearsal frequency statistics

## 🚀 Technology Stack

### Front-end
- React.js
- Material-UI
- Redux
- FullCalendar.js
- Formik with Yup validation

### Back-end
- Node.js with Express
- JWT Authentication
- Prisma ORM
- SendGrid (Email)
- Firebase Cloud Messaging (Notifications)

### Database
- PostgreSQL
- Redis (Caching)

### DevOps
- GitHub Actions
- AWS (EC2, RDS)
- Docker
- CloudWatch

## 📋 Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm or yarn
- PostgreSQL
- Redis
- AWS account (for production deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dxaginfo/rehearsal-scheduler-2025-06-20.git
   cd rehearsal-scheduler-2025-06-20
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In backend directory
   cp .env.example .env
   # Edit .env with your database and service credentials
   ```

4. **Run database migrations**
   ```bash
   cd backend
   npx prisma migrate dev
   ```

5. **Start development servers**
   ```bash
   # Start backend server (from backend directory)
   npm run dev
   
   # Start frontend server (from frontend directory)
   npm start
   ```

6. **Access the application**
   - Backend API: http://localhost:5000
   - Frontend: http://localhost:3000

## 📱 Mobile Responsiveness

The application is designed to be fully responsive across all devices:

- Responsive layout that adapts to screen size
- Touch-friendly interface for mobile users
- Optimized for both portrait and landscape orientations

## 🔒 Security Features

- JWT-based authentication
- HTTPS encryption
- Password hashing using bcrypt
- Input validation and sanitization
- CSRF protection
- Rate limiting

## 🔄 Integration Capabilities

- Google, Apple, and Microsoft Calendar integration
- Spotify/Apple Music for song references
- Cloud storage services (Google Drive, Dropbox)
- Communication platforms (Slack, Discord)

## 📊 Project Status

This project is currently in active development.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [Your Name](https://github.com/dxaginfo)

## 🙏 Acknowledgements

- Special thanks to all the musicians and bands who provided input on their scheduling challenges
- Icon set by [FontAwesome](https://fontawesome.com/)