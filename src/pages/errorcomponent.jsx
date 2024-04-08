const ErrorComponent = ({ message = "Page Not Found" }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorComponent;
