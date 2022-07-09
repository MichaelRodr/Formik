import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'


const initialValue={
  nombre:'',
  description:'',
  level:{
    normal:'Normal',
    urgente:'Urgente',
    bloqueante:'Bloqueante'
  },
  fechaInicio:new Date(),
  fechaCulminacion: new Date(),
  observacion:''
}

const SignupSchema = Yup.object().shape({
   nombre: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
   description: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
 });

const TaskForm = () => {
 
  return (
    
    <div className='container '>
      <Formik 
        initialValues={
          initialValue
          }
      validationSchema={SignupSchema}
       
       onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2) 
        );
      }}
      
       >
     {({ errors, touched })=> (
      <Form className='form-group form-control  d-flex align-content-center flex-wrap align-items-center flex-column' >

        <h1 className=' mb-10'>Task Form</h1>

      <div className='col-6 text-start'>

       <label className='mb-2 fw-bold text-start form-label '  name='nombre' type='text'>
        Name Task
       </label>
       <input className='form-control col-6'
         id="description"
         name="nombre"
         type="text"
         placeholder='Name Task'
       />
       {errors.nombre && touched.nombre ? 
        (<div>{errors.nombre}</div>) : null}
      </div>
      
      <div className='col-6 text-start'>
        <label htmlFor='description'className='mb-2 fw-bold text-start form-label align-item'   type='text'> Description</label>
       <input className='form-control'
         id="description"
         name="description"
         type="text"
         placeholder='Description Task'
       />
      
       {errors.description && touched.description ? 
       (<div>{errors.description}</div>)  : null}
      </div>
       
       
    <div className='col-6 text-start'>
      <label className='mb-2 fw-bold text-start form-label align-item' htmlFor="level">Levels</label>
       <select className='form-control rounded-top  p-1'
         id="level"
         name="level"
         type="text"
        
       >
        <option className='text-info bg-dark'>Normal</option>
        <option className='text-warning bg-dark'>Urgente</option>
        <option className='text-danger bg-dark'>Bloqueante</option>
       </select>
    </div>
       
 
       
      <div className='d-flex align-content-start'>
       <button className='btn btn-success mx-auto m-5 ' type="submit">Create task</button>
      </div>
      </Form>
     )}
      </Formik>
    </div>
  )
}

export default TaskForm