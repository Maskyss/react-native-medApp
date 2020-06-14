import doctorwoman from '../assets/doctorWoman.png';
import patient from '../assets/patientFace.png';
import doctorman from '../assets/doctorman.png';
import patientman from '../assets/patientFace2.png';

const imageMan = {
  doctorwoman: doctorwoman,
  doctorman: doctorman,
  patientWoman: patient,
  patientMan: patientman,
};
const returnImage = (sex, role) => {
  if (sex === 'man' && role === 'doctor') {
    return imageMan.doctorman;
  } else if (sex === 'man' && role === 'patient') {
    return imageMan.patientMan;
  } else if (sex === 'woman' && role === 'doctor') {
    return imageMan.doctorwoman;
  } else if (sex === 'woman' && role === 'patient') {
    return imageMan.patientWoman;
  }
};
export {imageMan, returnImage};
