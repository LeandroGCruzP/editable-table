import * as yup from 'yup'

export function CreateUserSchema() {
	const UserSchema = yup.object().shape({
		name: yup
			.string()
			.required('Name is required'),
		is_admin: yup
			.boolean()
			.required('Is admin is required'),
		age: yup
			.number()
			.required('Age is required'),
		email: yup
			.string()
			.required('Email is required')
			.email('Type email is incorrect'),
	})

	return UserSchema
}
