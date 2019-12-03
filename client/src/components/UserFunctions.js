import axios from "axios";

export const register = async newUser => {
  const response = await axios
    .post("/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      role:newUser.role
    });
    return response.data;
  
};

export const insertappointmentinfo =  async appointmentdetails => {
 try {
    const response = await axios
      .post("insertappointmentinfo/", {
        PatientID: appointmentdetails.PatientID,
        DoctorID: appointmentdetails.DoctorID,
        AppointmentDate: appointmentdetails.date,
        AppointmentTime: appointmentdetails.time,
        Consent: appointmentdetails.consent
      });
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
 // console.log(response);
};

export const sendmail =  async appointmentdetails => {
  try {
     const response = await axios
       .post("sendmail/", {
        DoctorEmail: appointmentdetails.DoctorEmail,
        PatientEmail: appointmentdetails.PatientEmail,
        DoctorName:appointmentdetails.DoctorName,
        AppointmentDate: appointmentdetails.date,
        AppointmentTime: appointmentdetails.time
       });
     return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };


export const insertdoctorprofile =  async doctorprofiledetails => {
  try {
     const response = await axios
       .post("doctorprofile/", {
          DrID:doctorprofiledetails.DrID,
          Degree: doctorprofiledetails.Degree,
          Specialization: doctorprofiledetails.Specialization,
          YearOfExperience: doctorprofiledetails.YearOfExperience,
          Address: doctorprofiledetails.Address,
          Contact: doctorprofiledetails.Contact,
          Fee: doctorprofiledetails.Fee,
          Gender: doctorprofiledetails.Gender
       });
     return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };

export const login = async user => {
  try {
    const response = await axios
      .post("register/login", {
        id:user.userid,
        email: user.email,
        Password: user.password 
      });
    console.log('login response', response);
    localStorage.setItem("usertoken", response.data.token1);
    localStorage.setItem("email", user.email);
    localStorage.setItem("role", response.data.user.Role);
    localStorage.setItem("ID", response.data.user.ID);
    return response.data;
  }
  catch (err) {
    //console.log(err);
    alert(err);
  }
};
export const returnallspecialization = async()  => {
  console.log('In Spcialization for returning all specialization');
  try {
    const response = await axios
      .get("returnall/specialization");
    //console.log('all specialization ', response);
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };

 export const returnallspecificdoctor = async(specialization)  => {
  console.log('In specific doctor for returning names');
  try {
    const response =  axios
      .get("returnall/specificdoctor", {
        params: {
          Specialization: specialization
        }
      });
   // console.log('all docotrs ', response);
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };

 export const returnallspecificdoctordetails = async(id)  => {
  console.log('In specific doctor for returning names');
  try {
    const response =  axios
      .get("returnall/specificdoctordetails", {
        params: {
          ID: id
        }
      });
    console.log('Doctor details ', response);
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };
 export const patientbookingdetails = async(id)  => {
  //console.log('In specific doctor for returning names');
  try {
    const response =  axios
      .get("returnall/patientbookings", {
        params: {
          ID: id
        }
      });
    //console.log('Doctor details ', response);
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };
 export const doctorappointments = async(id)  => {
  //console.log('In specific doctor for returning names');
  try {
    const response =  axios
      .get("returnall/doctorappointment", {
        params: {
          ID: id
        }
      });
    //console.log('Doctor details ', response);
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };
 export const patientchecked =  async (id) => {
  console.log('in updatefile userfunction.js', id);
  try {
     const response = await axios
       .post("returnall/updatepatientcheck", {
         
        BookingID: id
         
       });
      return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
 };


export const returnallfiles =  async emailid => {
  console.log('in return all file api', emailid);
  try {
    const response = await axios
      .get("returnfiles/", {
        params: {
          Email_id: emailid
        }
      });
    console.log('all files', response);
    return response.data;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };

 export const deletefile =  async key => {
  console.log('in delete all file api key', key);
  try {
     const response = await axios
       .get("returnfiles/delete", {
         params: {
           key: key
         }
       });
     console.log('all files', response);
     return response.data;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };

 //deletefileinfor from database
 export const deletefilefromdatabase =  async id => {
  console.log('in delete all file api', id);
  try {
     const response = await axios
       .delete("returnfiles/deletefromdatabase", {
         params: {
           id: id
         }
       });
     console.log('Deleted from database', response);
     return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };


 




 export const returnAdminfiles =  async () => {
  try {
     const response = await axios
       .get("returnfiles/admin");
     console.log('all admin files', response);
     return response;
   }
   catch (err) {
     console.log(err);
     alert(err);
   }
  // console.log(response);
 };

//Casheir

export const Cashierreturn = async()  => {
  //console.log('In Spcialization for returning all specialization');
  try {
    const response = await axios
      .get("returnall/cashierdata");
    //console.log('all specialization ', response);
    return response;
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
  // console.log(response);
 };
 
 

 