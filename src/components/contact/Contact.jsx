import React from 'react'
import './contact.css'
import Back from '../back/Back'
import { useState } from 'react'
import axios from 'axios'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');

const form = useRef();
const map='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2843.8255273009077!2d10.182880419280922!3d36.864355376945184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4e9df2298f%3A0x808a5740e560da0e!2sSSCF%20SAWSSEN!5e0!3m2!1sfr!2stn!4v1675107254801!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
const [succes, setSucces] = useState(false);
const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject1: "",
      subject2:""
    });
  
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      phone: "",
      subject1: "",
      subject2:""
    });

    const validateForm = () => {
        let isValid = true;
        let newErrors = { ...errors };
    
        if (!formData.name) {
          newErrors.name = "Le nom est obligatoire";
          isValid = false;
        } else if (formData.name.length < 3) {
          newErrors.name = "Le nom doit avoir au moins 3 caractères";
          isValid = false;
        } else {
          newErrors.name = "";
        }
    
        if (!formData.email) {
          newErrors.email = "L'email est obligatoire";
          isValid = false;
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
          newErrors.email = "L'email est incorrect";
          isValid = false;
        } else {
          newErrors.email = "";
        }
    
        if (!formData.phone) {
          newErrors.phone = "Le numéro de téléphone est obligatoire";
          isValid = false;
        } else if (isNaN(formData.phone)) {
          newErrors.phone = "Le numéro de téléphone doit être un nombre";
          isValid = false;
        } else {
          newErrors.phone = "";
        }
    
        if (!formData.subject1) {
          newErrors.subject1 = "Le sujet1 est obligatoire";
          isValid = false;
        } else {
          newErrors.subject1 = "";
        }

        if (!formData.subject2) {
            newErrors.subject2 = "Le sujet2 est obligatoire";
            isValid = false;
          } else {
            newErrors.subject2 = "";
          }


    
        setErrors(newErrors);
    
        return isValid;
      };
    
      const handleChange = event => {
        setFormData({...formData,[event.target.name]: event.target.value});
      };
    
      const handleSubmit = event => {
        
        event.preventDefault();
        emailjs.sendForm('service_u2abm7d', 'template_cprsyjr', form.current, '80Zpljm3LcWo2V6K7')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setSucces(true);
         // alert("Vos Cordonnées sont Envoyer avec succée")
      }, (error) => {
          console.log(error.text);
      });



        // fetch('https://developers.google.com/gmail/api/', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(formData)
        // })
        //   .then(response => {
        //     if (response.status === 200) {
        //       alert('E-mail envoyé avec succès!');
        //     } else {
        //       throw new Error('Echec de l\'envoi de l\'e-mail');
        //     }
        //   })
        //   .catch(error => {
        //     console.error(error);
        //     alert('Echec de l\'envoi e-mail');
        //   });
        if (!validateForm()) {
          return;
        }
        // else{
        //   const url="http://127.0.0.1/enquiry.php";
        //   let fData=new FormData();
        //   fData.append('name',name);
        //   fData.append('email',email);
        //   fData.append('phone',phone);
        //   fData.append('subject1',subject1);
        //   fData.append('subject2',subject2);
        //   axios.post(url,fData)
        //   .then(response=>alert(response.data))
        //   .catch(error=>alert(error));
        // }
    
        console.log("Données du formulaire soumises : ", formData);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject1: "",
          subject2:""
        });
      };

      



    //   axios
    //   .post("https://your-backend-api.com/contact", formData)
    //   .then((response) => {
    //     console.log(response);
    //     // Envoi d'un email de notification
    //     axios
    //       .post("https://your-backend-api.com/send-email", formData)
    //       .then((response) => {
    //         console.log(response);
    //         alert("Votre formulaire a été envoyé avec succès");
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         alert("Une erreur s'est produite lors de l'envoi de l'email");
    //       });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert("Une erreur s'est produite lors de l'enregistrement des données");
    //   });














    // const [content, setContent] = useState("");

    // const handleTranslate = async () => {
    //   // Replace YOUR_API_KEY with your actual Google Translate API key
    //   const apiKey = "YOUR_API_KEY";
    //   const response = await axios.post(
    //     `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    //     {
    //       q: content,
    //       target: "fr",
    //     }
    //   );
    //   setContent(response.data.data.translations[0].translatedText);
    // };







  return (
    <div>
        <Back title='Contact Us'/>
        <section className='contact padding'>
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map}>  </iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, soluta!</p>
                    <div className='items grid2'>
                        <div className="box">
                            <h4>ADRESSE</h4>
                            <p>122 west 21 st street New York</p>
                        </div>
                        <div className="box">
                            <h4>Email:</h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>PHONE</h4>
                            <p>+123 3545 5554</p>
                        </div>
                    </div>



                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="flexSB">
                            <input type="text"  placeholder='Name' name='name' value={formData.name} onChange={handleChange}/>
                            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                            <input type="email"  placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                        </div>
                        {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
                        <input type="text"  placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} />
                        {errors.subject1 && <div style={{ color: "red" }}>{errors.subject1}</div>}
                        <input type="text" placeholder='Subject' name='subject1' value={formData.subject1} onChange={handleChange} />
                         {errors.subject2 && <div style={{ color: "red" }}>{errors.subject2}</div>}
                        <textarea  cols="30" rows="10" name='subject2' value={formData.subject2} onChange={handleChange}>
                            Create A message here...                   
                         </textarea>
                         <button type='submit' className='primary-btn'>SEND MESSAGE</button>
                         {succes && <p className="succes-message">Votre formulaire a été enregistré avec succès !</p>}
                         
                    </form>
                    <h3>Follow us here</h3>
                    <span>FACEBOOK INSTAGRAM TWITTER</span>


                    
                </div>

                      
            </div>

        </section>
    </div>
  )
}

export default Contact