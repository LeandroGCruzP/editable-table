import * as yup from 'yup'

export function UpdateUserNameEmailSchema() {
	const UserSchema = yup.object().shape({
		name: yup
			.string()
			.required('Name is required'),
		email: yup
			.string()
			.required('Email is required')
			.email('Type email is incorrect'),
	})

	return UserSchema
}
