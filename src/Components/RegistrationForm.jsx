const RegistrationForm = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-2 blur-2xl opacity-10 group-hover:opacity-40 transition duration-1000 bg-slate-900 rounded-xl"></div>
      <div className="bg-slate-900 text-slate-50 px-10 py-20 relative rounded-3xl border-2 border-gray-800">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-500 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your email address"
              type="email"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-lg font-medium">Mobile No.</label>
            <input
              className="w-full border-2 border-gray-500 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your mobile no."
              type="tel"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-lg font-medium">Address</label>
            <input
              className="w-full border-2 border-gray-500 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your address"
              type="text"
              required
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:bg-[#66fcf1] hover:duration-900 ease-in-out py-3 rounded-xl bg-[#317a76] text-slate-900 text-lg font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
