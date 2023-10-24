import { Box, Button, Card, FormLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import  ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



const UserProfile = () => {
  const [country, setCountry] = useState('');
  // const [preferredCountry, setPreferredCountry] = useState('');
  const [region, setRegion] = useState('');
  // const [preferredRegion, setPreferredRegion] = useState('');

  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    sex: '',
    education: '',
    languages: [],
    drivingLicense: false,
    tribe: '',
    // currentLocation: '',
    country:'',
    region:'',
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
  const selectCountry = (val) => {
    setCountry(val);
  }

  const selectRegion = (val) => {
    setRegion(val);
  }
//Preferred Location Listing
  const [enteredValue, setEnteredValue] = useState(''); // Input field value
  const [selectedValues, setSelectedValues] = useState([]); // List of selected values

  const handleInputValueChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleAddValue = () => {
    if (enteredValue.trim() !== '') {
      setSelectedValues([...selectedValues, enteredValue]);
      setEnteredValue('');
    }
  };

  const handleRemoveValue = (value) => {
    setSelectedValues(selectedValues.filter((item) => item !== value));
  };


  //Skills Listing
  const [enteredSkill, setEnteredSkill] = useState(''); // Input field value
  const [selectedSkills, setSelectedSkills] = useState([]); // List of selected values

  const handleInputSkillChange = (event) => {
    setEnteredSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (enteredSkill.trim() !== '') {
      setSelectedSkills([...selectedSkills, enteredSkill]);
      setEnteredSkill('');
    }
  };

  const handleRemoveSkill = (value) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== value));
  };


  // Email Input component
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailPattern.test(newEmail));
  };

  //Uploading documents
  const [acceptedFile, setAcceptedFiles] = useState([]);
  const [crop, setCrop] = useState({aspect: 1});
  const [croppedImage, setCroppedImage] = useState(null);

  const onDrop=(accepted)=>{
      setAcceptedFiles(accepted);
  }

  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      // Defile accepted file types
      accept:['.pdf', '.jpg'],

      // Allow multiple file selection
      multiple:true,
  });
  const handleImageLoad=(image)=>{
      setCrop({
          unit:'%',
          width:100,
          aspect:1,
      });
  };

  const handleImageCrop=(crop) =>{
      setCrop(crop);
  }

  const handleImageCropComplete=(croppedArea, croppedAreaPixels)=>{
      setCroppedImage(croppedArea)
  };


  return (
    <>
      <Navbar />
      <Card sx={{mb:3}}>
      <Box sx={{ height: '230vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ margin: 'auto', width: '50%' }}>
        <Box onSubmit={handleSubmit} component="form" className='form-form_style border-style'>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

         
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
                 InputLabelProps={{
                  shrink:true,
                  required:true
                 }}
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
              sx={{mb:3}}
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
              <br />
              <CountryDropdown
              sx={{mb:3}}
              value={country}
              onChange={(val) => selectCountry(val)}
              />
              <RegionDropdown
               country={country}
               value={region}
               onChange={(val) => selectRegion(val)}
               />
               <br />
               <br />
               <FormLabel>Are you open for Employment</FormLabel>
               <Select
                sx={{ mb: 3 }}
                defaultValue='level'
                onChange={handleInputChange}
                name='level-of-education'
                InputLabelProps={{
                  shrink: true,
                  required: true
                }}
                >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
                </Select>

                <br />
              {/* <TextField sx={{mb:3}}
              fullWidth
              id='preferredLocations'
              type='text'
              label='Your Preferred Job Locations'
              InputLabelProps={{
                shrink: true,
                required: true
              }}
              placeholder='Your Preferred Job Locations'
              onChange={handleInputChange}
              /> */}
              {/* <br /> */}
              <input sx={{mb:3}}
              fullWidth
              type="text"
              value={enteredValue}
              onChange={handleInputValueChange}
              placeholder="Preferred Work Location"
          onKeyUp={(event) => {
            if (event.key === 'Enter' || event.key === ',') {
              handleAddValue();
            }
          }}
          />
           <button onClick={handleAddValue}>Add</button>
    
      <div>
        {selectedValues.map((value, index) => (
          <div key={index}>
            {value}
            <button onClick={() => handleRemoveValue(value)}>Remove</button>
          </div>
        ))}
      </div>
      <br />

              <TextField sx={{mb:3}}
              fullWidth
              id='phoneNumber'
              type='tel'
              label='Active Phone Number'
              InputLabelProps={{
                shrink:true,
                required:true
              }}
              placeholder='Phone Number'
              onChange={handleInputChange}
              />
               <TextField sx={{mb:3}}
               fullWidth
              type="email"
              value={email}
              label='E-mail'
              InputLabelProps={{
                shrink:true,
                required:true
              }}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              />
           
      {!isEmailValid && (
        <p style={{ color: 'red' }}>Please enter a valid email address.</p>
      )}

<TextField sx={{mb:3}}
              fullWidth
              type="text"
              value={enteredSkill}
              onChange={handleInputSkillChange}
              placeholder="Your Skills"
          onKeyUp={(event) => {
            if (event.key === 'Enter' || event.key === ',') {
              handleAddSkill();
            }
          }}
          />
           <button onClick={handleAddSkill}>Add</button>
    
      <div>
        {selectedSkills.map((value, index) => (
          <div key={index}>
            {value}
            <button onClick={() => handleRemoveSkill(value)}>Remove</button>
          </div>
        ))}
      </div>
      <br />
      <FormLabel>Tell Us About Yourself</FormLabel>
      <br />
      <br />
      <TextField sx={{mb:3}}
      fullWidth
      id='briefStatement'
      type='text'
      label='Description'
      // value={briefStatement}

      InputLabelProps={{
        shrink:true,
        required:true
      }}
      onChange={handleInputChange}
      placeholder='Tell us about yourself'
      />

      <FormLabel>Upload Your Documents Here..</FormLabel>
      {/* Upload your Documents */}
      <Box className="document-holder" sx={{ p: 4, textAlign: 'center' }}>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {acceptedFile.length === 0 ? (
              <h6>Upload Your Certificates(Driving licence, Education certificates, Good Conduct etc) in one</h6>
            ) : (
              <p>{acceptedFile[0].name} uploaded successfully</p>
            )}
          </div>
          {acceptedFile.length > 0 && (
            <Button variant="contained" color="primary" onClick={() => setAcceptedFiles([])}>
              Clear Document
            </Button>
          )}
        </Box>
        <FormLabel>Upload an Official Passport Photo</FormLabel>
               <br />
             <Button type='submit'>Submit Profile</Button>
            </form>
            
          </Box>
        </Box>
        </div>
      </Box>
     </Card>
      <Footer />
    </>
  );

};


export default UserProfile