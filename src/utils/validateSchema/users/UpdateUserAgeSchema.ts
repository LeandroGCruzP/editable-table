import * as yup from 'yup'

export function UpdateUserAgeSchema() {
	const UserSchema = yup.object().shape({
		age: yup
			.number()
      .positive()
      .integer()
      .min(1)
      .max(99)
			.required('Age is required')
	})

	return UserSchema
}
