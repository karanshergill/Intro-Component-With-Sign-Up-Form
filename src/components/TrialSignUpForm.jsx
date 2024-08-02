import { useForm } from 'react-hook-form';
import errorIcon from '../assets/icon-error.svg'

export const TrialSignUpForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch("firstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 md:p-10 rounded-lg z-10'>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: 'First Name cannot be empty' })}
          className={`w-full px-6 py-3 border rounded-lg text-sm font-semibold text-color-dark-blue focus:outline-none focus:border-color-dark-blue placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark-blue/60 ${errors.firstName ? 'border-red-500' : ''}`}
        />
        {errors.firstName && (
          <>
            <img src={errorIcon} alt="Error icon" className="absolute right-3 top-1/3 transform -translate-y-1/2" />
            <p className="text-right text-xs font-semibold italic mt-2 text-color-red">{errors.firstName.message}</p>
          </>
        )}
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: 'Last Name cannot be empty' })}
          className={`w-full px-6 py-3 border rounded-lg text-sm font-semibold text-color-dark-blue focus:outline-none focus:border-color-dark-blue placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark-blue/60 ${errors.lastName ? 'border-red-500' : ''}`}
        />
        {errors.lastName && (
          <>
            <img src={errorIcon} alt="Error icon" className="absolute right-3 top-1/3 transform -translate-y-1/2" />
            <p className="text-right text-xs font-semibold italic mt-2 text-color-red">{errors.lastName.message}</p>
          </>
        )}
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Email Address"
          {...register('email', {
            required: 'Email cannot be empty',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Looks like this is not an email'
            }
          })}
          className={`w-full px-6 py-3 border rounded-lg text-sm font-semibold text-color-dark-blue focus:outline-none focus:border-color-dark-blue placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark-blue/60 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <>
            <img src={errorIcon} alt="Error icon" className="absolute right-3 top-1/3 transform -translate-y-1/2" />
            <p className="text-right text-xs font-semibold italic mt-2 text-color-red">{errors.email.message}</p>
          </>
        )}
      </div>
      <div className="relative mb-4">
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password cannot be empty'
          })}
          className={`w-full px-6 py-3 border rounded-lg text-sm font-semibold text-color-dark-blue focus:outline-none focus:border-color-dark-blue placeholder:text-sm placeholder:font-semibold placeholder:text-color-dark-blue/60 ${errors.password ? 'border-red-500' : ''}`}
        />
        {errors.password && (
          <>
            <img src={errorIcon} alt="Error icon" className="absolute right-3 top-1/3 transform -translate-y-1/2" />
            <p className="text-right text-xs font-semibold italic mt-2 text-color-red">{errors.password.message}</p>
          </>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-color-green text-white text-sm py-4 rounded-lg hover:bg-color-green/50 transition duration-300"
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <div className='text-xs text-center text-color-grayish-blue mx-4 mt-4'>
        <p>By clicking the button, you are agreeing to our <span className='text-color-red font-semibold'>Terms and Services</span></p>
      </div>
    </form>

  )
}
