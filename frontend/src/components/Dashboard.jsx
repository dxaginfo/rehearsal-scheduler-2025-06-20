import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import UpcomingRehearsals from './rehearsals/UpcomingRehearsals';
import BandsList from './bands/BandsList';
import NotificationsList from './notifications/NotificationsList';
import { useAuth } from '../contexts/AuthContext';
import { useRehearsals } from '../contexts/RehearsalsContext';

const Dashboard = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const { rehearsals, fetchRehearsals } = useRehearsals();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchRehearsals();
  }, [fetchRehearsals]);

  useEffect(() => {
    // Convert rehearsals to calendar events
    if (rehearsals) {
      const calendarEvents = rehearsals.map(rehearsal => ({
        id: rehearsal.id,
        title: rehearsal.title,
        start: new Date(rehearsal.startTime),
        end: new Date(rehearsal.endTime),
        extendedProps: {
          location: rehearsal.location,
          bandName: rehearsal.band.name,
          description: rehearsal.description
        }
      }));
      setEvents(calendarEvents);
    }
  }, [rehearsals]);

  const handleEventClick = (clickInfo) => {
    // Navigate to rehearsal details page
    console.log('Event clicked:', clickInfo.event);
  };

  const handleDateClick = (dateInfo) => {
    // Open modal to create new rehearsal
    console.log('Date clicked:', dateInfo.date);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Welcome Message */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome back, {user?.firstName || 'Musician'}!
            </Typography>
            <Typography variant="body1">
              Manage your band rehearsals, track attendance, and schedule new sessions all in one place.
            </Typography>
          </Paper>
        </Grid>

        {/* Calendar */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 500,
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Your Schedule
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={events}
                eventClick={handleEventClick}
                dateClick={handleDateClick}
                height="100%"
              />
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3} direction="column">
            {/* Quick Actions */}
            <Grid item>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button variant="contained" color="primary">
                    Schedule Rehearsal
                  </Button>
                  <Button variant="outlined" color="primary">
                    Create Band
                  </Button>
                  <Button variant="outlined">
                    Invite Members
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Notifications */}
            <Grid item>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Notifications
                </Typography>
                <NotificationsList />
              </Paper>
            </Grid>

            {/* Upcoming Rehearsals */}
            <Grid item>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Upcoming Rehearsals
                </Typography>
                <UpcomingRehearsals />
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Your Bands */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Your Bands
            </Typography>
            <BandsList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;