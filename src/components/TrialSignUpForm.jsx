import React from 'react'
  
export const TrialSignUpForm = () => {
  return (
    <form action="">
      <div className="mb-4">
        <input
          type="text"
          placeholder="First Name"
        //   {...register('firstName', { required: 'First Name cannot be empty' })}
        //   className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500 ${errors.firstName ? 'border-red-500' : ''}`}
        // 
        />
        {/* {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>} */}
      </div>
    </form>
  )
}
