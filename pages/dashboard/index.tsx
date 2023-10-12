import InsideLayout from '~/layouts/InsideLayout';
import React, { useState, useEffect } from 'react';
import { useMediaQuery, Box, Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MyLessons from '~/components/pages/dashboard/MyLessons';
// Tab Contents

const CoachDashboard = () => {
  const [value, setValue] = React.useState('lessons');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <InsideLayout>
      <TabContext value={value}>
        <Box className="mx-auto mt-2 w-fit bg-slate-50">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            sx={{
              justifyContent: 'center',
              overflowX: 'auto',
              maxWidth: '100%', // or some other width you prefer
              '& .MuiTabs-scroller': {
                display: 'flex',
                justifyContent: 'center',
              },
            }}
          >
            <Tab
              value="lessons"
              label={isMobile ? null : 'My Lessons'}
              icon={<CastForEducationIcon />}
              iconPosition="start"
              sx={{ minHeight: '45px', width: isMobile ? 'fit-content' : 180 }}
            />
            <Tab
              value="calendar"
              label={isMobile ? null : 'My Calendar'}
              icon={<CalendarMonthIcon />}
              iconPosition="start"
              sx={{ minHeight: '45px', width: isMobile ? 'fit-content' : 180 }}
            />
          </Tabs>
        </Box>
        <TabPanel sx={{ padding: 0, marginTop: '16px' }} value="lessons">
          <MyLessons />
        </TabPanel>
        <TabPanel sx={{ padding: 0, marginTop: '16px' }} value="calendar"></TabPanel>
      </TabContext>
    </InsideLayout>
  );
};

export default CoachDashboard;
