import RegisterComponent from "@/components/auth/register-component";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-bold text-primary">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Join thousands of learners from around the world
          </p>
        </div>
        <RegisterComponent />
      </div>
    </div>
  );
};

export default RegisterPage;
