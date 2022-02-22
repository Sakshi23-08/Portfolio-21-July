// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm();
  
//   // Function that displays a success toast on bottom right of the page when form submission is successful
//   const toastifySuccess = () => {
//     toast('Form sent!', {
//       position: 'bottom-right',
//       autoClose: 5000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: false,
//       className: 'submit-feedback success',
//       toastId: 'notifyToast'
//     });
//   };
  
//   // Function called on submit that uses emailjs to send email of valid contact form
//   const onSubmit = async (data) => {
//     // Destrcture data object
//     const { name, email, subject, message } = data;
//     try {
//       const templateParams = {
//         name,
//         email,
//         subject,
//         message
//       };

//       await emailjs.send(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_USER_ID
//       );

//       reset();
//       toastifySuccess();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className='ContactForm' style={{padding: 100}}>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12 text-center'>
//             <div className='contactForm'>
//               <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
//                 {/* Row 1 of form */}
//                 <div className='row formRow'>
//                   <div className='col-6'>
//                     <input
//                       type='text'
//                       name='name'
//                       {...register('name', {
//                         required: { value: true, message: 'Please enter your name' },
//                         maxLength: {
//                           value: 30,
//                           message: 'Please use 30 characters or less'
//                         }
//                       })}
//                       className='form-control formInput'
//                       placeholder='Name'
//                     ></input>
//                     {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
//                   </div>
//                   <div className='col-6'>
//                     <input
//                       type='email'
//                       name='email'
//                       {...register('email', {
//                         required: true,
//                         pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//                       })}
//                       className='form-control formInput'
//                       placeholder='Email address'
//                     ></input>
//                     {errors.email && (
//                       <span className='errorMessage'>Please enter a valid email address</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 2 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                     <input
//                       type='text'
//                       name='subject'
//                       {...register('subject', {
//                         required: { value: true, message: 'Please enter a subject' },
//                         maxLength: {
//                           value: 75,
//                           message: 'Subject cannot exceed 75 characters'
//                         }
//                       })}
//                       className='form-control formInput'
//                       placeholder='Subject'
//                     ></input>
//                     {errors.subject && (
//                       <span className='errorMessage'>{errors.subject.message}</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 3 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                     <textarea
//                       rows={3}
//                       name='message'
//                       {...register('message', {
//                         required: true
//                       })}
//                       className='form-control formInput'
//                       placeholder='Message'
//                     ></textarea>
//                     {errors.message && <span className='errorMessage'>Please enter a message</span>}
//                   </div>
//                 </div>
//                 <button className='submit-btn' type='submit'>
//                   Submit
//                 </button>
//               </form>
//             </div>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// -----------------------------------------------------------22222222222222222222222-----------------------------------------------------------


import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

 

      const toastifySuccess = () => {
        toast('Message sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0miw2oj', 'template_1a1bocm', form.current, 'user_VaNlAw7sJo3EMEDYINugg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();  
      toastifySuccess();
  };



  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // await emailjs.send(
      //   process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   templateParams,
      //   process.env.REACT_APP_USER_ID
      // );

      // reset();
      // toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };



  return(
    
      <div style={{paddingTop: 40, paddingBottom: 20}}>     
         <div className='container'>
           <form ref={form} onSubmit={sendEmail} >
               <div className='row pt-5 mx-auto'>

                    <div className='col-8 form-group mx-auto'>
                   
                        <input type = "text" className='form-control'placeholder='Name' name='name'  {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}></input>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>

                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type = "email" className='form-control'placeholder='Email Address' name='email'  {...register('email', {
                        required: true,
                         pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                       })}></input>
                       {errors.email && (
                       <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                    </div>

                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type = "text" className='form-control'placeholder='Subject' name='subject'  {...register('subject', {
                         required: { value: true, message: 'Please enter a subject' },
                         maxLength: {
                           value: 75,
                           message: 'Subject cannot exceed 75 characters'
                         }
                      })}></input>
                      {errors.subject && (
                       <span className='errorMessage'>{errors.subject.message}</span>
                     )}
                    </div>

                    <div className='col-8 form-group pt-2 mx-auto'>
                        <textarea className='form-control' id="" cols={30} rows={8} placeholder='Your Message' name='message'  {...register('message', {
                         required: true
                      })}></textarea>
                       {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>

                    <div className='col-8  pt-3 mx-auto' style={{color: 'purple'}}>
                        <input type = "submit" className='btn btn-info' value={"Send Message"} ></input>
                    </div>                    

               </div>
           </form>
           <ToastContainer/>
         </div>
      </div>
    
  );
};

export default Contact;