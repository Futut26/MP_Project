import InputError from "@/Components/InputError";

const UpdateProfilePhoto = ({className }) => {
    const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        photo: null,
    });
    
  return (
    <section className={className}>
        <header>
            <h2 className="text-lg font-medium text-gray-900">Photo Profile</h2>

            <p className="mt-1 text-sm text-gray-600">
            Update your account's profile photo.
            </p>
        </header>

        <div className="mt-6">
            <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
                <img
                className="h-10 w-10 rounded-full"
                src={user.profile_photo_url}
                alt={user.name}
                />
            </div>

            <div className="flex-1">
                <label
                htmlFor="photo"
                className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                <span>Change</span>
                <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="sr-only"
                    onChange={(e) => {
                    e.target.form.submit();
                    }}
                />
                </label>
            </div>
            </div>

            <InputError className="mt-2" message={errors.photo} />
        </div>
    </section>
  )
}

export default UpdateProfilePhoto
