import { Box, Button, Card, FormLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Country, State, City } from 'country-state-city';
import Navbar from '../../components/Navbar';



const UserProfile = () => {
 

  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    sex: '',
    education: '',
    languages: [],
    drivingLicense: false,
    tribe: '',
    currentLocation: '',
    preferredLocations: [],
    openForEmployment: false,
    phoneNumber: '',
    email: '',
    skills: [],
    briefStatement: '',
    attachments: '',
    reference: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    if (type === 'checkbox') {
      const selectedOptions = [...options].filter((option) => option.selected).map((option) => option.value);
      setProfileData({ ...profileData, [name]: selectedOptions });
    } else if (type === 'checkbox' && name === 'openForEmployment') {
      setProfileData({ ...profileData, [name]: checked });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send profileData to the server and save it in MongoDB
      console.log('Profile data:', profileData);
      // Reset the form or navigate to the next step
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  // Implementation of country region selection for user location
  

  return (
    <>
      <Navbar />

      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box onSubmit={handleSubmit} component="form" className='form-form_style border-style'>
          <Box sx={{ mb: 3, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

            <form>
              {/* <label>
        Enter Your FullName:
      </label> */}
              <TextField sx={{ mb: 3 }}
                fullWidth
                id='name'
                type='text'
                label='Full Name'
                InputLabelProps={{
                  shrink: true,
                  required: true
                }}
                placeholder='Full Name'
                onChange={handleInputChange}
              // value={profileData.name}
              />
              <TextField sx={{ mb: 3 }}
                fullWidth
                id='name'
                type='number'
                label='Age'
                InputLabelProps={{
                  shrink: true,
                  required: true
                }}
                placeholder='Age'
                onChange={handleInputChange}
              // value={profileData.name}
              />

              <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", justifyContent: "center" }}>
                <FormLabel>Select Gender</FormLabel>

                <Select
                  sx={{ mb: 3 }}
                  defaultValue='Gender'
                  onChange={handleInputChange}
                  //  value={profileData.sex}
                  name='sex'
                //  InputLabelProps={{
                //   shrink:true,
                //   required:true
                //  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="Non-Binary">Non-Binary</MenuItem>
                  <MenuItem value="prefer-not-to-say">Prefer Not to Say</MenuItem>
                </Select>


                <FormLabel>Highest Level of Education</FormLabel>

                <Select
                  sx={{ mb: 3 }}
                  defaultValue='level'
                  onChange={handleInputChange}
                  //  value={profileData.education}
                  name='level-of-education'
                  InputLabelProps={{
                    shrink: true,
                    required: true
                  }}

                >
                  <MenuItem value="phd">PHD</MenuItem>
                  <MenuItem value="masters_Degree">Masters Degree</MenuItem>
                  <MenuItem value="underGraduate">UnderGraduate Degree</MenuItem>
                  <MenuItem value="diploma">Diploma</MenuItem>
                  <MenuItem value="certificate">Certificate</MenuItem>
                  <MenuItem value="secondary">Secondary Level</MenuItem>
                  <MenuItem value="primary">Primary Level</MenuItem>
                </Select>
              </Box>
              <TextField
                sx={{ mb: 3 }}
                fullWidth
                id='languages'
                type='text'
                label='Languages'
                InputLabelProps={{
                  shrink: true,
                  required: true
                }}

                placeholder='Languages You Speak'
                onChange={handleInputChange}
              // value={profileData.languages}
              />

              <FormLabel>Do you have a driving licence?</FormLabel>
              <Select
                sx={{ mb: 3 }}
                defaultValue='licence'
                onChange={handleInputChange}
                // value={profileData.drivingLicense}
                name='driving-licence'
                InputLabelProps={{
                  shrink: true,
                  required: true
                }}
              >
                <MenuItem value='yes'>Yes</MenuItem>
                <MenuItem value='no'>No</MenuItem>
              </Select>
              <TextField
                fullWidth
                id='tribe'
                type='text'
                label='Tribe'
                InputLabelProps={{
                  shrink: true,
                  required: true
                }}
                placeholder='Tribe'
                onChange={handleInputChange}
              />

              <FormLabel>Currect Location</FormLabel>
              <Button type="submit">Submit Profile</Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );

};


export default UserProfile