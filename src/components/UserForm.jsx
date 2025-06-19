import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CountrySelect } from 'react-country-state-city';

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile must be exactly 10 digits')
        .required('Mobile number is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // Handle only letters for name
  const handleNameInput = (e) => {
    const onlyLetters = e.target.value.replace(/[^A-Za-z\s]/g, '');
    formik.setFieldValue('name', onlyLetters);
  };

  // Handle only numbers for mobile
  const handleMobileInput = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    formik.setFieldValue('mobile', onlyNumbers);
  };

  return (
    <div className="container">
      <div className="formbox">
        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: '15px',position:"relative" }}>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleNameInput}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control"
              placeholder="Name*"
              style={{ width: '100%', height: '45px', marginBottom: '25px' }}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='error'>{formik.errors.name}</div>
            )}
          </div>

          {/* Mobile Field */}
          <div style={{ marginBottom: '15px',position:"relative" }}>
            <input
              id="mobile"
              name="mobile"
              type="text"
              onChange={handleMobileInput}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              className="form-control"
              placeholder="Mobile*"
              maxLength={10}
              style={{ width: '100%', height: '45px', marginBottom: '25px' }}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <div className='error'>{formik.errors.mobile}</div>
            )}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '15px' , position:"relative" }}>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="form-control"
              placeholder="Email*"
              style={{ width: '100%', height: '45px', marginBottom: '25px' }}
            />
            {formik.touched.email && formik.errors.email && (
              <div  className='error'>{formik.errors.email}</div>
            )}
          </div>

          {/* Country Dropdown */}
          <div className="input-box">
            <CountrySelect
              containerClassName="form-group"
              inputClassName=""
              placeHolder="Select Country*"
              // You can handle selected country with state
              // onChange={(val) => setSelectedCountry(val)}
            />
          </div>

          {/* Submit Button */}
          <button className="add-to-cart-btn w-100 mb-0 mt-4" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
