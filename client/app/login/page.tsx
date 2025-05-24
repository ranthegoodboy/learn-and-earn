import LoginComponent from "@/components/auth/login-component";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-bold text-primary">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue your learning journey
          </p>
        </div>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
