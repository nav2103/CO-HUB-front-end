import RegistrationForm from "../../Components/RegistrationForm";

const Registration = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-tr from-teal to-lilac rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-black/10 backdrop-blur-lg" />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
